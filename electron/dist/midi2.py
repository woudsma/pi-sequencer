import sys
import copy
import json
from math import floor, ceil
from redis import Redis
import isobar as iso

def printf(*args):
  """ print to stdout """
  print(*args)
  sys.stdout.flush()

def main():
  # setup Redis
  redis = Redis(host='localhost', port=6379, db=0)

  # parse arguments
  _, bpm, clock_in_port, mfb_out_port = sys.argv

  # get available MIDI inputs/outputs
  midi_ins = iso.io.midi.get_midi_input_names()
  midi_outs = iso.io.midi.get_midi_output_names()

  midi_clock_in_name = ""
  midi_mfb_out_name = ""

  # map arguments to correct MIDI input/output
  for index, item in enumerate(midi_ins):
    if clock_in_port in item:
      midi_clock_in_name = item

  for index, item in enumerate(midi_outs):
    if mfb_out_port in item:
      midi_mfb_out_name = item

  printf(f"--> MIDI INFO: clock in = {midi_clock_in_name}\n--> MIDI INFO: midi out = {midi_mfb_out_name}")

  # setup MIDI
  midi_out = iso.MidiOutputDevice(device_name=midi_mfb_out_name, send_clock=True)
  midi_in = iso.MidiInputDevice(device_name=midi_clock_in_name)
  midi_in_callback = midi_in.midi.callback

  # create isobar timeline
  timeline = iso.Timeline(bpm, clock_source=midi_in, output_device=midi_out)

  printf(f"--> MIDI INFO: Awaiting MIDI clock signal from {midi_in.device_name}..")

  # utility functions
  def pivot(arr, axis):
    """ pivots a list around axis (axis) """
    return arr[axis:] + arr[:axis]

  def parse_sequence_data(trigs, velocities, notes):
    """ parse sequence data from string and return sequences """
    notes = notes.split(',')
    velocities = velocities.split(',')

    note_seq = [int(notes[i] if i < len(notes) else 0) if int(x) else None for (i, x) in enumerate(trigs)]
    velocity_seq = [int(velocities[i] if i < len(velocities) else 0) if int(x) else 0 for (i, x) in enumerate(trigs)]

    return note_seq, velocity_seq

  def parse_midi_cc_data(cc_tracks):
    """ parse MIDI CC data from string and return CC sequences """
    return [
      [list(map(float, cc_data.split(','))) if index == 1 else int(cc_data)
        for index, cc_data in enumerate(cc_track.split(':'))]
      for cc_track in cc_tracks.split('|')
    ]

  # create log file
  with open('dist/log/midi-log.txt', 'w') as file:
    current_project = None
    events = {}
    tracks = {}
    note_seqs = {}
    velocity_seqs = {}
    step = 0
    axis = 0

    def midi_in_event_callback(ev):
      """ handle MIDI in events """
      # call original callback
      midi_in_callback(ev)

      if ev.type in ['start', 'stop']:
        # send start/stop commands to parent process
        printf(f"midi:in:{ev.type}")

        if ev.type == 'start':
          midi_out.start()
          # reset previously pivoted event stream lists
          for (track_key, track_value) in tracks.items():
            for (event_key, event_value) in track_value.event_stream.items():
              if isinstance(event_value, iso.PSequence):
                if event_key == iso.EVENT_NOTE:
                  event_value.sequence = note_seqs[track_key]
                if event_key == iso.EVENT_AMPLITUDE:
                  event_value.sequence = velocity_seqs[track_key]

        if ev.type == 'stop':
          midi_out.stop()
          timeline.reset()

    def update_step(t):
      """ send current step to parent process """
      printf(f"midi:in:step {t}")
      nonlocal step
      step = t
      tempo = timeline.clock_source.tempo
      if tempo is not None:
        redis.set('bpm', round(tempo))

    timeline.schedule({
      "action": update_step,
      "args": {
        "t": iso.PCurrentTime()
      },
      "duration": 0.25,
    }, name='step')

    midi_in.midi.callback = midi_in_event_callback

    while True:
      try:
        # receive data from parent process
        line = input().strip()
        file.write(f"\n------------------------------\n{line}\n")
        file.flush()

        # parse incoming data string
        key, project, id, channel, is_muted, trigs, velocities, probabilities, notes, cc_tracks = line.split()

        if key == 'midi:out:notes':
          # unschedule existing tracks when switching between projects
          if project != current_project:
            current_project = project
            for track in tracks.values():
              if track in timeline.tracks:
                track.stop()
            tracks.clear()

          # setup track from incoming data
          track_name = f"track-{project}-{id}"
          steps = len(trigs)
          note_seq, velocity_seq = parse_sequence_data(trigs, velocities, notes)
          cc_seqs = parse_midi_cc_data(cc_tracks)


          file.write(f"project:    {project}\n")
          file.write(f"track_name: {track_name}\n")
          file.write(f"is_muted:   {is_muted}\n")
          file.write(f"steps       {str(steps)}\n")
          file.write(f"note_seq {str(note_seq)}\n")
          file.write(f"velo_seq {str(velocity_seq)}\n")
          file.write(f"cc:      {str(cc_seqs)}\n")
          file.flush()

          # save original sequences
          note_seqs[track_name] = note_seq
          velocity_seqs[track_name] = velocity_seq

          # calculate axis to pivot sequence around when quantize=1
          beat = ceil(step)
          axis = ((beat + 1 if beat == step and step > 0 else beat) * 4) % len(trigs)

          # update event data for the current track
          events[track_name] = {
            iso.EVENT_NOTE: iso.PSequence(pivot(note_seqs[track_name], axis)),
            iso.EVENT_AMPLITUDE: iso.PSequence(pivot(velocity_seqs[track_name], axis)),
            # iso.EVENT_GATE: iso.PSequence(cc_seq),
            iso.EVENT_DURATION: 0.25,
            iso.EVENT_CHANNEL: int(channel),
            iso.EVENT_ACTIVE: False if int(is_muted) == 1 else True,
          }
          # events[cc_track_name] = {
          #   iso.EVENT_CONTROL: int(current_cc_track),
          #   iso.EVENT_VALUE: iso.PSequence(pivot(cc_seq, axis)),
          #   # iso.EVENT_GATE: iso.PSequence(velocity_seq),
          #   iso.EVENT_DURATION: 0.25,
          #   iso.EVENT_CHANNEL: int(channel),
          # }

          # schedule or update track events
          if track_name in tracks:
            tracks[track_name].update(events[track_name], quantize=1)
          else:
            tracks[track_name] = timeline.schedule(params=events[track_name], name=track_name, quantize=4)

          # if cc_track_name in tracks:
          #   tracks[cc_track_name].update(events[cc_track_name], quantize=1)
          # else:
          #   tracks[cc_track_name] = timeline.schedule(params=events[cc_track_name], name=cc_track_name, quantize=4)

          file.write(f"num tracks   {len(timeline.tracks)}\n")
          file.flush()

      except EOFError:
        break

    # run the isobar timeline
    timeline.run()

if __name__ == '__main__':
  main()

import sys
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

  def parse_sequence_data(trigs, velocities, probabilities, notes):
    """ parse sequence data from string and return sequences """
    notes = notes.split(',')
    velocities = velocities.split(',')
    probabilities = probabilities.split(',')

    note_seq = [int(notes[i] if i < len(notes) else 0) if int(x) else None for (i, x) in enumerate(trigs)]
    velocity_seq = [int(velocities[i] if i < len(velocities) else 0) if int(x) else 0 for (i, x) in enumerate(trigs)]
    probability_seq = [float(probabilities[i] if i < len(probabilities) else 0) if int(x) else 0 for (i, x) in enumerate(trigs)]

    return note_seq, velocity_seq, probability_seq

  def parse_midi_cc_data(cc_tracks):
    """ parse MIDI CC data from string and return CC sequences """
    return [
      [list(map(float, cc_data.split(','))) if index == 1 else int(cc_data)
        for index, cc_data in enumerate(cc_track.split(':'))]
      for cc_track in cc_tracks.split('|')
    ]
  
  def parse_trig_conditions_data(trig_conditions):
    """ parse trig conditions data from string and return sequence """
    return [list(map(int, x.split(':'))) for x in trig_conditions.split(',')]

  # create log file
  with open('dist/log/midi-log.txt', 'w') as file:
    current_project = None
    events = {}
    tracks = {}
    note_seqs = {}
    velocity_seqs = {}
    probability_seqs = {}
    cc_seqs = {}
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
                if event_key == iso.EVENT_CONTROL:
                  event_value.sequence = cc_seqs[track_key]

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

    midi_in.midi.callback = midi_in_event_callback

    while True:
      try:
        # receive data from parent process
        line = input().strip()
        file.write(f"\n------------------------------\n{line}\n")
        file.flush()

        # parse incoming data string
        key, project, id, channel, is_muted, trigs, velocities, probabilities, notes, cc_tracks, scale, trig_conditions = line.split()

        if key == 'midi:out:notes':
          # unschedule existing tracks when switching between projects
          if project != current_project:
            current_project = project
            for track in tracks.values():
              if track in timeline.tracks:
                track.stop()
            tracks.clear()

          # setup step action event
          step_track_name = "step"
          events[step_track_name] = {
            iso.EVENT_ACTION: update_step,
            iso.EVENT_ACTION_ARGS: {
              "t": iso.PCurrentTime()
            },
            iso.EVENT_DURATION: 0.25 / float(scale),
          }

          # schedule or update step action event
          if step_track_name in tracks:
            tracks[step_track_name].update(events[step_track_name], quantize=1)
          else:
            tracks[step_track_name] = timeline.schedule(params=events[step_track_name], name=step_track_name, quantize=4)

          # setup track from incoming data
          track_name = f"track-{project}-{id}"
          steps = len(trigs)
          note_seq, velocity_seq, probability_seq = parse_sequence_data(trigs, velocities, probabilities, notes)
          midi_cc_seqs = parse_midi_cc_data(cc_tracks)
          trig_conditions_seq = parse_trig_conditions_data(trig_conditions)

          file.write(f"project:    {project}\n")
          file.write(f"track_name: {track_name}\n")
          file.write(f"is_muted:   {is_muted}\n")
          file.write(f"steps       {str(steps)}\n")
          file.write(f"scale       {str(scale)}\n")
          file.write(f"note_seq    {str(note_seq)}\n")
          file.write(f"velo_seq    {str(velocity_seq)}\n")
          file.write(f"prob_seq    {str(probability_seq)}\n")
          file.write(f"midi cc     {str(midi_cc_seqs)}\n")
          file.write(f"trig cond   {str(trig_conditions_seq)}\n")
          file.flush()

          # calculate axis to pivot sequence around when quantize=1
          beat = ceil(step)
          axis = ((beat + 1 if beat == step and step > 0 else beat) * 4) % len(trigs)

          # save original sequences
          note_seqs[track_name] = note_seq
          velocity_seqs[track_name] = velocity_seq
          probability_seqs[track_name] = probability_seq

          # update event data for the current track
          def handle_trig_condition(i):
            """ handle trig conditions (in format OP:INDEX:REPEAT, e.g. 0:1:4 """
            index = int(i) % steps
            t_op, t_index, t_repeat = trig_conditions_seq[index]
            should_play = floor((int(i) - index) / steps) % t_repeat == t_index - 1
            if t_op == 0: return not should_play # AND
            if t_op == 1: return should_play     # NOT

          event_notes = iso.PSkipIf(
            iso.PSkip(
              iso.PSequence(pivot(note_seqs[track_name], axis)),
              iso.PSequence(pivot(probability_seqs[track_name], axis)),
            ),
            iso.PMap(iso.PSeries(axis), handle_trig_condition)
          )

          file.write(f"PSkipIf  {event_notes.copy().nextn(steps * 2)}\n")
          file.flush()

          events[track_name] = {
            iso.EVENT_NOTE: event_notes,
            iso.EVENT_AMPLITUDE: iso.PSequence(pivot(velocity_seqs[track_name], axis)),
            iso.EVENT_DURATION: 0.25 / float(scale),
            iso.EVENT_CHANNEL: int(channel),
            iso.EVENT_ACTIVE: False if int(is_muted) == 1 else True,
            # iso.EVENT_GATE: iso.PSequence(),
          }

          # schedule or update note events
          if track_name in tracks:
            tracks[track_name].update(events[track_name], quantize=1)
          else:
            tracks[track_name] = timeline.schedule(params=events[track_name], name=track_name, quantize=4)

          for cc_seq in midi_cc_seqs:
            if len(cc_seq) > 1:
              cc_control, cc_value = cc_seq
              if sum(cc_value) > 0:
                cc_track_name = f"{track_name}-cc-{cc_control}"

                # save original control sequence
                cc_seqs[cc_track_name] = cc_value
                
                # update control event sequence for the current track
                events[cc_track_name] = {
                  iso.EVENT_CONTROL: int(cc_control),
                  iso.EVENT_VALUE: iso.PSequence(pivot(cc_value, axis)),
                  iso.EVENT_DURATION: 0.25 / float(scale),
                  iso.EVENT_CHANNEL: int(channel),
                  iso.EVENT_ACTIVE: False if int(is_muted) == 1 else True,
                  # iso.EVENT_GATE: iso.PSequence(),
                }

                # schedule or update control events
                if cc_track_name in tracks:
                  tracks[cc_track_name].update(events[cc_track_name], quantize=1)
                else:
                  tracks[cc_track_name] = timeline.schedule(params=events[cc_track_name], name=cc_track_name, quantize=4)

                file.write(f"cc_seq:  {cc_track_name} {str(cc_value)}\n")
                file.flush()

          file.write(f"\nnum tracks   {len(timeline.tracks)}\n")
          file.flush()

      except EOFError:
        break

    # run the isobar timeline
    timeline.run()

if __name__ == '__main__':
  main()

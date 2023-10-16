import sys
import time
import json
from redis import Redis
import isobar as iso
from functools import reduce

def printf(*args):
  print(*args)
  sys.stdout.flush()

def main():
  redis = Redis(host='localhost', port=6379, db=0)

  _, bpm, clock_in_port, mfb_out_port = sys.argv

  midi_ins = iso.io.midi.get_midi_input_names()
  midi_outs = iso.io.midi.get_midi_output_names()

  midi_clock_in_name = ""
  midi_mfb_out_name = ""

  for index, item in enumerate(midi_ins):
    if clock_in_port in item:
      midi_clock_in_name = item

  for index, item in enumerate(midi_outs):
    if mfb_out_port in item:
      midi_mfb_out_name = item

  printf(f"--> MIDI INFO: clock in = {midi_clock_in_name}\n--> MIDI INFO: midi out = {midi_mfb_out_name}")

  midi_out = iso.MidiOutputDevice(device_name=midi_mfb_out_name, send_clock=True)
  midi_in = iso.MidiInputDevice(device_name=midi_clock_in_name)
  midi_in_callback = midi_in.midi.callback

  timeline = iso.Timeline(bpm, clock_source=midi_in, output_device=midi_out)

  def timeline_event_callback(a, b):
    printf('\nTIMELINE event_callback', a, b)

  def midi_in_event_callback(ev):
    midi_in_callback(ev)
    if ev.type in ['start', 'stop']:
      printf(f"midi:in:{ev.type}")
      if ev.type == 'start':
        midi_out.start()
      if ev.type == 'stop':
        midi_out.stop()
        timeline.reset()
        timeline.reset_to_beat()

  # timeline.on_event_callback = timeline_event_callback
  midi_in.midi.callback = midi_in_event_callback

  printf(f"--> MIDI INFO: Awaiting MIDI clock signal from {midi_in.device_name}..")

  def get_seq(trigs, velocities, notes, cc_tracks):
    notes = notes.split(',')
    velocities = velocities.split(',')
    cc_tracks = cc_tracks.split(',')

    note_seq = [int(notes[i] if i < len(notes) else 0) for (i, x) in enumerate(trigs)]
    velocity_seq = [int(velocities[i] if i < len(velocities) else 0) if int(x) else 0 for (i, x) in enumerate(trigs)]
    cc_seq = [int(cc_tracks[i] if i < len(cc_tracks) else 0) if int(x) else 64 for (i, x) in enumerate(trigs)]

    return note_seq, velocity_seq, cc_seq


  with open('dist/log/midi-log.txt', 'w') as file:
    events = {}
    tracks = {}
    step = 0

    def update_step(t):
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

    while True:
      try:
        line = input().strip()
        file.write(f"{line}\n")
        file.flush()

        key, id, trigs, velocities, notes, cc_tracks, bank, current_track, current_cc_track = line.split()

        if key == 'midi:out:notes':
          track_name = f"track-{id}"
          cc_track_name = f"cc-{int(current_cc_track)}"
          steps = len(trigs)
          note_seq, velocity_seq, cc_seq = get_seq(trigs, velocities, notes, cc_tracks)
          
          # printf(track_name)

          # file.write(f"track_name: {track_name}\n")
          # file.write(f"steps    {str(steps)}\n")
          # file.write(f"note_seq {str(note_seq)}\n")
          # file.write(f"velo_seq {str(velocity_seq)}\n")
          # file.write(f"cc_seq   {str(cc_seq)}\n")
          # file.flush()

          if track_name in tracks:
            events[track_name] = {
              iso.EVENT_NOTE: iso.PSequence(note_seq),
              iso.EVENT_AMPLITUDE: iso.PSequence(velocity_seq),
              iso.EVENT_DURATION: 0.25,
            }
            tracks[track_name].update(events[track_name], quantize=4)
            
            # offset = int(step) % len(trigs)
            # temp = {
            #   iso.EVENT_NOTE: iso.PSequence(note_seq[offset:], 1),
            #   iso.EVENT_AMPLITUDE: iso.PSequence(velocity_seq[offset:], 1),
            #   iso.EVENT_DURATION: 0.25,
            # }
            # timeline.schedule(params=temp, quantize=0, remove_when_done=True)

            file.write(f"step % trigs {int(step) % len(trigs)}\n")
            file.write(f"updated track {track_name}\n")
            file.write(f"step   {step}\n")
            file.flush()
            # pass
          else:
            # tracks[track_name] = timeline.schedule(quantize=4, name=track_name, replace=True)
            events[track_name] = {
              iso.EVENT_NOTE: iso.PSequence(note_seq),
              iso.EVENT_AMPLITUDE: iso.PSequence(velocity_seq),
              iso.EVENT_DURATION: 0.25,
            }
            tracks[track_name] = timeline.schedule(params=events[track_name], name=track_name, quantize=1)

            # file.write(f"\ntracks   {jsons.dump(timeline.tracks[0], indent=2)}\n")
            # file.write(f"\ntracks   {jsons.dump(['hi', 0], indent=2)}\n")
            # file.write(f"\ntracks   {str(timeline.tracks.__dict__)}\n")
          # file.write(f"\ntracks   {str(tracks[track_name].__dict__)}\n")
          file.write(f"\nnumtrx   {len(timeline.tracks)}\n")
              # f"\ntracks   {str(timeline.tracks[0].timeline.__dict__)}\n")
          file.flush()

          # seq = {
          #   iso.EVENT_NOTE: iso.PSequence(note_seq),
          #   iso.EVENT_AMPLITUDE: iso.PSequence(velocity_seq),
          #   iso.EVENT_DURATION: 0.25,
          # }

          # iso.PStaticPattern(key_sequence, 4)

          # new_control_seq = {
          #   iso.EVENT_CONTROL: int(current_cc_track),
          #   iso.EVENT_VALUE: iso.PSequence(cc_seq),
          #   iso.EVENT_DURATION: 0.25,
          # }

          # if cc_track_name in tracks:
          #   tracks[cc_track_name].update(new_control_seq, quantize=4 - (4 - len(trigs) / 4))
          #   # tracks[cc_track_name].update(new_control_seq, quantize=4)
          # else:
          #   tracks[cc_track_name] = timeline.schedule(params=new_control_seq, name=cc_track_name, replace=True, quantize=4)

          # new_seq = {
          #   iso.EVENT_NOTE: iso.PSequence(note_seq),
          #   iso.EVENT_AMPLITUDE: iso.PSequence(velocity_seq),
          #   iso.EVENT_DURATION: 0.25,
          # }

          # if track_name in tracks:
          #   tracks[track_name].update(new_seq, quantize=4 - (4 - len(trigs) / 4))
          #   # tracks[track_name].update(new_seq, quantize=4)
          # else:
          #   tracks[track_name] = timeline.schedule(params=new_seq, name=track_name, replace=True, quantize=4)

      except EOFError:
        break

    timeline.run()

if __name__ == '__main__':
  main()

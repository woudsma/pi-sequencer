#!/usr/bin/bash

if [ -f "/home/pi/.pi-sequencer-start" ]; then
  clear
  rm -f /home/pi/.pi-sequencer-start
  pushd pi-sequencer-io &>/dev/null || exit

  sudo python3 main.py &
  echo $! > main.py.pid

  pushd electron &>/dev/null || exit
  sudo startx /home/pi/pi-sequencer-io/electron/start.sh -- -nocursor
fi

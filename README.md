# pi-sequencer

#### Repository for the "Heron" multitrack Raspberry Pi hardware MIDI sequencer - 2023  

> _Messy WIP weekend project!_

Built with:
- Raspberry Pi 4B
- 4.3" DSI Touch Display
- Midiface 4x4 USB MIDI interface
- Custom PCB and various switches/encoders/GPIO expanders/LEDs/...
- Shell, Python and Node.js

The UI is built with Electron and React. The previous version of the UI used [`node-raylib`](https://github.com/RobLoach/node-raylib) - which has less overhead and is more performant, but developing in a browser window is much faster. The quad-core RPi seems to be able to handle it without too much latency. The Electron app communicates with the Python processes for IO access and shared state is stored in memory using Redis.

### Architecture
- External inputs such as buttons/encoders/LEDs are connected to MCP23017 GPIO expanders that connect to the RPi using I2C
- A Python process reads/writes values from/to the GPIO pins and updates the current application state and handles interrupts
- The application state lives in memory using Redis, disk persistence is enabled to reload state after RPi reboot
- The GUI is rendered with Electron and React
- Both the Python and Node.js processes can read/update the application state in Redis
- MIDI commands are sent, received and processed with the `isobar` Python library

### Installation
Tested on Raspberry Pi OS Lite (64-bit)  
```sh
# requirements
sudo apt-get update -y && sudo apt-get install git zsh -y
chsh -s $(which zsh)

# optionally configure git and SSH
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
ssh-keygen -f ~/.ssh/id_rsa -t rsa -N '' -C "your@email.com"

# clone repository
git clone git@github.com:woudsma/pi-sequencer.git pi-sequencer-io

# setup Node.js v18, pip3, startup service, chromium, etc.
cd pi-sequencer-io && ./setup.sh

# installation
sudo pip3 install -r requirements.txt
cd electron && npm install

# to start automatically on boot, add entry for launcher script in ~/.zshrc (or ~/.bashrc)
echo /home/pi/pi-sequencer-io/launcher.sh >> ~/.zshrc
sudo reboot now
```

### Usage  
The MIDI in/out ports will probably need to be set/updated to the correct ports for your setup. This can be done by updating the `_interface.yml` MIDI chart in `electron/static/midi-charts/`. You just need to make sure to update the `clock_in`, `outs` and `ports.in` + `ports.out` to the available (and desired) ports. You can find the available input/output ports using:
```sh
sudo python3 -c "import isobar; print(isobar.io.midi.get_midi_input_names())"
# > ['Midi Through:Midi Through Port-0 14:0', 'USB Midi 4i4o:USB Midi 4i4o MIDI 1 20:0', 'USB Midi 4i4o:USB Midi 4i4o MIDI 2 20:1', 'USB Midi 4i4o:USB Midi 4i4o MIDI 3 20:2', 'USB Midi 4i4o:USB Midi 4i4o MIDI 4 20:3', 'Midi Through:Midi Through Port-0 14:0', 'USB Midi 4i4o:USB Midi 4i4o MIDI 1 20:0', 'USB Midi 4i4o:USB Midi 4i4o MIDI 2 20:1', 'USB Midi 4i4o:USB Midi 4i4o MIDI 3 20:2', 'USB Midi 4i4o:USB Midi 4i4o MIDI 4 20:3']

# filter for port numbers
sudo python3 -c "import isobar; print(list(map(lambda x: x.split()[-1], isobar.io.midi.get_midi_input_names())))"
# > ['14:0', '20:0', '20:1', '20:2', '20:3', '14:0', '20:0', '20:1', '20:2', '20:3']

# to get the outputs, replace _input_names() with _output_names()
```

You can create `yml` files for any additional MIDI output devices. If `notes` and `names` have been configured, they will show up in the GUI when selecting the device under `MIDI MAP`.  

This is my setup:

> - Class compliant MIDI interface (Midiface 4x4) connected to Raspberry Pi with USB.  
> - Arturia KeyStep Pro MIDI out is connected to a MIDI in port on the interface.  
>   (The KeyStep only receives a MIDI clock over USB from Ableton on my computer)
> - A MIDI device (MFB-503 drumcomputer in my setup) is connected to the MIDI out port on the interface.
> - The output device receives MIDI clock and events from the Raspberry Pi.

### Development
I can highly recommend the [VS Code - Remote SSH](https://code.visualstudio.com/docs/remote/ssh) extension to develop quickly on the Raspberry Pi itself from your main computer. You'll need to setup a SSH key (see [Installation](https://github.com/woudsma/pi-sequencer/edit/master/README.md#installation)) if you want to push changes from the Raspberry Pi to a remote repo. You'd also need to configure a deploy key (your Raspberry Pi SSH public key) in your repository settings to be able to push to a remote repo.

Open a terminal window and SSH into the Raspberry Pi. The `pi-sequencer` app will automatically use the first available open terminal window to print its logs (app restart might be necessary if the app has started before you've opened a SSH session). Saving a file will cause the application to restart (mimicking hot reloading). Open a second window if you want to SSH into your Pi to execute scripts for example.

A development server is started after launch, it's accessible on `http:<raspberry-pi-ip-address>:3000` from other devices in your network. This is helpful for styling and UI debugging. The app state can be inspected with your browser Inspector or DevTools, by logging `window.storage`. This variable comes from the `storage` value that's stored in Redis.

All app state is stored in Redis. You can use `redis-cli` to inspect any state variables as well. You can safely run [`FLUSHALL`](https://redis.io/commands/flushall/) to reset everything (destroy all tracks and state). Just restart the app to re-initialize the state.

The launcher script is a workaround that makes sure that there's only one Electron process at a time. I ran into some issues when a Python (or Electron) process would exit unexpectedly and restart. If the startup service is not enabled, you can start the app by opening two SSH sessions, and running:
```sh
# window 1
cd pi-sequencer-io
sudo python3 main.py

# window 2
cd pi-sequencer-io/electron
./start.sh
```

### Media

https://github.com/woudsma/pi-sequencer/assets/6162978/8dc7daa2-280c-4763-b87b-1b6a334eacd9

![heron](assets/heron1.jpg)
![heron](assets/heron2.jpg)
![heron](assets/heron0.jpg)
![sketch](assets/sketch.jpg)
![pcb](assets/pcb.jpg)

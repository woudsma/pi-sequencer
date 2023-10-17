# pi-sequencer

#### Repository for the "Heron" multitrack hardware MIDI sequencer - 2023  

> _Messy WIP weekend project!_

Built with:
- Raspberry Pi 4B
- 4.3" DSI Touch Display
- Midiface 4x4 USB MIDI interface
- Custom PCB and various switches/encoders/GPIO expanders/LEDs/...
- Shell, Python and Node.js

The UI is built with Electron and React. The previous version of the UI used `node-raylib` - which has less overhead and is more performant, but developing in a browser window is much faster. The quad-core RPi seems to be able to handle it without too much latency. The Electron app communicates with the Python processes for IO access and shared state is stored in memory using Redis.

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
sudo apt-get update -y
sudo apt-get install git zsh -y
chsh -s $(which zsh)

# optionally configure git and SSH
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
ssh-keygen -f ~/.ssh/id_rsa -t rsa -N '' -C "your@email.com"

# clone repository
git clone git@github.com:woudsma/pi-sequencer.git pi-sequencer-io

# setup Node.js v18 and startup service
cd pi-sequencer-io && ./setup.sh

# installation
sudo pip3 install -r requirements.txt
cd electron && npm install

# to run on boot, add entry for launcher script in ~/.zshrc (or ~/.bashrc)
echo /home/pi/pi-sequencer-io/launcher.sh >> ~/.zshrc
sudo reboot now
```

### Footage

https://github.com/woudsma/pi-sequencer/assets/6162978/8dc7daa2-280c-4763-b87b-1b6a334eacd9

![heron](assets/heron1.jpg)
![sketch](assets/sketch.jpg)
![pcb](assets/pcb.jpg)
![heron](assets/heron0.jpg)

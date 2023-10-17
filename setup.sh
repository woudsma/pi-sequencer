#!/bin/bash

sudo apt-get update -y

curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -

NODESOURCE_NODE_V18=$(cat <<EOF
deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x bullseye main
deb-src [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x bullseye main
EOF
)

sudo echo "$NODESOURCE_NODE_V18" > /etc/apt/sources.list.d/nodesource.list

STARTUP_FILE_SCRIPT=$(cat <<EOF
#!/bin/bash
echo "Creating pi-sequencer startup file"
touch /home/pi/.pi-sequencer-start
EOF
)

sudo echo "$STARTUP_FILE_SCRIPT" > /etc/init.d/pi-sequencer-start.sh
sudo chmod +x /etc/init.d/pi-sequencer-start.sh

START_SERVICE=$(cat <<EOF
[Unit]
Description=Pi Sequencer Startup Script

[Service]
Type=oneshot
ExecStart=/etc/init.d/pi-sequencer-start.sh

[Install]
WantedBy=multi-user.target
EOF
)

sudo echo "$START_SERVICE" > /etc/systemd/system/pi-sequencer-start.service

systemctl daemon-reload
systemctl enable pi-sequencer-start.service

sudo apt-get update -y
sudo apt-get install redis nodejs python3-pip -y

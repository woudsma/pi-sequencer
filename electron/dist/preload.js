const { contextBridge, ipcRenderer } = require('electron');

// send from browser to app - functions are camelCased
const send = [
  'log',
  'get:state',
  'set:storage',
  'clear:storage',
  'set:error',
  'update:leds',
  'update:sequence',
  'open:devtools',
  'reload:window',
  'reboot:rpi',
  'shutdown:rpi',
]

// receive in browser from app - functions are camelCased and prepended with 'on'
const receive = [
  'state:update',
  'counter:update',
  'window:reload',
  'midi:start',
  'midi:stop',
  'midi:step',
]

const createEventFunctions = (arr, prependOn = false) => {
  const convertedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    const words = string.split(':');
    let convertedString = prependOn ? 'on' : words[0];
    for (let j = (prependOn ? 0 : 1); j < words.length; j++) {
      const word = words[j];
      convertedString += word.charAt(0).toUpperCase() + word.slice(1);
    }
    convertedArray.push([convertedString, string]);
  }
  return convertedArray;
}

const bindIPCFunction = (prop) => (acc, [fn, event]) => ({
  ...acc,
  [fn]: data => ipcRenderer[prop](event, data)
})

contextBridge.exposeInMainWorld('electronAPI', {
  ...createEventFunctions(send).reduce(bindIPCFunction('send'), {}),
  ...createEventFunctions(receive, true).reduce(bindIPCFunction('on'), {}),
})

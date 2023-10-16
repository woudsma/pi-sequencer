import path from 'path'
import { readdirSync, readFileSync } from 'fs'
import { spawn } from 'child_process'
import { parse } from 'yaml'

import emitter from '../event-emitter'
import { int, print } from '../utils'

const { PWD } = process.env

class MIDI {
  BUILD_DIR = `${PWD}/dist`
  MIDI_DEVICE_CHARTS_DIR = `${this.BUILD_DIR}/midi-charts`
  MIDI_INTERFACE_FILE = '_interface.yml'
  MIDI_INTERFACE_CHART = {}
  MIDI_DEVICE_CHARTS = []

  constructor() { }

  init = async (client) => {
    print('### Spawning MIDI interface process')
    this.client = client
    this.loadMidiCharts()

    const bpm = await client.get('bpm')
    const { device } = this.MIDI_INTERFACE_CHART

    const args = [
      int(bpm) || 120,
      device?.midi?.config?.clock_in,
      device?.midi?.config?.outs?.[0],
    ]

    this.controller = new AbortController();
    this.process = spawn('sudo', ['python3', `${this.BUILD_DIR}/midi.py`, ...args], {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      signal: this.controller.signal,
    })
    // this.process.unref()

    this.process.stdout.on('data', (data) => {
      const output = data.toString().trim()
      if (!output.includes('midi:in:step')) {
        print('### Received data from child process:\n', output)
      }
      if (!output.includes('midi:in')) return
      if (['start', 'stop', 'step'].some(e => output.includes(e))) {
        return this.emit(...output.split(' '))
      }
    })

    this.process.stdout.on('error', (error) => {
      print('### stdout Error from Python:', data.toString())
      if (error.code == "EPIPE") process.exit(0)
    })

    this.process.stderr.on('data', (data) => {
      print('### stderr Error from Python:', data.toString())
    })

    this.process.on('close', (code) => {
      print('### Child process exited with code:', code)
      if (int(code) === 1) process.exit(1)
    })
  }

  cleanup = () => {
    if (this.controller) this.controller.abort()
  }

  sendMessage = (...data) => {
    this.process.stdin.write(`${Array.isArray(data) ? data.join(' ') : data}\r\n`)
  }

  on = emitter.on

  prevEmittedValue = {}
  emit = (key, value) => {
    if (key.includes('midi:in')) emitter.emit(key, value)
    if (key.includes('midi:out')) {
      if (this.prevEmittedValue[key] === value) return
      else this.prevEmittedValue = {}
      this.sendMessage(`${key} ${value}`)
      this.prevEmittedValue[key] = value
    }
  }

  loadMidiCharts = () => {
    try {
      readdirSync(this.MIDI_DEVICE_CHARTS_DIR)
        .forEach((file) => {
          const filePath = path.join(this.MIDI_DEVICE_CHARTS_DIR, file)
          print('### Loading MIDI chart:', file)

          try {
            if (!file.endsWith('.yml')) return
            const data = parse(readFileSync(filePath, 'utf8'))
            if (!data) return
            if (file === this.MIDI_INTERFACE_FILE) this.MIDI_INTERFACE_CHART = data
            else this.MIDI_DEVICE_CHARTS.push(data)
          } catch (err) {
            print('### Error reading file:', err)
          }
        })
    } catch (err) {
      print('### Error fetching MIDI implementation charts')
    }
  }
}

export default new MIDI()

import path from 'path'
import { watch, existsSync, readFileSync, writeFileSync } from 'fs'
import { spawn } from 'child_process'
import { app, dialog, BrowserWindow, ipcMain } from 'electron'
import { createClient } from 'redis'
import ip from 'ip'

import midi from './midi-io'
import { debounce, print } from '../utils'

print(`\n${Array.from({ length: 64 }).fill('-').join('')}`)

// define constants
const { PWD } = process.env
const FRONTEND_DIR = `${PWD}/dist/frontend`

// create Redis client
const client = createClient()

// define directory watcher for frontend reloading
let watcher
const watchDir = (dir, win) => {
  watcher = watch(
    dir,
    debounce((eventType) => {
      if (eventType === 'change') win.webContents.send('window:reload')
    }, 100),
  )
}

// open chromium devtools
const openDevtools = (event) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  if (!win.isDevToolsOpened()) win.openDevTools()
}

// disable GPU composition (+ WebGL and 3D CSS animations)
app.disableHardwareAcceleration()

// create electron browser window
let mainWindow
const createWindow = async ({ client, midi }) => {
  mainWindow = new BrowserWindow({
    kiosk: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      spellcheck: false,
      enableWebSQL: false,
      backgroundThrottling: false,
    },
  })

  // handle incoming IPC events
  ipcMain.on('log', (_, ...data) => print('IPC:', data))
  ipcMain.on('update:leds', (_, data) => client.set('led_values', data))
  ipcMain.on('update:sequence', (_, data) => midi.emit('midi:out:notes', data))
  ipcMain.on('open:devtools', (event) => openDevtools(event))
  ipcMain.on('reload:window', () => mainWindow.webContents.reload())
  ipcMain.on('reboot:rpi', () => spawn('sudo', ['reboot', '-h', 'now']))
  ipcMain.on('shutdown:rpi', () => spawn('sudo', ['shutdown', '-h', 'now']))

  ipcMain.on('set:error', (event, data) => {
    openDevtools(event)
    print('IPC:', `error ${JSON.stringify(data)}`)
    console.log(data)
  })

  ipcMain.on(
    'set:storage',
    debounce((_, data) => {
      print('IPC:', 'storage update')
      client.set('storage', data)
    }, 1000),
  )

  ipcMain.on('clear:storage', () => {
    print('IPC:', 'CLEAR STORAGE')
    client.set('storage', JSON.stringify({}))
  })

  ipcMain.on('get:state', async (_, data) => {
    // prepare memory transaction
    const transaction = client.multi()
    data.forEach((key) => transaction.get(key))
    const state = await transaction
      .exec()
      .then((result) =>
        data.reduce((acc, curr, i) => ({ ...acc, [curr]: result[i] }), {}),
      )
    mainWindow.webContents.send('state:update', state)
  })

  // handle MIDI events
  midi.on('midi:in:start', () => mainWindow.webContents.send('midi:start'))
  midi.on('midi:in:stop', () => mainWindow.webContents.send('midi:stop'))
  midi.on('midi:in:step', (e) => mainWindow.webContents.send('midi:step', e))

  // get state from storage
  const storage = await client.get('storage').then((e) => JSON.parse(e || '{}'))

  // inject storage into HTML
  const htmlPath = `${FRONTEND_DIR}/index.html`
  if (!existsSync(htmlPath)) return

  writeFileSync(
    htmlPath,
    readFileSync(htmlPath, 'utf-8').replace(
      '</body>',
      `\t<script>\n\t\twindow.storage=${JSON.stringify({
        ...storage,
        midiDeviceCharts: midi.MIDI_DEVICE_CHARTS,
      })}\n\t</script>\n</body>`,
    ),
  )

  // render frontend
  mainWindow.loadFile(htmlPath)
  mainWindow.webContents.setFrameRate(60)

  print('\n### Dev server listening on:\n\n\thttp://' + ip.address() + ':3000' + '\n')

  // watch for frontend changes
  watchDir(FRONTEND_DIR, mainWindow)
}

const main = async () => {
  await client.connect()
  await midi.init(client)

  app.whenReady().then(async () => {
    await createWindow({ client, midi })

    app.on('activate', async () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        await createWindow({ client, midi })
      }
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
}

ipcMain.removeAllListeners('ELECTRON_BROWSER_WINDOW_ALERT')
ipcMain.removeAllListeners('ELECTRON_BROWSER_WINDOW_CONFIRM')
ipcMain.removeAllListeners('ELECTRON_BROWSER_WINDOW_PROMPT')
ipcMain.on('ELECTRON_BROWSER_WINDOW_ALERT', (event) => event.returnValue = 0)
ipcMain.on('ELECTRON_BROWSER_WINDOW_CONFIRM', (event) => event.returnValue = 0)
ipcMain.on('ELECTRON_BROWSER_WINDOW_PROMPT', (event) => event.returnValue = 0)

process.on('SIGUSR2', async () => {
  print('SIGUSR2')
  midi.cleanup()
  if (mainWindow) mainWindow.webContents.forcefullyCrashRenderer()
  if (watcher) watcher.close()
  if (client) await client.del('led_values')
  if (client) await client.del('cleanup', 1)
  setTimeout(() => process.exit(1), 100)
})

process.on('uncaughtException', function (err) { })

main().catch(console.error)


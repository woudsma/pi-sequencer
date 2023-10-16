var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/backend/index.js
var import_path2 = __toESM(require("path"));
var import_fs2 = require("fs");
var import_child_process2 = require("child_process");
var import_electron = require("electron");
var import_redis = require("redis");
var import_ip = __toESM(require("ip"));

// src/backend/midi-io.js
var import_path = __toESM(require("path"));
var import_fs = require("fs");
var import_child_process = require("child_process");
var import_yaml = require("yaml");

// src/event-emitter.js
var EventEmitter = class {
  constructor() {
    this.events = {};
  }
  on = (key, fn) => {
    if (!this.events[key])
      this.events[key] = [];
    this.events[key].push(fn);
  };
  off = (key, fn) => {
    if (!this.events[key])
      return;
    this.events[key] = this.events[key].filter((e) => e !== fn);
  };
  emit = (key, ...data2) => {
    if (!this.events[key])
      return;
    this.events[key].forEach((cb) => cb(...data2));
  };
  removeListeners = () => {
    this.events = {};
  };
};
var event_emitter_default = new EventEmitter();

// src/constants.js
var CELL_WIDTH = 46;
var PADDING = 4;
var TRACK_HEIGHT = CELL_WIDTH + PADDING;
var HEADER_HEIGHT = TRACK_HEIGHT + PADDING;
var MIN_SCALE = 1 / 4;

// src/frontend/gpio.js
var gpio = {};
var initialized = false;
var gpio_default = new Proxy(gpio, {
  get(obj, prop) {
    if (prop in event_emitter_default)
      return event_emitter_default[prop];
    return obj[prop];
  },
  set(obj, prop, value) {
    if (!initialized) {
      event_emitter_default.emit("*", true);
      initialized = true;
    }
    if (prop in obj && obj[prop] !== value) {
      const [type, index, modifier] = prop.split(/_/g);
      const args = [int(index), value, prop];
      const releasedArgs = [int(index), value, prop.replace(/pressed/, "released")];
      event_emitter_default.emit(prop, ...args);
      if (!modifier) {
        event_emitter_default.emit(type, ...args);
      } else if (modifier === "pressed") {
        if (int(value) === 1) {
          event_emitter_default.emit(`${type}_released`, ...releasedArgs);
          event_emitter_default.emit(prop.replace(/pressed/, "released"), ...releasedArgs);
        } else {
          event_emitter_default.emit(`${type}_${modifier}`, ...args);
        }
      } else if (modifier) {
        event_emitter_default.emit(`${type}_${modifier}`, ...args);
      }
    }
    obj[prop] = value;
    return true;
  }
});

// src/utils.js
var print = (...data2) => {
  const filePath = "/dev/pts/0";
  data2 = data2.join(" ") + "\n";
  try {
    const fs = require("fs");
    fs.writeFile(filePath, data2, (err) => {
      if (err)
        console.error("Error writing to /dev/pts/0:", err);
    });
  } catch (e) {
    console.error(e);
  }
};
var debounce = (fn, ms) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(void 0, args), ms);
  };
};
var int = (x) => parseInt(x, 10);
var generateTrigConditionsArray = (n = 8) => Array.from(
  { length: n },
  (_, i) => Array.from({ length: n - i }, (_2, j) => [i + 1, i + 1 + j])
).flat().sort((a, b) => a[1] - b[1]).slice(1);
var trigConditionsArray = generateTrigConditionsArray();

// src/backend/midi-io.js
var { PWD } = process.env;
var MIDI = class {
  BUILD_DIR = `${PWD}/dist`;
  MIDI_DEVICE_CHARTS_DIR = `${this.BUILD_DIR}/midi-charts`;
  MIDI_INTERFACE_FILE = "_interface.yml";
  MIDI_INTERFACE_CHART = {};
  MIDI_DEVICE_CHARTS = [];
  constructor() {
  }
  init = async (client2) => {
    print("### Spawning MIDI interface process");
    this.client = client2;
    this.loadMidiCharts();
    const bpm = await client2.get("bpm");
    const { device } = this.MIDI_INTERFACE_CHART;
    const args = [
      int(bpm) || 120,
      device?.midi?.config?.clock_in,
      device?.midi?.config?.outs?.[0]
    ];
    this.controller = new AbortController();
    this.process = (0, import_child_process.spawn)("sudo", ["python3", `${this.BUILD_DIR}/midi.py`, ...args], {
      stdio: ["pipe", "pipe", "pipe", "ipc"],
      signal: this.controller.signal
    });
    this.process.stdout.on("data", (data2) => {
      const output = data2.toString().trim();
      if (!output.includes("midi:in:step")) {
        print("### Received data from child process:\n", output);
      }
      if (!output.includes("midi:in"))
        return;
      if (["start", "stop", "step"].some((e) => output.includes(e))) {
        return this.emit(...output.split(" "));
      }
    });
    this.process.stdout.on("error", (error) => {
      print("### stdout Error from Python:", data.toString());
      if (error.code == "EPIPE")
        process.exit(0);
    });
    this.process.stderr.on("data", (data2) => {
      print("### stderr Error from Python:", data2.toString());
    });
    this.process.on("close", (code) => {
      print("### Child process exited with code:", code);
      if (int(code) === 1)
        process.exit(1);
    });
  };
  cleanup = () => {
    if (this.controller)
      this.controller.abort();
  };
  sendMessage = (...data2) => {
    this.process.stdin.write(`${Array.isArray(data2) ? data2.join(" ") : data2}\r
`);
  };
  on = event_emitter_default.on;
  prevEmittedValue = {};
  emit = (key, value) => {
    if (key.includes("midi:in"))
      event_emitter_default.emit(key, value);
    if (key.includes("midi:out")) {
      if (this.prevEmittedValue[key] === value)
        return;
      else
        this.prevEmittedValue = {};
      this.sendMessage(`${key} ${value}`);
      this.prevEmittedValue[key] = value;
    }
  };
  loadMidiCharts = () => {
    try {
      (0, import_fs.readdirSync)(this.MIDI_DEVICE_CHARTS_DIR).forEach((file) => {
        const filePath = import_path.default.join(this.MIDI_DEVICE_CHARTS_DIR, file);
        print("### Loading MIDI chart:", file);
        try {
          if (!file.endsWith(".yml"))
            return;
          const data2 = (0, import_yaml.parse)((0, import_fs.readFileSync)(filePath, "utf8"));
          if (!data2)
            return;
          if (file === this.MIDI_INTERFACE_FILE)
            this.MIDI_INTERFACE_CHART = data2;
          else
            this.MIDI_DEVICE_CHARTS.push(data2);
        } catch (err) {
          print("### Error reading file:", err);
        }
      });
    } catch (err) {
      print("### Error fetching MIDI implementation charts");
    }
  };
};
var midi_io_default = new MIDI();

// src/backend/index.js
print(`
${Array.from({ length: 64 }).fill("-").join("")}`);
var { PWD: PWD2 } = process.env;
var FRONTEND_DIR = `${PWD2}/dist/frontend`;
var client = (0, import_redis.createClient)();
var watcher;
var watchDir = (dir, win) => {
  watcher = (0, import_fs2.watch)(
    dir,
    debounce((eventType) => {
      if (eventType === "change")
        win.webContents.send("window:reload");
    }, 100)
  );
};
var openDevtools = (event) => {
  const win = import_electron.BrowserWindow.fromWebContents(event.sender);
  if (!win.isDevToolsOpened())
    win.openDevTools();
};
import_electron.app.disableHardwareAcceleration();
var mainWindow;
var createWindow = async ({ client: client2, midi }) => {
  mainWindow = new import_electron.BrowserWindow({
    kiosk: true,
    webPreferences: {
      preload: import_path2.default.join(__dirname, "preload.js"),
      spellcheck: false,
      enableWebSQL: false,
      backgroundThrottling: false
    }
  });
  import_electron.ipcMain.on("log", (_, ...data2) => print("IPC:", data2));
  import_electron.ipcMain.on("update:leds", (_, data2) => client2.set("led_values", data2));
  import_electron.ipcMain.on("update:sequence", (_, data2) => midi.emit("midi:out:notes", data2));
  import_electron.ipcMain.on("open:devtools", (event) => openDevtools(event));
  import_electron.ipcMain.on("reload:window", () => mainWindow.webContents.reload());
  import_electron.ipcMain.on("reboot:rpi", () => (0, import_child_process2.spawn)("sudo", ["reboot", "-h", "now"]));
  import_electron.ipcMain.on("shutdown:rpi", () => (0, import_child_process2.spawn)("sudo", ["shutdown", "-h", "now"]));
  import_electron.ipcMain.on("set:error", (event, data2) => {
    openDevtools(event);
    print("IPC:", `error ${JSON.stringify(data2)}`);
    console.log(data2);
  });
  import_electron.ipcMain.on(
    "set:storage",
    debounce((_, data2) => {
      print("IPC:", "storage update");
      client2.set("storage", data2);
    }, 1e3)
  );
  import_electron.ipcMain.on("clear:storage", () => {
    print("IPC:", "CLEAR STORAGE");
    client2.set("storage", JSON.stringify({}));
  });
  import_electron.ipcMain.on("get:state", async (_, data2) => {
    const transaction = client2.multi();
    data2.forEach((key) => transaction.get(key));
    const state = await transaction.exec().then(
      (result) => data2.reduce((acc, curr, i) => ({ ...acc, [curr]: result[i] }), {})
    );
    mainWindow.webContents.send("state:update", state);
  });
  midi.on("midi:in:start", () => mainWindow.webContents.send("midi:start"));
  midi.on("midi:in:stop", () => mainWindow.webContents.send("midi:stop"));
  midi.on("midi:in:step", (e) => mainWindow.webContents.send("midi:step", e));
  const storage = await client2.get("storage").then((e) => JSON.parse(e || "{}"));
  const htmlPath = `${FRONTEND_DIR}/index.html`;
  if (!(0, import_fs2.existsSync)(htmlPath))
    return;
  (0, import_fs2.writeFileSync)(
    htmlPath,
    (0, import_fs2.readFileSync)(htmlPath, "utf-8").replace(
      "</body>",
      `	<script>
		window.storage=${JSON.stringify({
        ...storage,
        midiDeviceCharts: midi.MIDI_DEVICE_CHARTS
      })}
	</script>
</body>`
    )
  );
  mainWindow.loadFile(htmlPath);
  mainWindow.webContents.setFrameRate(60);
  print("\n### Dev server listening on:\n\n	http://" + import_ip.default.address() + ":3000\n");
  watchDir(FRONTEND_DIR, mainWindow);
};
var main = async () => {
  await client.connect();
  await midi_io_default.init(client);
  import_electron.app.whenReady().then(async () => {
    await createWindow({ client, midi: midi_io_default });
    import_electron.app.on("activate", async () => {
      if (import_electron.BrowserWindow.getAllWindows().length === 0) {
        await createWindow({ client, midi: midi_io_default });
      }
    });
  });
  import_electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
      import_electron.app.quit();
  });
};
import_electron.ipcMain.removeAllListeners("ELECTRON_BROWSER_WINDOW_ALERT");
import_electron.ipcMain.removeAllListeners("ELECTRON_BROWSER_WINDOW_CONFIRM");
import_electron.ipcMain.removeAllListeners("ELECTRON_BROWSER_WINDOW_PROMPT");
import_electron.ipcMain.on("ELECTRON_BROWSER_WINDOW_ALERT", (event) => event.returnValue = 0);
import_electron.ipcMain.on("ELECTRON_BROWSER_WINDOW_CONFIRM", (event) => event.returnValue = 0);
import_electron.ipcMain.on("ELECTRON_BROWSER_WINDOW_PROMPT", (event) => event.returnValue = 0);
process.on("SIGUSR2", async () => {
  print("SIGUSR2");
  midi_io_default.cleanup();
  if (mainWindow)
    mainWindow.webContents.forcefullyCrashRenderer();
  if (watcher)
    watcher.close();
  if (client)
    await client.del("led_values");
  if (client)
    await client.del("cleanup", 1);
  setTimeout(() => process.exit(1), 100);
});
process.on("uncaughtException", function(err) {
});
main().catch(console.error);

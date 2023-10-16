class EventEmitter {
  constructor() {
    this.events = {}
  }

  on = (key, fn) => {
    if (!this.events[key]) this.events[key] = []
    this.events[key].push(fn)
  }

  off = (key, fn) => {
    if (!this.events[key]) return
    this.events[key] = this.events[key].filter(e => e !== fn)
  }

  emit = (key, ...data) => {
    if (!this.events[key]) return
    this.events[key].forEach(cb => cb(...data))
  }

  removeListeners = () => {
    this.events = {}
  }
}

export default new EventEmitter()

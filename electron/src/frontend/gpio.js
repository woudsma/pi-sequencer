import emitter from '../event-emitter'
import { int } from '../utils';

const gpio = {}
let initialized = false

export default new Proxy(gpio, {
  get(obj, prop) {
    if (prop in emitter) return emitter[prop]
    return obj[prop]
  },
  set(obj, prop, value) {
    if (!initialized) {
      emitter.emit('*', true)
      initialized = true
    }
    if (prop in obj && obj[prop] !== value) {
      const [type, index, modifier] = prop.split(/_/g)
      const args = [int(index), value, prop]
      const releasedArgs = [int(index), value, prop.replace(/pressed/, 'released')]

      emitter.emit(prop, ...args)
      if (!modifier) {
        emitter.emit(type, ...args)
      } else if (modifier === 'pressed') {
        if (int(value) === 1) {
          emitter.emit(`${type}_released`, ...releasedArgs)
          emitter.emit(prop.replace(/pressed/, 'released'), ...releasedArgs)
        } else {
          emitter.emit(`${type}_${modifier}`, ...args)
        }
      } else if (modifier) {
        emitter.emit(`${type}_${modifier}`, ...args)
      }
    }
    obj[prop] = value
    return true
  }
});

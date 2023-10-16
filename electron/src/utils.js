import { NUM_STEPS } from './constants'
import gpio from './frontend/gpio'

export const mod = (n, m) => ((n % m) + m) % m

export const print = (...data) => {
  const filePath = '/dev/pts/0'
  data = data.join(' ') + '\n'

  try {
    const fs = require('fs')
    fs.writeFile(filePath, data, (err) => {
      if (err) console.error('Error writing to /dev/pts/0:', err)
    })
  } catch (e) {
    console.error(e)
  }
}

export const debounce = (fn, ms) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export const throttle = (fn, ms) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall < ms) return
    lastCall = now
    fn(...args)
  }
}

export const clamp = (x, min, max) => Math.min(Math.max(x, min), max)

export const remap = (value, oldRange, newRange) => {
  var newValue =
    ((value - oldRange[0]) * (newRange[1] - newRange[0])) /
    (oldRange[1] - oldRange[0]) +
    newRange[0]
  return clamp(newValue, newRange[0], newRange[1])
}

export const random = (min, max) => Math.random() * (max - min) + min

export const int = (x) => parseInt(x, 10)

export const ceil = Math.ceil

export const floor = Math.floor

export const abs = Math.abs

export const min = Math.min

export const max = Math.max

export const isFunction = (x) => x instanceof Function

export const when =
  (...conditions) =>
    (callback) =>
      (...args) => {
        const shouldCallback = conditions
          .flat(Infinity)
          .map((condition) => (isFunction(condition) ? condition(args) : condition))
          .every(Boolean)

        if (shouldCallback) {
          if (isFunction(callback)) return callback(args)
          else if (callback) return callback
          else return true
        } else return false
      }

export const firstArg = (args) => (Array.isArray(args) ? args[0] : args)

export const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0)

export const getMaxSteps = (x, y = NUM_STEPS) =>
  x > y ? getMaxSteps(x, y + NUM_STEPS) : y

export const generateTrigConditionsArray = (n = 8) =>
  Array.from({ length: n }, (_, i) =>
    Array.from({ length: n - i }, (_, j) => [i + 1, i + 1 + j]),
  )
    .flat()
    .sort((a, b) => a[1] - b[1])
    .slice(1)

export const trigConditionsArray = generateTrigConditionsArray()

export const omit = (obj, ...keys) => {
  if (!keys?.length) return obj

  const excludeKeys = new Set(keys)
  const excludeFunctions = keys.includes(Function)

  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) =>
        !excludeKeys.has(key) && (excludeFunctions ? !isFunction(value) : true),
    ),
  )
}

export const ask = (question, callback) => {
  return confirm(question) && callback()
}

export const getEncoder = (args, relative = true) => {
  const encoderIndex = int(firstArg(args))
  const encoderSuffix = relative ? '_relative' : ''
  return `encoder_${encoderIndex}${encoderSuffix}`
}

export const getEncoderValue = (args, relative = true) => {
  return gpio?.[getEncoder(args, relative)] || 0
}

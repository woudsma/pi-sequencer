class State {
  FPS = 0
  GPIO_KEYS = []
  CURRENT_TRACK = 0
  PATTERN_BANK = 'A'
  PATTERN_INDEX = 0
  PLAYING = false
  BPM = 140
  BEAT = 0
  BEAT_PULSE = 0
  STEP = 0
  STATE_CHANGED = 0
  LAST_UPDATE = performance.now()
  LAST_LED_VALUES = undefined
  LONG_PRESS = 0
  LONG_PRESS_INDEX = undefined
  LONG_PRESS_TYPE = undefined
  LONG_PRESS_ACTIVE = false
}

export default new State()

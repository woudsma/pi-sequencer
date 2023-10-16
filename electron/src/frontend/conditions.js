import { firstArg, int } from '../utils'

export const isIndex = (index) => (args) => int(index) === int(firstArg(args))
export const isNotIndex = (index) => (args) => int(index) !== int(firstArg(args))
export const isRegularSwitch = (args) => firstArg(args) % 2 === 0
export const isEncoderSwitch = (args) => firstArg(args) % 2 === 1
export const isSwitchPressed = (args) => args[1] === 0

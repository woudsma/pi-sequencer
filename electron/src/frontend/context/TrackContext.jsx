import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  CC_EDIT_MODE_SWITCH,
  DEFAULT_CC,
  DEFAULT_SCALE,
  DEFAULT_PROBABILITY,
  DEFAULT_VELOCITY,
  MAX_CC,
  MAX_NOTE,
  MIN_SCALE,
  MAX_SCALE,
  MAX_STEPS,
  MAX_VELOCITY,
  NUM_STEPS,
  NUM_SWITCHES,
  PAGE_DECR_SWITCH,
  PAGE_INCR_SWITCH,
  ROOT_NOTE,
  TRACK_CC_SWITCH,
  TRACK_SETTINGS_SWITCH,
  MAX_PROBABILITY,
  TRIG_OPS,
} from '../../constants'
import {
  getMaxSteps,
  omit,
  int,
  when,
  firstArg,
  clamp,
  ceil,
  min,
  abs,
  mod,
  debounce,
  getEncoderValue,
  remap,
  floor,
  trigConditionsArray,
  max,
} from '../../utils'
import {
  isEncoderSwitch,
  isIndex,
  isNotIndex,
  isRegularSwitch,
  isSwitchPressed,
} from '../conditions'
import gpio from '../gpio'
import { useStateContext } from './StateContext'
import { useTracksContext } from './TracksContext'
import { useIdleCallback } from './hooks'
import { trackSettingsMenuPages, useMenuContext } from './MenuContext'
import { useStorageContext } from './StorageContext'

export const initialTrackState = {
  id: undefined,
  deviceId: undefined,
  isCurrentTrack: false,
  isMuted: false,
  // track settings page 0
  rootNote: ROOT_NOTE,
  velocity: DEFAULT_VELOCITY,
  probability: DEFAULT_PROBABILITY,
  steps: NUM_STEPS,
  scale: DEFAULT_SCALE,
  // track settings page 1
  isFollowActive: false,
  bank: 0,
  pressedTrig: undefined,
  isEditingControlChangeParams: false,
  trigs: Array.from({ length: NUM_STEPS }).fill(0),
  trigsVelocity: Array.from({ length: NUM_STEPS }).fill(0),
  trigsProbability: Array.from({ length: NUM_STEPS }).fill(0),
  notes: Array.from({ length: NUM_STEPS }).fill(0),
  trackControlChangeValues: Array.from({ length: NUM_SWITCHES }).fill(0),
  controlChangeValues: {},
  controlChangeParams: {},
  trigOp: undefined,
}

const TrackContext = createContext(initialTrackState)

export const useTrackContext = () => useContext(TrackContext)

export const TrackContextProvider = ({ children, ...props }) => {
  const { storage } = useStorageContext()
  const { currentProject, currentTrack, step, mutedTracks } = useStateContext()
  const {
    showTrackSettingsMenu,
    setShowTrackSettingsMenu,
    showTrackControlChangeMenu,
    setShowTrackControlChangeMenu,
    trackSettingsMenuPage,
    hasOpenMenu,
  } = useMenuContext()
  const { setCurrentTracks, isMuteMode } = useTracksContext()

  const switchTimeoutId = useRef(undefined)
  const currentSwitch = useRef(undefined)
  const skipTrigUpdate = useRef(false)
  const editControlChangeParams = useRef(false)

  // track settings
  const [id, setId] = useState(int(props?.id))
  const [deviceId, setDeviceId] = useState(props?.deviceId)
  const [isCurrentTrack, setIsCurrentTrack] = useState(false)
  const [isMuted, setIsMuted] = useState(mutedTracks.includes(id))
  // track settings page 0
  const [rootNote, setRootNote] = useState(int(props?.rootNote) || ROOT_NOTE)
  const [velocity, setVelocity] = useState(
    int(props?.velocity) || DEFAULT_VELOCITY,
  )
  const [steps, setSteps] = useState(int(props?.steps) || NUM_STEPS)
  const [probability, setProbability] = useState(
    int(props?.probability) || DEFAULT_PROBABILITY,
  )
  const [scale, setScale] = useState(int(props?.scale) || DEFAULT_SCALE)
  // track settings page 1
  const [isFollowActive, setIsFollowActive] = useState(false)

  const [bank, setBank] = useState(int(props?.bank) || 0)
  const [pressedTrig, setPressedTrig] = useState(undefined)
  const [isEditingControlChangeParams, setIsEditingControlChangeParams] =
    useState(false)
  const [trigOp, setTrigOp] = useState(props?.trigOp || TRIG_OPS[0])

  // track trigs
  const [trigs, setTrigs] = useState(
    props?.trigs || Array.from({ length: steps }).fill(0),
  )
  const [trigsVelocity, setTrigsVelocity] = useState(
    props?.trigsVelocity || Array.from({ length: steps }).fill(0),
  )
  const [trigsProbability, setTrigsProbability] = useState(
    props?.trigsProbability || Array.from({ length: steps }).fill(0),
  )
  const [notes, setNotes] = useState(
    props?.notes || Array.from({ length: steps }).fill(0),
  )

  // MIDI control change
  const [trackControlChangeValues, setTrackControlChangeValues] = useState(
    props?.trackControlChangeValues ||
      Array.from({ length: NUM_SWITCHES }).fill(0),
  )
  const [controlChangeValues, setControlChangeValues] = useState(
    props?.controlChangeValues || {},
  )
  const [controlChangeParams, setControlChangeParams] = useState(
    props?.controlChangeParams || {},
  )

  // computed properties
  const { device } = useMemo(
    () =>
      (storage?.midiDeviceCharts || []).find(
        ({ device }) => device?.id === deviceId,
      ) || {},
    [deviceId, storage],
  )

  const currentPage = useMemo(
    () => getMaxSteps((step * 4) % steps) / NUM_STEPS - 1,
    [step, steps],
  )

  const bankSteps = useMemo(
    () => min(abs(bank * NUM_SWITCHES - steps), NUM_SWITCHES),
    [bank, steps],
  )

  const rootNoteInstrument = useMemo(() => {
    let numInstrumentNotes
    const instrumentMap = device?.midi?.notes?.find((e) => {
      const instrumentNotes = (e || []).slice(1)
      const hasRootNote = instrumentNotes.includes(rootNote)
      if (!hasRootNote) return
      numInstrumentNotes = instrumentNotes.length
      return hasRootNote
    })
    if (!numInstrumentNotes || !instrumentMap?.length) return
    return `${instrumentMap[0]}${numInstrumentNotes > 1 ? '+' : ''}`
  }, [device, rootNote])

  const instrumentNotes = useMemo(
    () =>
      (device?.midi?.notes || []).reduce(
        (acc, [instrument, ...rest]) =>
          acc.concat(rest.map((e) => [instrument, e])),
        [],
      ),
    [device],
  )

  const instrumentControlChangeNames = useMemo(
    () =>
      (device?.midi?.cc || []).reduce(
        (acc, [name, param]) => ({ ...acc, [param]: name }),
        {},
      ),
    [device],
  )

  const currentProbability = useMemo(() => {
    const value = trigsProbability?.[pressedTrig]

    return pressedTrig !== undefined && Boolean(trigs[pressedTrig])
      ? value > MAX_PROBABILITY
        ? trigConditionsArray[
            clamp(
              value - MAX_PROBABILITY - 1,
              0,
              trigConditionsArray.length - 1,
            )
          ]
        : value
      : probability
  }, [pressedTrig, trigs, trigsProbability, probability])

  const getTrigIndex = useCallback(
    (args) => int(firstArg(args)) / 2 + NUM_SWITCHES * bank,
    [bank],
  )

  const updateLeds = useCallback(
    (input, bankMode = true) => {
      const updatedLeds = Array.from({ length: NUM_SWITCHES }).fill(0)
      const offset = bankMode ? bank : currentPage
      const slicedTrigs = input.slice(
        offset * NUM_SWITCHES,
        NUM_SWITCHES + offset * NUM_SWITCHES,
      )
      const ledValues = updatedLeds
        .map((e, i) => ((i < slicedTrigs.length ? slicedTrigs[i] : e) ? 1 : 0))
        .join('')

      electron.updateLeds(ledValues)
    },
    [bank, currentPage],
  )

  useEffect(() => {
    setIsCurrentTrack(currentTrack === id)
  }, [id, currentTrack])

  useEffect(() => {
    setIsMuted(mutedTracks.includes(id))
  }, [id, mutedTracks])

  // handle GPIO events
  useEffect(() => {
    if (!isCurrentTrack) return () => null

    const updateTrigs = when(
      isRegularSwitch,
      !isMuteMode,
    )(
      (args) =>
        !skipTrigUpdate.current &&
        getTrigIndex(args) < steps &&
        setTrigs((prevTrigs) => {
          const updatedTrigs = prevTrigs.slice()
          const index = getTrigIndex(args)
          updatedTrigs[index] = updatedTrigs[index] ? 0 : 1

          setRootNote((prevRootNote) => {
            setNotes((e) => {
              const updatedNotes = e.slice()
              updatedNotes[index] = updatedTrigs[index] ? prevRootNote : 0
              return updatedNotes
            })
            return prevRootNote
          })

          setVelocity((prevVelocity) => {
            setTrigsVelocity((e) => {
              const updatedTrigsVelocity = e.slice()
              updatedTrigsVelocity[index] = updatedTrigs[index]
                ? prevVelocity
                : 0
              return updatedTrigsVelocity
            })
            return prevVelocity
          })

          setProbability((prevProbability) => {
            setTrigsProbability((e) => {
              const updatedTrigsProbability = e.slice()
              updatedTrigsProbability[index] = updatedTrigs[index]
                ? prevProbability
                : 0
              return updatedTrigsProbability
            })
            return prevProbability
          })

          updateLeds(updatedTrigs)
          return updatedTrigs
        }),
    )

    const handleRegularSwitchLongPress = when(
      isRegularSwitch,
      !isMuteMode,
    )((args) => {
      currentSwitch.current = firstArg(args)
      const isPressed = isSwitchPressed(args)

      if (isPressed) {
        switchTimeoutId.current = setTimeout(() => {
          if (currentSwitch.current !== firstArg(args)) return
          setPressedTrig(getTrigIndex(args))
          skipTrigUpdate.current = true

          const index = getTrigIndex(currentSwitch.current)
          electron.log(`LONG PRESS: ${currentSwitch.current} ${index}`)
        }, 400)
      } else if (switchTimeoutId.current) {
        clearTimeout(switchTimeoutId.current)
      }
      if (!isPressed) {
        setPressedTrig(undefined)
        currentSwitch.current = false
        skipTrigUpdate.current = false
        editControlChangeParams.current = false
      }
    })

    const updateBank = when(
      isEncoderSwitch,
      !showTrackControlChangeMenu,
      !isMuteMode,
    )((args) => {
      if (isIndex(PAGE_DECR_SWITCH)(args)) {
        setBank((e) => Math.max(0, e - 1))
      }
      if (isIndex(PAGE_INCR_SWITCH)(args)) {
        setBank((e) => Math.min(e + 1, ceil(steps / NUM_SWITCHES) - 1))
      }
    })

    const toggleTrackSettingsMenu = when()(() => {
      setShowTrackSettingsMenu((e) => !e)
    })

    const toggleControlChangeMenu = when()(() => {
      setShowTrackControlChangeMenu((e) => !e)
    })

    const updateControlChangeValues = when(showTrackControlChangeMenu)(
      (args) => {
        const switchIndex = getTrigIndex(currentSwitch.current)
        const encoderIndex = int(firstArg(args))
        const editCCParams = editControlChangeParams.current === true
        const instrumentCCParams = (device?.midi?.cc || []).map(([_, e]) => e)

        setControlChangeParams((prevControlChangeParams) => ({
          ...prevControlChangeParams,
          ...(editCCParams &&
            device && {
              [encoderIndex]:
                instrumentCCParams[
                  mod(
                    abs(
                      instrumentCCParams.indexOf(
                        prevControlChangeParams?.[encoderIndex],
                      ),
                    ) + getEncoderValue(args) || 0,
                    instrumentCCParams.length,
                  )
                ] || instrumentCCParams[0],
            }),
          ...(editCCParams &&
            !device && {
              [encoderIndex]: clamp(
                prevControlChangeParams?.[encoderIndex] +
                  getEncoderValue(args) || 0,
                0,
                MAX_CC,
              ),
            }),
        }))

        if (!Number.isInteger(currentSwitch.current)) return

        setControlChangeValues((prevControlChangeValues) => {
          const hasPressedTrig = Boolean(trigs[switchIndex])
          const hasCCParam = controlChangeParams?.[encoderIndex] > 0
          const value =
            prevControlChangeValues?.[switchIndex]?.[encoderIndex] ||
            trackControlChangeValues?.[encoderIndex] ||
            0

          return {
            ...prevControlChangeValues,
            ...(hasPressedTrig &&
              hasCCParam && {
                [switchIndex]: {
                  ...(prevControlChangeValues?.[switchIndex] || {}),
                  [encoderIndex]: !editCCParams
                    ? clamp(value + getEncoderValue(args) || 0, 0, MAX_CC)
                    : value || 0,
                },
              }),
          }
        })
      },
    )

    const updateControlChangeEditMode = when(
      showTrackControlChangeMenu,
      isEncoderSwitch,
      isIndex(CC_EDIT_MODE_SWITCH),
      !isMuteMode,
    )(() => {
      setIsEditingControlChangeParams((e) => {
        editControlChangeParams.current = !e
        return editControlChangeParams.current
      })
    })

    const updateTrackControlChangeValues = when(showTrackControlChangeMenu)(
      (args) => {
        if (Number.isInteger(currentSwitch.current)) return
        const encoderIndex = int(firstArg(args))
        const editCCParams = editControlChangeParams.current === true
        const hasCCParam = controlChangeParams?.[encoderIndex] > 0

        if (editCCParams || !hasCCParam) return
        setTrackControlChangeValues((e) => {
          const updatedTrackControlChangeValues = e.slice()
          updatedTrackControlChangeValues[encoderIndex] = clamp(
            e?.[encoderIndex] + getEncoderValue(args) || 0,
            0,
            MAX_CC,
          )
          return updatedTrackControlChangeValues
        })
      },
    )

    // track settings page 0
    const updateRootNote = when(
      showTrackSettingsMenu,
      !showTrackControlChangeMenu,
      trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS,
    )((args) => {
      const switchIndex = getTrigIndex(currentSwitch.current)
      const isPressed = Number.isInteger(currentSwitch.current)
      const hasPressedTrig = Boolean(trigs[switchIndex])

      if (isPressed) {
        if (!hasPressedTrig) return

        setNotes((e) => {
          const updatedNotes = e.slice()
          updatedNotes[switchIndex] = clamp(
            updatedNotes[switchIndex] + getEncoderValue(args) || 0,
            0,
            MAX_NOTE,
          )
          return updatedNotes
        })
      } else {
        setRootNote((e) => clamp(e + getEncoderValue(args), 0, MAX_NOTE))
      }
    })

    const updateVelocity = when(
      showTrackSettingsMenu,
      !showTrackControlChangeMenu,
      trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS,
    )((args) => {
      const switchIndex = getTrigIndex(currentSwitch.current)
      const isPressed = Number.isInteger(currentSwitch.current)
      const hasPressedTrig = Boolean(trigs[switchIndex])

      if (isPressed) {
        if (!hasPressedTrig) return

        setTrigsVelocity((e) => {
          const updatedTrigsVelocity = e.slice()
          updatedTrigsVelocity[switchIndex] = clamp(
            updatedTrigsVelocity[switchIndex] + getEncoderValue(args) || 0,
            0,
            MAX_VELOCITY,
          )
          return updatedTrigsVelocity
        })
      } else {
        setVelocity((e) => clamp(e + getEncoderValue(args), 0, MAX_CC))
      }
    })

    const updateProbability = when(
      showTrackSettingsMenu,
      !showTrackControlChangeMenu,
      trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS,
    )((args) => {
      const switchIndex = getTrigIndex(currentSwitch.current)
      const isPressed = Number.isInteger(currentSwitch.current)
      const hasPressedTrig = Boolean(trigs[switchIndex])

      if (isPressed) {
        if (!hasPressedTrig) return

        setTrigsProbability((e) => {
          const updatedTrigsProbability = e.slice()
          updatedTrigsProbability[switchIndex] = clamp(
            updatedTrigsProbability[switchIndex] + getEncoderValue(args) || 0,
            0,
            MAX_PROBABILITY + trigConditionsArray.length + 1,
          )
          return updatedTrigsProbability
        })
      } else {
        setProbability((e) =>
          clamp(e + getEncoderValue(args), 0, MAX_PROBABILITY),
        )
      }
    })

    const updateSteps = when(
      showTrackSettingsMenu,
      !showTrackControlChangeMenu,
      trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS,
    )((args) => {
      const createEmptyTrigs = (length, e) => Array.from({ length }).fill(e)
      const getTrig = (e) => (v, i) => i < e.length ? e[i] : v

      setSteps((s) => {
        const updatedSteps = clamp(s + getEncoderValue(args), 0, MAX_STEPS)
        const emptyTrigs = createEmptyTrigs(updatedSteps, 0)

        setTrigs((e) => emptyTrigs.map(getTrig(e)))
        setTrigsVelocity((e) => emptyTrigs.map(getTrig(e)))
        setTrigsProbability((e) => emptyTrigs.map(getTrig(e)))
        setNotes((e) => emptyTrigs.map(getTrig(e)))
        setBank((e) => Math.min(e, ceil(updatedSteps / NUM_SWITCHES) - 1))

        return updatedSteps
      })
    })

    const updateScale = when(
      showTrackSettingsMenu,
      !showTrackControlChangeMenu,
      trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS,
    )((args) => {
      setScale((e) => {
        const updatedScale =
          e + getEncoderValue(args) >= 1
            ? floor(e + getEncoderValue(args))
            : e + getEncoderValue(args) / 4

        return clamp(
          updatedScale >= 1 ? floor(updatedScale) : updatedScale,
          MIN_SCALE,
          MAX_SCALE,
        )
      })
    })

    // track settings page 1
    const updateIsFollowActive = when(
      showTrackSettingsMenu,
      !showTrackControlChangeMenu,
      trackSettingsMenuPage === trackSettingsMenuPages.TRACK_CONDITIONS,
    )((args) => {
      setIsFollowActive(getEncoderValue(args) === 1)
    })

    const events = [
      ['switch_released', updateTrigs],
      ['switch_pressed', updateControlChangeEditMode],
      ['switch_pressed', handleRegularSwitchLongPress],
      ['switch_released', handleRegularSwitchLongPress],
      [`switch_${PAGE_DECR_SWITCH}_released`, updateBank],
      [`switch_${PAGE_INCR_SWITCH}_released`, updateBank],
      [`switch_${TRACK_CC_SWITCH}_released`, toggleControlChangeMenu],
      [`switch_${TRACK_SETTINGS_SWITCH}_released`, toggleTrackSettingsMenu],
      ['encoder', updateControlChangeValues],
      ['encoder', updateTrackControlChangeValues],
      // track settings page 0
      ['encoder_0', updateRootNote],
      ['encoder_1', updateVelocity],
      ['encoder_2', updateProbability],
      ['encoder_3', updateSteps],
      ['encoder_4', updateScale],
      // track settings page 1
      ['encoder_6', updateIsFollowActive],
    ]

    events.forEach(([event, callback]) => gpio.on(event, callback))

    return () => {
      events.forEach(([event, callback]) => gpio.off(event, callback))
    }
  }, [
    device,
    isCurrentTrack,
    steps,
    trigs,
    showTrackSettingsMenu,
    showTrackControlChangeMenu,
    isMuteMode,
    trackSettingsMenuPage,
    getTrigIndex,
  ])

  // update sequence
  useEffect(() => {
    if (isEditingControlChangeParams) return () => null

    const controlChangeSequences = Object.entries(controlChangeParams)
      .map(([button, control]) => ({
        control,
        values: Array.from({ length: steps })
          .fill(trackControlChangeValues[int(button)] || 0)
          .map((e, i) =>
            button in (controlChangeValues?.[i] || {})
              ? controlChangeValues[i][button]
              : e,
          ),
      }))
      .map(({ control, values }) => `${control}:${values.join(',')}`)
      .join('|')
      .trim()

    const currentTrigOp = max(0, TRIG_OPS.indexOf(trigOp))
    const trigConditions = trigsProbability
      .map((e) =>
        e > MAX_PROBABILITY
          ? [currentTrigOp].concat(
              trigConditionsArray[
                clamp(
                  e - MAX_PROBABILITY - 1,
                  0,
                  trigConditionsArray.length - 1,
                )
              ],
            )
          : [currentTrigOp, 1, 1],
      )
      .map((e) => e.join(':'))
      .join(',')
      .trim()

    const sequence = [
      currentProject,
      id,
      device?.midi?.config?.channel || 0,
      isMuted ? 1 : 0,
      trigs.join(''),
      trigsVelocity.map((e) => e || velocity).join(','),
      trigsProbability
        .map((e) => remap(e, [0, MAX_PROBABILITY], [0, 1]))
        .map((e) => clamp(e, 0, 1) || probability)
        .join(','),
      notes.map((e) => e || rootNote).join(','),
      controlChangeSequences || 0,
      scale || 1,
      trigConditions || 0,
    ].join(' ')

    electron.updateSequence(sequence)
  }, [
    currentProject,
    id,
    device,
    isMuted,
    isCurrentTrack,
    rootNote,
    velocity,
    probability,
    steps,
    scale,
    trigs,
    notes,
    trigsVelocity,
    trigsProbability,
    bank,
    currentTrack,
    trackControlChangeValues,
    controlChangeParams,
    controlChangeValues,
    isEditingControlChangeParams,
    trigOp,
  ])

  // update LEDs
  useEffect(() => {
    if (!isCurrentTrack || isMuteMode || hasOpenMenu) return () => null
    updateLeds(trigs, !isFollowActive)
  }, [
    isCurrentTrack,
    isMuteMode,
    hasOpenMenu,
    trigs,
    isFollowActive,
    updateLeds,
  ])

  const value = useMemo(() => {
    return {
      id,
      setId,
      deviceId,
      setDeviceId,
      isCurrentTrack,
      setIsCurrentTrack,
      isMuted,
      setIsMuted,
      isFollowActive,
      setIsFollowActive,
      rootNote,
      setRootNote,
      velocity,
      setVelocity,
      probability,
      setProbability,
      steps,
      setSteps,
      scale,
      setScale,
      bank,
      setBank,
      pressedTrig,
      isEditingControlChangeParams,
      device,
      currentPage,
      bankSteps,
      rootNoteInstrument,
      instrumentNotes,
      instrumentControlChangeNames,
      currentProbability,
      trigs,
      setTrigs,
      trigsVelocity,
      setTrigsVelocity,
      trigsProbability,
      setTrigsProbability,
      notes,
      setNotes,
      trigOp,
      setTrigOp,
      trackControlChangeValues,
      controlChangeValues,
      controlChangeParams,
    }
  }, [
    id,
    deviceId,
    isCurrentTrack,
    isMuted,
    isFollowActive,
    rootNote,
    velocity,
    probability,
    steps,
    scale,
    bank,
    pressedTrig,
    isEditingControlChangeParams,
    device,
    currentPage,
    bankSteps,
    rootNoteInstrument,
    instrumentNotes,
    instrumentControlChangeNames,
    currentProbability,
    trigs,
    trigsVelocity,
    trigsProbability,
    notes,
    trackControlChangeValues,
    controlChangeValues,
    controlChangeParams,
    trigOp,
  ])

  const storageValue = useMemo(
    () =>
      omit(
        value,
        Function,
        'currentPage',
        'device',
        'rootNoteInstrument',
        'instrumentNotes',
        'instrumentControlChangeNames',
        'currentProbability',
      ),
    [value],
  )

  useIdleCallback(() => {
    setCurrentTracks((e) => ({ ...e, [storageValue.id]: storageValue }))
  }, [storageValue])

  return <TrackContext.Provider value={value}>{children}</TrackContext.Provider>
}

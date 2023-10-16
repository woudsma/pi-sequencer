import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { NUM_SWITCHES, TRACK_MUTES_SWITCH } from '../../constants'
import { firstArg, int, omit, when } from '../../utils'
import { useStorageContext } from './StorageContext'
import { useStateContext } from './StateContext'
import { useMenuContext } from './MenuContext'
import { initialTrackState } from './TrackContext'
import { useGPIOEvents, useIdleCallback } from './hooks'
import { isRegularSwitch } from '../conditions'

export const initialTracksState = {
  currentTracks: {},
  isMuteMode: false,
}

const TracksContext = createContext(initialTracksState)

export const useTracksContext = () => useContext(TracksContext)

export const TracksContextProvider = ({ children }) => {
  const { storage, setStorage } = useStorageContext()
  const { currentProject, mutedTracks, setMutedTracks } = useStateContext()
  const { showTrackSettingsMenu, showTrackControlChangeMenu } = useMenuContext()

  const currentProjectTracks = useMemo(
    () => storage?.projects?.[currentProject]?.tracks,
    [storage, currentProject],
  )

  const [currentTracks, setCurrentTracks] = useState(
    currentProjectTracks?.currentTracks || {},
  )
  const [isMuteMode, setIsMuteMode] = useState(
    currentProjectTracks?.isMuteMode || false,
  )

  const numCurrentTracks = Object.values(currentTracks).length

  const addTrack = (track) =>
    setCurrentTracks((e) => ({
      ...e,
      [track.id]: { ...initialTrackState, ...track },
    }))

  const removeTrack = (id) => setCurrentTracks((e) => omit(e, id))

  const resetTracksContext = (state) => {
    setCurrentTracks((state || initialTracksState).currentTracks)
  }

  const toggleIsMuteMode = when()(() => setIsMuteMode((e) => !e))

  const updateMutedTracks = when(
    isRegularSwitch,
    isMuteMode,
  )((args) => {
    const switchIndex = int(firstArg(args)) / 2

    setMutedTracks((e) =>
      e.includes(switchIndex)
        ? e.filter((v) => v !== switchIndex)
        : [...new Set(e.concat(switchIndex))],
    )
  })

  useGPIOEvents(
    [[`switch_${TRACK_MUTES_SWITCH}_released`, toggleIsMuteMode]],
    [showTrackSettingsMenu, showTrackControlChangeMenu],
  )

  useGPIOEvents([['switch_released', updateMutedTracks]], [isMuteMode])

  useEffect(() => {
    if (!isMuteMode) return () => null

    const updatedLeds = Array.from({ length: NUM_SWITCHES })
      .fill(0)
      .map((e, i) => (i >= numCurrentTracks || mutedTracks.includes(i) ? e : 1))
      .join('')

    electron.updateLeds(updatedLeds)
  }, [isMuteMode, mutedTracks, numCurrentTracks])

  const value = useMemo(() => {
    return {
      currentTracks,
      setCurrentTracks,
      isMuteMode,
      setIsMuteMode,
      addTrack,
      removeTrack,
      resetTracksContext,
    }
  }, [currentTracks, isMuteMode])

  const storageValue = useMemo(
    () => omit(value, Function, 'isMuteMode'),
    [value],
  )

  useIdleCallback(() => {
    setStorage((e) => ({
      ...e,
      projects: {
        ...(e?.projects || {}),
        [currentProject]: {
          ...(e?.projects?.[currentProject] || {}),
          tracks: storageValue,
        },
      },
    }))
  }, [storageValue, currentProject])

  return (
    <TracksContext.Provider value={value}>{children}</TracksContext.Provider>
  )
}

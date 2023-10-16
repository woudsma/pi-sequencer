import React, { createContext, useContext, useMemo, useState } from 'react'

import { omit } from '../../utils'
import { useStorageContext } from './StorageContext'
import { useIdleCallback } from './hooks'

export const initialState = {
  currentProject: 0,
  currentTrack: 0,
  mutedTracks: [],
  step: 0,
  isPlaying: false,
}

const StateContext = createContext(initialState)

export const useStateContext = () => useContext(StateContext)

export const StateContextProvider = ({ children }) => {
  const { storage, setStorage } = useStorageContext()

  const [currentProject, setCurrentProject] = useState(
    storage?.currentProject || 0,
  )

  const currentProjectState = useMemo(
    () => storage?.projects?.[currentProject]?.state,
    [storage, currentProject],
  )

  const [currentTrack, setCurrentTrack] = useState(
    currentProjectState?.currentTrack || 0,
  )
  const [mutedTracks, setMutedTracks] = useState(
    currentProjectState?.mutedTracks || [],
  )
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const muteTrack = (trackId) =>
    setMutedTracks((e) => [...new Set(e.concat(trackId))])

  const unmuteTrack = (trackId) =>
    setMutedTracks((e) => e.filter((e) => e !== trackId))

  const resetStateContext = (state) => {
    setCurrentTrack((state || initialState).currentTrack)
    setStep((state || initialState).step)
    setMutedTracks((state || initialState).mutedTracks)
  }

  const value = useMemo(() => {
    return {
      currentProject,
      setCurrentProject,
      currentTrack,
      setCurrentTrack,
      mutedTracks,
      setMutedTracks,
      step,
      setStep,
      isPlaying,
      setIsPlaying,
      muteTrack,
      unmuteTrack,
      resetStateContext,
    }
  }, [currentProject, currentTrack, mutedTracks, step, isPlaying])

  const storageValue = useMemo(
    () => omit(value, Function, 'currentProject', 'step', 'isPlaying'),
    [value],
  )

  useIdleCallback(() => {
    setStorage((e) => ({
      ...e,
      currentProject,
      projects: {
        ...(e?.projects || {}),
        [currentProject]: {
          ...(e?.projects?.[currentProject] || {}),
          state: storageValue,
        },
      },
    }))
  }, [storageValue, currentProject])

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

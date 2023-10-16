import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { clamp, debounce, getEncoderValue, omit, when } from '../../utils'
import { useStorageContext } from './StorageContext'
import { useStateContext } from './StateContext'
import { useGPIOEvents, useIdleCallback } from './hooks'
import { NUM_SWITCHES, TRACK_SETTINGS_ENCODER_INDEX } from '../../constants'

export const trackSettingsMenuPages = {
  TRACK_SETTINGS: 0,
  TRACK_CONDITIONS: 1,
}

export const initialMenuState = {
  showSettingsMenu: false,
  showTrackMenu: false,
  showEnvelopeMenu: false,
  showTrackSettingsMenu: false,
  showTrackControlChangeMenu: false,
  trackSettingsMenuPage: trackSettingsMenuPages.TRACK_SETTINGS,
  hasOpenMenu: false,
  isTrackSettingsMenu: false,
}

const MenuContext = createContext(initialMenuState)

export const useMenuContext = () => useContext(MenuContext)

export const MenuContextProvider = ({ children }) => {
  const { storage, setStorage } = useStorageContext()
  const { currentProject } = useStateContext()

  const currentProjectMenu = useMemo(
    () => storage?.projects?.[currentProject]?.menu,
    [storage, currentProject],
  )

  // menu's
  const [showSettingsMenu, setShowSettingsMenu] = useState(
    currentProjectMenu?.showSettingsMenu || false,
  )
  const [showTrackMenu, setShowTrackMenu] = useState(
    currentProjectMenu?.showTrackMenu || false,
  )
  const [showEnvelopeMenu, setShowEnvelopeMenu] = useState(
    currentProjectMenu?.showEnvelopeMenu || false,
  )
  const [showTrackSettingsMenu, setShowTrackSettingsMenu] = useState(
    currentProjectMenu?.showTrackSettingsMenu || false,
  )
  const [showTrackControlChangeMenu, setShowTrackControlChangeMenu] = useState(
    currentProjectMenu?.showTrackControlChangeMenu || false,
  )

  // menu variables
  const [trackSettingsMenuPage, setTrackSettingsMenuPage] = useState(
    currentProjectMenu?.trackSettingsMenuPage ||
      trackSettingsMenuPages.TRACK_SETTINGS,
  )

  // computed properties
  const hasOpenMenu = useMemo(
    () => [showSettingsMenu, showTrackMenu, showEnvelopeMenu].some(Boolean),
    [showSettingsMenu, showTrackMenu, showEnvelopeMenu],
  )

  // functions
  const resetMenuContext = (state) => {
    setShowSettingsMenu((state || initialMenuState).showSettingsMenu)
    setShowTrackMenu((state || initialMenuState).showTrackMenu)
    setShowEnvelopeMenu((state || initialMenuState).showEnvelopeMenu)
    setShowTrackSettingsMenu((state || initialMenuState).showTrackSettingsMenu)
    setShowTrackControlChangeMenu(
      (state || initialMenuState).showTrackControlChangeMenu,
    )
    setTrackSettingsMenuPage((state || initialMenuState).trackSettingsMenuPage)
  }

  // event handlers
  const updateTrackSettingsMenuPage = when(
    showTrackSettingsMenu,
    !showTrackControlChangeMenu,
  )((args) => {
    const trackSettingsMenuPagesValues = Object.values(trackSettingsMenuPages)

    setTrackSettingsMenuPage((e) =>
      clamp(
        e + getEncoderValue(args),
        trackSettingsMenuPagesValues[0],
        trackSettingsMenuPagesValues.pop(),
      ),
    )
  })

  useGPIOEvents(
    [
      [
        `encoder_${TRACK_SETTINGS_ENCODER_INDEX}`,
        debounce(updateTrackSettingsMenuPage, 250),
      ],
    ],
    [showTrackSettingsMenu, showTrackControlChangeMenu],
  )

  useEffect(() => {
    if (!hasOpenMenu) return () => null

    electron.updateLeds(Array.from({ length: NUM_SWITCHES }).fill(0).join(''))
  }, [hasOpenMenu])

  const value = useMemo(() => {
    return {
      showSettingsMenu,
      setShowSettingsMenu,
      showTrackMenu,
      setShowTrackMenu,
      showEnvelopeMenu,
      setShowEnvelopeMenu,
      showTrackSettingsMenu,
      setShowTrackSettingsMenu,
      showTrackControlChangeMenu,
      setShowTrackControlChangeMenu,
      trackSettingsMenuPage,
      setTrackSettingsMenuPage,
      hasOpenMenu,
      resetMenuContext,
    }
  }, [
    showSettingsMenu,
    showTrackMenu,
    showEnvelopeMenu,
    showTrackSettingsMenu,
    showTrackControlChangeMenu,
    trackSettingsMenuPage,
    hasOpenMenu,
  ])

  const storageValue = useMemo(
    () =>
      omit(
        value,
        Function,
        'showSettingsMenu',
        'showTrackMenu',
        'showEnvelopeMenu',
      ),
    [value],
  )

  useIdleCallback(() => {
    setStorage((e) => ({
      ...e,
      projects: {
        ...(e?.projects || {}),
        [currentProject]: {
          ...(e?.projects?.[currentProject] || {}),
          menu: storageValue,
        },
      },
    }))
  }, [storageValue, currentProject])

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

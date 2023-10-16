import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { IconContext } from 'react-icons'

import state from '../state'
import gpio from '../gpio'
import { CELL_WIDTH, HEIGHT, WIDTH } from '../../constants'
import { clamp, int, random } from '../../utils'
import { useStateContext } from '../context/StateContext'
import { useMenuContext } from '../context/MenuContext'
import SettingsMenu from './SettingsMenu'
import EnvelopeMenu from './EnvelopeMenu'
import Header from '../components/Header'
import TrackMenu from './TrackMenu'
import Tracks from '../components/Tracks'

const S = {
  Wrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: ${WIDTH}px;
    max-height: ${HEIGHT}px;
    background-color: lightgray;
    overflow: hidden;
  `,
}

const App = () => {
  const { setStep, setIsPlaying } = useStateContext()
  const { showSettingsMenu, showTrackMenu, showEnvelopeMenu, hasOpenMenu } =
    useMenuContext()

  useEffect(() => {
    let id
    let lastUpdate = performance.now()
    let fps = 0

    const update = () => {
      let delta = (performance.now() - lastUpdate) / 1000
      lastUpdate = performance.now()
      fps = 1 / delta

      state.FPS = fps.toFixed()
      state.BEAT_PULSE =
        state.PLAYING && (state.STEP * 4) % 4 === 0
          ? 255
          : clamp(state.BEAT_PULSE - 30, 0, 255)

      const keys = ['bpm', 'gpio_keys', 'state_changed', ...state.GPIO_KEYS]
      electron.getState(keys)

      id = requestAnimationFrame(update)
    }

    id = requestAnimationFrame(update)
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    electron.onStateUpdate((_, data) => {
      const now = performance.now()
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'bpm') {
          const bpm = parseFloat(value)
          if (isNaN(bpm) || now - state.LAST_UPDATE < 1e3) return
          state.LAST_UPDATE = now
          value = bpm
        }
        if (['gpio_keys', 'state_changed'].includes(key)) {
          value = JSON.parse(value)
        }
        if (state.GPIO_KEYS.includes(key)) {
          gpio[key] = parseFloat(value)
        } else {
          state[key.toUpperCase()] = value
        }
      })
    })

    electron.onMidiStart(() => {
      state.PLAYING = true
      state.BEAT = 0
      state.BEAT_PULSE = 255
      setIsPlaying(true)
    })

    electron.onMidiStop(() => {
      state.PLAYING = false
      state.STEP = 0
      setIsPlaying(false)
    })
    
    electron.onMidiStep((_, data) => {
      state.STEP = parseFloat(data)
      setStep(state.STEP)
    })
  }, [])

  return (
    <IconContext.Provider
      value={{
        color: 'black',
        size: `${CELL_WIDTH}px`,
        className: 'react-icon',
      }}
    >
      <S.Wrapper>
        <Header />
        <SettingsMenu className={!showSettingsMenu && 'hidden'} />
        <TrackMenu className={!showTrackMenu ? 'hidden' : ''} />
        <EnvelopeMenu className={!showEnvelopeMenu && 'hidden'} />
        <Tracks className={hasOpenMenu && 'hidden'} />
      </S.Wrapper>
    </IconContext.Provider>
  )
}

export default App

import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { IoAddCircle } from 'react-icons/io5'

import { abs, getMaxSteps, int, remap, min } from '../../utils'
import {
  CELL_WIDTH,
  NUM_STEPS,
  NUM_SWITCHES,
  PADDING,
  TRACK_HEIGHT,
} from '../../constants'
import { useStateContext } from '../context/StateContext'
import { useMenuContext } from '../context/MenuContext'
import { useTrackContext } from '../context/TrackContext'
import TrackHeader from './TrackHeader'
import TrackSettingsMenu from './TrackSettingsMenu'
import TrackControlChangeMenu from './TrackControlChangeMenu'

const S = {
  Wrapper: styled.div`
    background-color: slategray;
  `,
  TrackMenusWrapper: styled.div`
    > div:not(:last-of-type) {
      border-bottom: ${({ $isCurrentTrack, $showTrackSettingsMenu }) =>
          $isCurrentTrack && $showTrackSettingsMenu ? '3px' : '0px'}
        dotted
        ${({ $isCurrentTrack }) => ($isCurrentTrack ? 'black' : 'transparent')};
    }
    > div:last-of-type {
      border-bottom: ${({ $isCurrentTrack }) =>
          $isCurrentTrack ? '3px' : '0px'}
        ridge
        ${({ $isCurrentTrack }) => ($isCurrentTrack ? 'red' : 'transparent')};
    }
  `,
  Track: styled.div`
    filter: ${({ $isMuted }) =>
      $isMuted
        ? 'grayscale(0.85) brightness(0.75) opacity(0.33)'
        : 'grayscale(0) brightness(1) opacity(1)'};
    background-color: slategray;
    width: 100%;
    height: ${TRACK_HEIGHT}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    border-bottom: ${({ $isMuted }) =>
      $isMuted ? `${PADDING}px solid pink` : 'none'};

    &::after {
      position: absolute;
      content: '';
      display: ${({ $isCurrentTrack }) => ($isCurrentTrack ? 'block' : 'none')};
      background-color: ${({ $bank }) =>
        $bank === undefined ? 'transparent' : 'blue'};
      opacity: 0.33;
      top: 0;
      left: ${({ $bank }) => ($bank === 0 ? '0%' : '50%')};
      width: ${({ $bankSteps }) =>
        $bankSteps === 0
          ? `${TRACK_HEIGHT * NUM_SWITCHES}px`
          : `${TRACK_HEIGHT * $bankSteps}px`};
      height: 100%;
    }
  `,
  Text: styled.div`
    position: relative;
    display: inline-block;
    color: white;
    transform: translateY(var(--translateText));
  `,
  Step: styled.div`
    align-self: flex-end;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: ${({ $isPressedTrig }) =>
      $isPressedTrig ? 'center' : 'flex-end'};
    justify-content: ${({ $isPressedTrig }) =>
      $isPressedTrig ? 'center' : 'initial'};
    background-color: ${({ $isActive }) =>
      $isActive === 1 ? 'red' : 'lightgray'};
    opacity: ${({ $isActive }) => ($isActive === 1 ? '1' : '0.5')};
    border: ${({ $isPlaying }) =>
      $isPlaying ? '2px solid black' : '0px solid transparent'};
    z-index: 2;

    min-width: ${CELL_WIDTH}px;
    min-height: 0px;
    max-height: ${CELL_WIDTH}px;
    height: var(--height);
    box-sizing: border-box;
    padding: ${PADDING}px;
    margin: 0 2px;

    &::before {
      position: absolute;
      content: '';
      opacity: 0.33;
      display: ${({ $isPressedTrig }) => ($isPressedTrig ? 'block' : 'none')};
      background-color: slategray;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  MidiStep: styled.div`
    align-self: flex-end;
    position: relative;
    display: inline-block;
    background-color: ${({ $isActive }) =>
      $isActive === 1 ? 'green' : 'lightgray'};
    opacity: ${({ $isActive }) => ($isActive === 1 ? '1' : '0.5')};
    border: ${({ $isPlaying }) =>
      $isPlaying ? '1px solid black' : '1px solid transparent'};
    z-index: 2;

    min-width: ${CELL_WIDTH}px;
    min-height: 0px;
    max-height: ${CELL_WIDTH}px;
    height: var(--height);
    box-sizing: border-box;
    padding: ${PADDING}px;
    margin: 0 2px;
  `,
}

const Track = () => {
  const trackRef = useRef(null)

  const { step, currentTrack, setCurrentTrack } = useStateContext()
  const { showTrackSettingsMenu } = useMenuContext()
  const {
    id,
    isCurrentTrack,
    isMuted,
    isFollowActive,
    steps,
    scale,
    bank,
    pressedTrig,
    currentPage,
    bankSteps,
    trigs,
    trigsVelocity,
  } = useTrackContext()

  useEffect(() => {
    if (showTrackSettingsMenu && isCurrentTrack && trackRef.current) {
      trackRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }
  }, [showTrackSettingsMenu, isCurrentTrack])

  const handleClick = () => {
    if (currentTrack === id) return
    setCurrentTrack(id)
  }

  const getTrigs = (t) => {
    const offset = getMaxSteps((bank + 1) * NUM_SWITCHES, 16) / 16 - 1
    return isFollowActive
      ? t.slice(currentPage * NUM_STEPS, NUM_STEPS + currentPage * NUM_STEPS)
      : t.slice(offset * NUM_STEPS, NUM_STEPS + offset * NUM_STEPS)
  }

  return (
    <S.Wrapper ref={trackRef} onClick={handleClick} data-track={id}>
      <TrackHeader />
      <S.TrackMenusWrapper
        $isCurrentTrack={isCurrentTrack}
        $showTrackSettingsMenu={showTrackSettingsMenu}
      >
        <TrackSettingsMenu />
        <TrackControlChangeMenu />
      </S.TrackMenusWrapper>

      <S.Track
        $isCurrentTrack={isCurrentTrack}
        $isMuted={isMuted}
        $bank={bank % 2}
        $bankSteps={bankSteps}
      >
        {steps &&
          getTrigs(trigs).map((e, i) => {
            const index = isFollowActive ? i + currentPage * NUM_STEPS : i
            const height = e
              ? int(remap(trigsVelocity[index], [0, 127], [0, CELL_WIDTH]))
              : CELL_WIDTH

            return (
              <S.Step
                style={{
                  '--height': `${height}px`,
                }}
                key={`step-${index}`}
                $isActive={e}
                $isPlaying={(step * (4 * scale)) % steps === index}
                $isMuted={isMuted}
                $isPressedTrig={Boolean(e) && pressedTrig === index}
              >
                {Boolean(e) && pressedTrig === index && (
                  <S.Text className="lg" style={{ color: 'black' }}>
                    X
                  </S.Text>
                )}
              </S.Step>
            )
          })}
      </S.Track>
    </S.Wrapper>
  )
}

export default Track

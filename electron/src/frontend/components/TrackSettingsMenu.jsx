import React, { useEffect, useMemo, useState } from 'react'
import { styled } from 'styled-components'
import { Midi } from 'tonal'

import {
  TRACK_HEIGHT,
  CELL_WIDTH,
  PADDING,
  ROOT_NOTE,
  MAX_PROBABILITY,
  TRIG_OPS,
} from '../../constants'
import { clamp, getMaxSteps, int, trigConditionsArray, when } from '../../utils'
import { useStorageContext } from '../context/StorageContext'
import { useStateContext } from '../context/StateContext'
import { trackSettingsMenuPages, useMenuContext } from '../context/MenuContext'
import { useTrackContext } from '../context/TrackContext'
import StyledText from './StyledText'

const { midiToNoteName } = Midi

const S = {
  Wrapper: styled.div`
    position: relative;
    background-color: lightgray;
    height: ${({ $isOpen }) => ($isOpen ? `${TRACK_HEIGHT * 1.5}px` : '0px')};
    transition: height 50ms ease;
    overflow: hidden;
  `,
  InnerWrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  `,
  Item: styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: lightgray;
    width: ${({ $width }) => `${(CELL_WIDTH + PADDING) * $width}px`};
    height: 100%;
    border-right: 3px dotted black;
    filter: ${({ $dim }) => ($dim ? 'opacity(0.25)' : 'initial')};

    p {
      display: inline-block;
      padding: ${PADDING * 1.5}px ${PADDING}px;
      padding-bottom: ${PADDING}px;
      color: gray;
    }

    > div {
      position: relative;
      padding: ${PADDING}px ${PADDING}px;
    }

    select {
      padding: ${PADDING / 2}px 0;
      margin-top: ${PADDING / 2}px;
      margin-left: ${PADDING}px;
      margin-right: ${PADDING}px;
      background-color: lightgray;
      font-size: 1.5rem;
      user-select: none;
      outline: none;
      border: 0;

      &:focus {
        background-color: white;
      }

      &.under {
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
      }
    }
  `,
}

const TrackSettingsMenu = () => {
  const { storage } = useStorageContext()
  const { muteTrack, unmuteTrack } = useStateContext()
  const {
    showTrackSettingsMenu,
    setShowTrackSettingsMenu,
    showTrackControlChangeMenu,
    trackSettingsMenuPage,
    setTrackSettingsMenuPage,
  } = useMenuContext()
  const {
    id,
    device,
    deviceId,
    setDeviceId,
    instrumentNotes,
    rootNote,
    setRootNote,
    velocity,
    probability,
    currentProbability,
    steps,
    scale,
    trigs,
    notes,
    setNotes,
    trigsVelocity,
    trigsProbability,
    isFollowActive,
    isCurrentTrack,
    isMuted,
    pressedTrig,
    trigOp,
    setTrigOp,
  } = useTrackContext()

  const [showInstrumentNoteSelect, setShowInstrumentNoteSelect] =
    useState(false)

  const hasPressedTrig = useMemo(
    () => Boolean(trigs[pressedTrig]),
    [pressedTrig, trigs],
  )

  const currentNote = useMemo(
    () =>
      pressedTrig !== undefined && hasPressedTrig
        ? notes[pressedTrig]
        : rootNote,
    [pressedTrig, hasPressedTrig, notes, rootNote],
  )

  const rootNoteName = useMemo(
    () =>
      midiToNoteName(currentNote, {
        pitchClass: true,
        sharps: true,
      }),
    [currentNote],
  )

  const currentVelocity = useMemo(
    () =>
      pressedTrig !== undefined && hasPressedTrig
        ? trigsVelocity[pressedTrig]
        : velocity,
    [pressedTrig, hasPressedTrig, trigsVelocity, velocity],
  )

  const currentPageItem = useMemo(
    () => (
      <S.Item $width={2} $dim={hasPressedTrig}>
        <p>PAGE</p>
        <div>
          <StyledText className="lg" bold={true}>
            {trackSettingsMenuPage + 1}
          </StyledText>
          /
          <StyledText className="md" bold={false}>
            {Object.values(trackSettingsMenuPages).length}
          </StyledText>
        </div>
      </S.Item>
    ),
    [trackSettingsMenuPage, pressedTrig],
  )

  const currentTrackSettingsMenuPage = {
    [trackSettingsMenuPages.TRACK_SETTINGS]: (
      <>
        <S.Item
          $width={2}
          $hasHiddenSelect={true}
          $dim={hasPressedTrig && showTrackControlChangeMenu}
        >
          <p>ROOT</p>
          <div>
            <StyledText className="lg" bold>
              {currentNote}
            </StyledText>
            <StyledText
              className="md"
              style={{ marginLeft: `${PADDING}px`, color: 'gray' }}
              bold={false}
            >
              {rootNoteName}
            </StyledText>

            {device && (
              <select
                className="under"
                style={{ opacity: showInstrumentNoteSelect ? '1' : '0' }}
                onClick={() => setShowInstrumentNoteSelect((e) => !e)}
                onChange={({ target }) => {
                  setRootNote(() => {
                    const updatedRootNote = int(target?.value) || ROOT_NOTE
                    setNotes((n) => n.map(() => updatedRootNote))
                    return updatedRootNote
                  })
                  target?.blur()
                  setTimeout(() => setShowInstrumentNoteSelect(false), 100)
                }}
              >
                {(instrumentNotes || []).map(([instrument, note], i) => (
                  <option key={`${instrument}-${note}-${i}`} value={note}>
                    {instrument} {note}
                  </option>
                ))}
              </select>
            )}
          </div>
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig && showTrackControlChangeMenu}>
          <p>VELOCITY</p>
          <div>
            <StyledText className="lg" bold>
              {currentVelocity}
            </StyledText>
          </div>
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig && showTrackControlChangeMenu}>
          <p>PROB</p>
          <div>
            {Array.isArray(currentProbability) ? (
              <>
                <StyledText className="lg" style={{ display: 'inline' }} bold>
                  {currentProbability[0]}
                </StyledText>
                <StyledText
                  className="lg"
                  style={{
                    display: 'inline',
                    marginLeft: `${-PADDING / 2}px`,
                    color: 'gray',
                  }}
                  bold
                >
                  :
                </StyledText>
                <StyledText className="lg" style={{ display: 'inline' }} bold>
                  {currentProbability[1]}
                </StyledText>
              </>
            ) : (
              <>
                <StyledText className="lg" bold={true}>
                  {currentProbability}
                </StyledText>
                <StyledText className="md" bold={false}>
                  %
                </StyledText>
              </>
            )}
          </div>
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig}>
          <p>LENGTH</p>
          <div>
            <StyledText className="lg" style={{ display: 'inline' }} bold>
              {steps}
            </StyledText>
            /
            <StyledText
              className="md"
              style={{
                display: 'inline',
                marginLeft: `${-PADDING / 2}px`,
                color: 'gray',
              }}
            >
              {getMaxSteps(steps)}
            </StyledText>
          </div>
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig}>
          <p>SCALE</p>
          <div>
            <StyledText className="lg" bold={true}>
              {scale < 1 ? scale.toLocaleString().slice(1, 5) : scale}
            </StyledText>
            <StyledText className="md" bold={false}>
              X
            </StyledText>
          </div>
        </S.Item>

        <S.Item $width={4} $dim={hasPressedTrig}>
          <p>MIDI MAP</p>
          <select
            name="devices"
            onChange={(e) => {
              setDeviceId(e.target.value)
              e?.target?.blur()
            }}
          >
            <option value="">default</option>
            {(storage?.midiDeviceCharts || []).map(({ device }) => (
              <option
                key={device.id}
                value={device.id}
                selected={deviceId === device.id}
              >
                {device.name}
              </option>
            ))}
          </select>
        </S.Item>

        {currentPageItem}
      </>
    ),
    [trackSettingsMenuPages.TRACK_CONDITIONS]: (
      <>
        <S.Item
          $width={2}
          onClick={() => (isMuted ? unmuteTrack(id) : muteTrack(id))}
          $dim={hasPressedTrig}
        >
          <p>MUTE</p>
          <div>
            <StyledText className="lg" bold={isMuted}>
              {!isMuted ? 'OFF' : 'ON'}
            </StyledText>
          </div>
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig}>
          <p>TRIG OP</p>
          <select
            name="trigOps"
            onChange={(e) => {
              setTrigOp(e.target.value)
              e?.target?.blur()
            }}
          >
            {TRIG_OPS.map((e) => (
              <option key={`trigOp-${e}`} value={e} selected={trigOp === e}>
                {e}
              </option>
            ))}
          </select>
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig}>
          <p>LOOP</p>
          <div>
            <StyledText className="lg" bold={true}>
              ∞
            </StyledText>
          </div>
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig}>
          4
        </S.Item>
        <S.Item $width={2} $dim={hasPressedTrig}>
          5
        </S.Item>
        <S.Item $width={2} $dim={hasPressedTrig}>
          6
        </S.Item>

        <S.Item $width={2} $dim={hasPressedTrig}>
          <p>FOLLOW</p>
          <div>
            <StyledText className="lg" bold={isFollowActive}>
              {!isFollowActive ? 'OFF' : 'ON'}
            </StyledText>
          </div>
        </S.Item>

        {currentPageItem}
      </>
    ),
  }[trackSettingsMenuPage]

  return (
    <S.Wrapper
      $isOpen={isCurrentTrack && showTrackSettingsMenu}
      $hasOpenTrackMenus={showTrackControlChangeMenu}
    >
      <S.InnerWrapper>{currentTrackSettingsMenuPage}</S.InnerWrapper>
    </S.Wrapper>
  )
}

export default TrackSettingsMenu

import React, { useMemo, useState } from 'react'
import { css, styled } from 'styled-components'
import {
  IoAnalyticsSharp,
  IoBanSharp,
  IoCaretBackSharp,
  IoCaretForwardSharp,
  IoClose,
  IoCodeWorkingSharp,
  IoGameController,
  IoGrid,
  IoMenu,
  IoPulseSharp,
  IoSettingsSharp,
  IoSwapHorizontalSharp,
  IoVolumeHighSharp,
  IoVolumeMuteSharp,
} from 'react-icons/io5'

import { CELL_WIDTH, PADDING, TRACK_HEIGHT } from '../../constants'
import { useStateContext } from '../context/StateContext'
import { useMenuContext } from '../context/MenuContext'
import { useTracksContext } from '../context/TracksContext'
import FPS from './FPS'
import BPM from './BPM'

const S = {
  Wrapper: styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    min-height: ${CELL_WIDTH}px;
    display: grid;
    align-items: center;
    padding: ${PADDING}px;
    box-sizing: border-box;
    background-color: lightgray;
    border-bottom: ${1}px solid black;

    grid-template: 'nav pattern bpm fps track-nav';
    grid-template-columns: ${TRACK_HEIGHT}px ${TRACK_HEIGHT * 2}px ${TRACK_HEIGHT}px 1fr;

    .react-icon {
      margin-right: ${PADDING * 2}px;
    }
  `,
  StatsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-left: ${PADDING * 4}px;
    }
  `,
  Nav: styled.div`
    grid-area: nav;
    display: flex;
    width: 50vw;

    ${({ $showSettingsMenu }) =>
      $showSettingsMenu &&
      css`
        width: 100vw;
        justify-content: space-between;
      `}
  `,
  TrackNav: styled.div`
    grid-area: track-nav;
    justify-self: flex-end;
    display: flex;
    align-items: center;

    p {
      display: inline-block;
      margin-right: ${PADDING * 4}px;
      color: gray;
    }
  `,
}

const Header = () => {
  const { currentProject, currentTrack } = useStateContext()
  const { isMuteMode } = useTracksContext()

  const {
    showSettingsMenu,
    setShowSettingsMenu,
    showTrackMenu,
    setShowTrackMenu,
    showEnvelopeMenu,
    setShowEnvelopeMenu,
    showTrackSettingsMenu,
    setShowTrackSettingsMenu,
  } = useMenuContext()

  const SettingsMenuIcon = useMemo(
    () => (showSettingsMenu ? IoClose : IoGrid),
    [showSettingsMenu],
  )

  return (
    <S.Wrapper>
      <S.Nav $showSettingsMenu={showSettingsMenu}>
        <SettingsMenuIcon
          style={{ scale: showSettingsMenu ? '1.25' : '0.85' }}
          onClick={() => setShowSettingsMenu((e) => !e)}
        />
        {showSettingsMenu && (
          <IoSettingsSharp
            style={{ scale: '0.9' }}
            onClick={() => electron.openDevtools()}
          />
        )}
      </S.Nav>

      <S.StatsWrapper>
        {!showSettingsMenu && (
          <>
            <p className="lg" style={{ gridArea: 'pattern' }}>
              P:{currentProject}
            </p>
            <div>
              <BPM />
              <FPS />
            </div>
          </>
        )}
      </S.StatsWrapper>

      <S.TrackNav className={showSettingsMenu && 'hidden'}>
        {isMuteMode && <IoVolumeHighSharp style={{ scale: '0.85' }} />}

        <p className="lg">T:{currentTrack}</p>

        {/* {!isMuted ? (
          <IoVolumeHighSharp style={{ scale: '0.85' }} onClick={muteTrack} />
        ) : (
          <IoVolumeMuteSharp
            style={{ scale: '0.85', fill: 'red' }}
            onClick={unmuteTrack}
          />
        )} */}

        {/* <IoCodeWorkingSharp
          style={{
            marginLeft: `${PADDING}px`,
            marginRight: `${PADDING * 2}px`,
            stroke: showEnvelopeMenu ? 'gray' : 'black',
          }}
          onClick={() => setShowTrackSettingsMenu((e) => !e)}
        /> */}

        {/* <IoCaretBackSharp style={{ marginRight: `-${PADDING * 1.5}px` }} />
        <IoCaretForwardSharp style={{ marginRight: `-${PADDING / 2}px` }} /> */}

        {/* <IoAnalyticsSharp style={{ marginRight: `${PADDING * 2}px` }} /> */}

        <IoPulseSharp
          style={{ marginRight: `${PADDING * 2}px`, transform: 'scale(-1,1)' }}
          onClick={() => setShowEnvelopeMenu((e) => !e)}
        />

        <IoSettingsSharp
          style={{ scale: '0.9' }}
          onClick={() => setShowTrackMenu((e) => !e)}
        />

        {/* <IoBanSharp
          style={{ scale: '0.85', fill: showEnvelopeMenu ? 'gray' : 'black' }}
        /> */}
      </S.TrackNav>
      {/* <IoMenu /> */}
    </S.Wrapper>
  )
}

export default Header

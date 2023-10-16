import React, { useEffect, useMemo } from 'react'
import { styled } from 'styled-components'

import { NUM_STEPS, PADDING } from '../../constants'
import { getMaxSteps } from '../../utils'
import { useMenuContext } from '../context/MenuContext'
import { useTrackContext } from '../context/TrackContext'
import StyledText from './StyledText'
import { useStorageContext } from '../context/StorageContext'

const S = {
  Wrapper: styled.div`
    background-color: lightgray;
    border-top: 3px solid black;
    border-bottom: ${({ $hasOpenTrackMenus }) =>
      $hasOpenTrackMenus ? '3px dotted black' : '0px ridge red'};

    p {
      display: inline-block;
      padding: ${PADDING}px ${PADDING * 2}px;
    }

    p:not(:first-of-type) {
      border-left: 3px dotted black;
    }
  `,
}

const TrackHeader = ({ isNewTrack }) => {
  const { showTrackSettingsMenu, showTrackControlChangeMenu } = useMenuContext()
  const {
    id,
    device,
    rootNoteInstrument,
    steps,
    isMuted,
    isCurrentTrack,
    currentPage,
  } = useTrackContext()

  useEffect(() => {
    // electron.log(
    //   `TRACK HEADER device ${JSON.stringify(rootNoteInstrument || {})}`,
    // )
  }, [rootNoteInstrument])

  if (isNewTrack) {
    return (
      <S.Wrapper $isNewTrack={isNewTrack}>
        <p className="sm">CREATE NEW TRACK</p>
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper
      $isCurrentTrack={isCurrentTrack}
      $hasOpenTrackMenus={showTrackSettingsMenu || showTrackControlChangeMenu}
    >
      <p className="sm">
        T:<StyledText bold>{id}</StyledText>
      </p>

      {rootNoteInstrument && (
        <p className="sm">
          <StyledText>{device.short}</StyledText>&nbsp;
          <StyledText bold>{rootNoteInstrument}</StyledText>
        </p>
      )}

      {/* <p className="sm">
        PAGE <StyledText bold>{currentPage + 1}</StyledText>/
        {getMaxSteps(steps) / NUM_STEPS}
      </p> */}

      <p className="sm">
        <StyledText bold>{steps}:</StyledText>
        {getMaxSteps(steps)}
      </p>
      {/* <p className="sm">
        BANK <StyledText bold>{bank % 2 === 0 ? 'A' : 'B'}</StyledText>
      </p> */}

      {isMuted && (
        <p className="sm">
          <StyledText bold>MUTED</StyledText>
        </p>
      )}
    </S.Wrapper>
  )
}

export default TrackHeader

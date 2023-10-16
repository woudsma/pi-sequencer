import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { styled } from 'styled-components'

import {
  TRACK_HEIGHT,
  CELL_WIDTH,
  PADDING,
  NUM_SWITCHES,
  MAX_CC,
} from '../../constants'
import { int, remap } from '../../utils'
import { useMenuContext } from '../context/MenuContext'
import { useTrackContext } from '../context/TrackContext'
import StyledText from './StyledText'
import Encoder from './Encoder'

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
    position: relative;
    display: inline;
    background-color: ${({ $inactive }) =>
      $inactive ? '#B7BBC0' : 'lightgray'};
    width: ${({ $width }) => `${(CELL_WIDTH + PADDING) * $width}px`};
    height: 100%;
    border-right: 3px dotted black;

    p {
      display: inline-block;
      padding: ${PADDING * 1.5}px ${PADDING}px;
      padding-bottom: ${PADDING}px;
    }

    > span {
      position: absolute;
    }

    > div {
      height: 100%;
      padding: ${PADDING * 2}px ${PADDING}px;
      display: flex;
      justify-content: center;
      align-items: center;

      .encoder,
      .trigConditionValue {
        position: absolute;
        margin: 0 auto;
        // margin-left: -${TRACK_HEIGHT / 2}px;
      }

      .trigConditionValue {
        margin-top: ${TRACK_HEIGHT / 2}px;
      }
    }
  `,
}

const TrackControlChangeMenu = () => {
  const { showTrackSettingsMenu, showTrackControlChangeMenu } = useMenuContext()
  const {
    isCurrentTrack,
    trigs,
    pressedTrig,
    trackControlChangeValues,
    controlChangeValues,
    controlChangeParams,
    isEditingControlChangeParams,
    instrumentControlChangeNames,
    deviceId,
  } = useTrackContext()

  const currentControlChangeParams = useMemo(
    () =>
      Array.from({ length: NUM_SWITCHES }).map((_, i) =>
        i in controlChangeParams ? controlChangeParams[i] : null,
      ),
    [controlChangeParams],
  )

  const handleItemClick = useCallback((e) => {
    electron.log(`cc item click ${e?.target?.innerHTML}`)
  }, [])

  return (
    <S.Wrapper
      $isOpen={isCurrentTrack && showTrackControlChangeMenu}
      $hasOpenTrackMenus={showTrackSettingsMenu}
    >
      <S.InnerWrapper>
        {currentControlChangeParams.map((e, i) => {
          const value =
            i in (controlChangeValues?.[pressedTrig] || {})
              ? controlChangeValues?.[pressedTrig]?.[i]
              : (pressedTrig === undefined || !Boolean(trigs[pressedTrig])) &&
                e &&
                trackControlChangeValues[i] > 0
              ? trackControlChangeValues[i]
              : null

          return (
            <S.Item $width={2} $inactive={!e} onClick={handleItemClick}>
              {isEditingControlChangeParams && (
                <p
                  style={{
                    color: isEditingControlChangeParams ? 'black' : 'gray',
                  }}
                >
                  <StyledText
                    bold={isEditingControlChangeParams}
                    style={{ color: 'gray' }}
                  >
                    CC:
                  </StyledText>
                  <StyledText bold>{e ? e : '-'}</StyledText>
                </p>
              )}
              <StyledText
                p
                style={{ display: 'block', padding: `${PADDING}px` }}
              >
                {e && deviceId && e in instrumentControlChangeNames
                  ? instrumentControlChangeNames[e]
                  : '-'}
              </StyledText>
              {!isEditingControlChangeParams && (
                <div>
                  <StyledText
                    className="lg trigConditionValue"
                    style={{
                      color: isEditingControlChangeParams ? 'gray' : 'initial',
                    }}
                    bold
                  >
                    {value}
                  </StyledText>
                  {value && (
                    <Encoder value={remap(value, [0, MAX_CC], [0, 100])} />
                  )}
                </div>
              )}
            </S.Item>
          )
        })}
      </S.InnerWrapper>
    </S.Wrapper>
  )
}

export default TrackControlChangeMenu

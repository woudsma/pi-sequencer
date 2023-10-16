import React, { useEffect, useMemo } from 'react'
import { styled } from 'styled-components'

import { HEADER_HEIGHT, WIDTH, HEIGHT } from '../../constants'
import { useStateContext } from '../context/StateContext'
import { useTracksContext } from '../context/TracksContext'
import { TrackContextProvider } from '../context/TrackContext'
import Track from './Track'
import NewTrack from './NewTrack'
import { int, random, remap } from '../../utils'

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 54px;
    min-height: ${HEIGHT - HEADER_HEIGHT}px;
    max-height: ${HEIGHT - HEADER_HEIGHT}px;
    min-width: ${WIDTH}px;
    max-width: ${WIDTH}px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: ${HEIGHT - HEADER_HEIGHT * 3}px;
  `,
}

const Tracks = ({ children, ...props }) => {
  const { currentProject } = useStateContext()
  const { currentTracks } = useTracksContext()

  const tracks = useMemo(
    () =>
      Object.values(currentTracks).map((track, i) => (
        <TrackContextProvider
          key={`${currentProject}-${track.id}-${i}`}
          {...track}
        >
          <Track />
        </TrackContextProvider>
      )),
    [currentProject, currentTracks],
  )

  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    let id
    const update = () => {
      // ctx.fillStyle = `rgb(${int(random(0, 255))},${int(
      //   random(0, 255),
      // )},${int(random(0, 255))})`
      // ctx.fillRect(10, 10, 150, 100)

      id = requestAnimationFrame(update)
    }

    // id = requestAnimationFrame(update)

    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <S.Wrapper {...props}>
      {tracks}
      <NewTrack />
    </S.Wrapper>
  )
}

export default Tracks

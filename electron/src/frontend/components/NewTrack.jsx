import React, { useMemo } from 'react'
import { styled } from 'styled-components'
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5'

import { int } from '../../utils'
import { useStorageContext } from '../context/StorageContext'
import { useStateContext } from '../context/StateContext'
import { useTracksContext } from '../context/TracksContext'
import TrackHeader from './TrackHeader'
import { ROOT_NOTE } from '../../constants'

const S = {
  Wrapper: styled.div``,
  Controls: styled.div`
    display: flex;
    justify-content: center;
  `,
}

const NewTrack = () => {
  const { storage } = useStorageContext()
  const { currentTrack, setCurrentTrack } = useStateContext()
  const { currentTracks, addTrack, removeTrack } = useTracksContext()

  const currentTracksKeys = useMemo(
    () => Object.keys(currentTracks),
    [currentTracks],
  )

  const handleRemoveTrack = () => {
    if (!currentTracksKeys.length) return

    const keys = currentTracksKeys.slice()
    const lastIndex = keys.pop()
    const lastTrackIndex = keys.pop()

    removeTrack(lastIndex)
    if (int(lastIndex) === int(currentTrack)) {
      setCurrentTrack(int(lastTrackIndex))
    }
  }

  const handleAddTrack = () => {
    const lastIndex = currentTracksKeys.slice().pop()
    const nextIndex = isNaN(lastIndex) ? 0 : int(lastIndex) + 1
    const deviceId = currentTracks?.[lastIndex]?.deviceId

    addTrack({
      id: nextIndex,
      ...(!isNaN(lastIndex) && {
        deviceId,
        rootNote:
          (storage?.midiDeviceCharts || []).find(
            ({ device }) => device?.id === deviceId,
          )?.device?.midi?.config?.rootNote || ROOT_NOTE,
      }),
    })
    setCurrentTrack(nextIndex)
  }

  return (
    <S.Wrapper>
      <TrackHeader isNewTrack />
      <S.Controls>
        <IoRemoveSharp onClick={handleRemoveTrack} />
        <IoAddSharp onClick={handleAddTrack} />
      </S.Controls>
    </S.Wrapper>
  )
}

export default NewTrack

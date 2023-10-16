import React from 'react'
import { styled } from 'styled-components'

import state from '../state'
import StyledText from './StyledText'
import { useStateContext } from '../context/StateContext'

const S = {
  Wrapper: styled.div`
    grid-area: bpm;
    justify-self: flex-start;
    color: gray;
  `,
}

const BPM = () => {
  const { isPlaying } = useStateContext()

  return (
    <S.Wrapper>
      <p className="sm">
        BPM:
        <StyledText style={isPlaying ? { color: 'black' } : {}} bold>
          {state.BPM}
        </StyledText>
      </p>
    </S.Wrapper>
  )
}

export default BPM

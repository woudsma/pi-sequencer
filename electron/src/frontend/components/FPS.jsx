import React, { useRef } from 'react'
import { styled } from 'styled-components'

import state from '../state'
import { int, sum } from '../../utils'
import { PADDING } from '../../constants'

const S = {
  Wrapper: styled.div`
    grid-area: fps;
    justify-self: flex-start;
    color: gray;
    margin-top: ${PADDING / 2}px;
  `,
}

const FPS = () => {
  const samples = useRef(Array.from({ length: 8 }).fill(0))
  const i = useRef(0)

  samples.current[i.current++ % samples.current.length] = int(state.FPS)
  const average = sum(samples.current) / samples.current.length

  return (
    <S.Wrapper>
      <p className="sm">FPS:{average.toFixed(1)}</p>
    </S.Wrapper>
  )
}

export default FPS

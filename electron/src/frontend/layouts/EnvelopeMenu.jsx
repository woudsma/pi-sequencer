import React from 'react'
import { styled } from 'styled-components'

import { CELL_WIDTH } from '../../constants'
import { defaultMenuStyle } from './menuStyle'

const S = {
  Wrapper: styled.div`
    ${defaultMenuStyle}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  Button: styled.button`
    padding: 10px;
    margin-bottom: ${CELL_WIDTH}px;
    font-size: 1.5rem;
  `,
}

const EnvelopeMenu = ({ ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Button>
        <p>Create envelope</p>
      </S.Button>
    </S.Wrapper>
  )
}

export default EnvelopeMenu

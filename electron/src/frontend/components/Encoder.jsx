import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { remap } from '../../utils'

const S = {
  Wrapper: styled.div`
    pointer-events: none;
    
    svg {
      margin-top: 25px;
      width: 100px;
      height: 100px;
      display: block;
      scale: 0.72;
      clip-path: polygon(0 0, 100% 0, 100% 82%, 0 82%);
    }

    path {
      stroke-linecap: round;
      stroke-width: 8;

      &.grey {
        stroke: transparent;
      }

      &.black {
        stroke: rgba(0, 0, 0, 20%);
        stroke-dasharray: calc(40 * 3.142 * 1.85);
        stroke-dashoffset: 230;
      }
    }
  `,
}

const Encoder = ({ value = 0 }) => {
  return (
    <S.Wrapper className="encoder">
      <svg viewbox="0 0 100 100">
        <path
          class="grey"
          d="M40,90 A40,40 0 1,1 60,90"
          style={{ fill: 'none' }}
        />
        <path
          class="black"
          d="M40,90 A40,40 0 1,1 60,90"
          style={{ fill: 'none', strokeDashoffset: remap(value, [100, 0], [20, 210]) }}
        />
      </svg>
    </S.Wrapper>
  )
}

export default Encoder

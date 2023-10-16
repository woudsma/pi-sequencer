import React, { useState } from 'react'
import { styled } from 'styled-components'
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5'

import { CELL_WIDTH, PADDING } from '../../constants'

const S = {
  Wrapper: styled.div`
    width: 50%;
    height: ${CELL_WIDTH}px;
    margin: ${PADDING * 3}px 0;
  `,
  InnerWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightslategray;
    padding: ${PADDING}px;
    margin: ${PADDING * 2}px;

    > p {
      margin-left: ${PADDING * 4}px;
    }

    > div {
      display: flex;
      align-items: center;
      margin-right: ${PADDING * 2}px;

      p {
        margin: 0 ${PADDING * 2}px;
      }
    }
  `,
}

const ControlSetting = ({ name, value = 0, handleControlChange }) => {
  const [controlValue, setControlValue] = useState(value)

  const handleClick = (x) => {
    setControlValue((prevControlValue) => {
      const newValue = prevControlValue + x
      handleControlChange(name, newValue)
      return newValue
    })
  }

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <p className="md">{name}</p>
        <div>
          <IoRemoveSharp onClick={() => handleClick(-1)} />
          <p className="md">{controlValue}</p>
          <IoAddSharp onClick={() => handleClick(1)} />
        </div>
      </S.InnerWrapper>
    </S.Wrapper>
  )
}

export default ControlSetting

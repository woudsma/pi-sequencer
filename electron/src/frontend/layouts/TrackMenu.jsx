import React, { useState } from 'react'
import { styled } from 'styled-components'

import { PADDING } from '../../constants'
import { defaultMenuStyle } from './menuStyle'
import ControlSetting from '../components/ControlSetting'

const S = {
  Wrapper: styled.div`
    ${defaultMenuStyle}

    p {
      color: white;
      margin: ${PADDING * 2}px;
      margin-bottom: 0;
    }
  `,
  ControlSettingWrapper: styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `,
}

const TrackMenu = ({ ...props }) => {
  const [controlState, setControlState] = useState({})

  const handleControlChange = (name, value) => {
    setControlState((prevControlState) => ({
      ...prevControlState,
      [name]: value,
    }))
  }

  const controlProps = { handleControlChange }

  return (
    <S.Wrapper {...props}>
      <p className="lg">TRACK SETTINGS</p>
      <S.ControlSettingWrapper>
        <ControlSetting name="steps" {...controlProps} />
        <ControlSetting name="rootNote" {...controlProps} />
        <ControlSetting name="length" {...controlProps} />
        <ControlSetting name="channel" {...controlProps} />
      </S.ControlSettingWrapper>
      <pre>{JSON.stringify(controlState, null, 2)}</pre>
    </S.Wrapper>
  )
}

export default TrackMenu

import React from 'react'
import { styled } from 'styled-components'

const S = {
  Span: styled.span``,
  B: styled.b``,
}

const StyledText = ({ children, p, bold, ...props }) => {
  let Element = S.Span
  if (bold) Element = S.B

  if (p && bold) {
    return (
      <S.Span {...props}>
        <S.B>{children}</S.B>
      </S.Span>
    )
  }
  return <Element {...props}>{children}</Element>
}

export default StyledText

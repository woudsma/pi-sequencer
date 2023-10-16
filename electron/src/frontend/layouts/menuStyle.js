import { css } from 'styled-components'

import { PADDING, WIDTH, HEIGHT, HEADER_HEIGHT } from '../../constants'

export const defaultMenuStyle = css`
  position: fixed;
  top: 54px;
  padding: ${PADDING * 2}px;
  background-color: dimgray;
  min-height: ${HEIGHT - HEADER_HEIGHT}px;
  max-height: ${HEIGHT - HEADER_HEIGHT}px;
  min-width: ${WIDTH}px;
  max-width: ${WIDTH}px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`

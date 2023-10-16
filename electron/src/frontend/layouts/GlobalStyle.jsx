import { createGlobalStyle } from 'styled-components'

import { PADDING } from '../../constants'

export default createGlobalStyle`
  @font-face {
    font-family: 'MartianMono';
    src: url('../assets/MartianMono.woff2') format('woff2'),
      url('../assets/MartianMono.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, select {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'MartianMono';
    vertical-align: baseline;
    box-sizing: border-box;
    word-spacing: -${PADDING * 2}px;

    .sm {
      font-size: 1.25rem;
    }
    .md {
      font-size: 1.5rem;
    }
    .lg {
      font-size: 1.75rem;
    }
    .xl {
      font-size: 2rem;
    }
  }

  p {
    user-select: none;
  }

  b {
    font-weight: bold;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 800px;
    height: 480px;
    overflow-x: hidden;
  }
  
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .hidden {
    visibility: hidden;
    pointer-events: none;
  }

  #canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    outline: none;
  }
`

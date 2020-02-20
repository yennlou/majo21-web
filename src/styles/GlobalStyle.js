import { createGlobalStyle } from 'styled-components'

const ResetCss = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Ubuntu+Mono|Source+Code+Pro');

  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'menlo', 'Roboto Mono', "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", monospace, sans-serif;
  }

  body {
    background-color: ${props => props.theme.data.BG};
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;
  }

  a {
    color: inherit;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #app {
    height: 100vh;
    overflow: hidden;
  }
`

export default ResetCss

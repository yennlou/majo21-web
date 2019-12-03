import { createGlobalStyle } from 'styled-components'

const ResetCss = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: menlo, monospace;
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
    background-color: ${props => props.theme.data.BG};
  }
`

export default ResetCss

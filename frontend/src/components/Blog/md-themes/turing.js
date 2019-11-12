import { css } from 'styled-components'

const theme = css`
  & {
    font-family: monospace;
    font-weight: bold;
    text-decoration-skip: none;
    text-align: justify;
    line-height: 1.4;
  }

  h1, h2, h3, h4, h5, h6, p, li {
    font-size: 16px;
  }
  
  h1, h2 {
    text-align: center;
    line-height: 2;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  h3 {
    margin-bottom: 1em
  }

  h1, h2, h3, em, th {
    text-decoration: underline;
  }

  hr {
    border-color: ${({ theme }) => theme.data.BLOG_FONT};
  }

  blockquote, strong {
    color: #b39a1d; 
  }

  blockquote {
    margin-left: 30px;
    margin-right: 30px
  }

  a {
    color: ${({ theme }) => theme.data.BLOG_FONT};
    &:hover {
      background-color: ${({ theme }) => theme.data.BLOG_FONT};
      color: ${({ theme }) => theme.data.BG};
      text-decoration: none;
    }
  }

  em, strong {
    font-style: normal;
  }

  ul {
    list-style-type: square 
  }

/* Numbering */
  & {
    counter-reset: h2 
  }

  h2 {
    counter-reset: h3 
  }

  h2:before {
    counter-increment: h2;
    content: counter(h2) ". ";
  }

  h3:before {
    counter-increment: h3;
    content: counter(h2) "." counter(h3) ". ";
  }

  p, ul, ol {
    margin: 1em 0;
    ul {
      margin: 0 0 0 2em;
    }
  }
`

export default theme

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
    font-size: inherit;
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

  h1, h2:not(#toc), h3, em, th {
    text-decoration: underline;
  }

  hr {
    border-color: ${({ theme }) => theme.data.BLOG_FONT};
  }

  blockquote, strong {
    color: ${({ theme }) => theme.data.BLOG_STRONG};
  }

  blockquote {
    margin-left: 2em;
    margin-right: 2em
  }

  a {
    color: ${({ theme }) => theme.data.BLOG_FONT};
    &:hover {
      background-color: ${({ theme }) => theme.data.BLOG_LINK_BG};
      color: ${({ theme }) => theme.data.BLOG_LINK};
      text-decoration: none;
    }
  }

  em {
    font-style: italic;
  }

  strong {
    font-style: normal;
  }

/* Numbering */
  & {
    counter-reset: h2 
  }

  h2 {
    counter-reset: h3 
  }

  h2:not(#toc):before {
    counter-increment: h2;
    content: counter(h2) ". ";
  }

  h3:before {
    counter-increment: h3;
    content: counter(h2) "." counter(h3) ". ";
  }

  p, ul, ol, pre {
    margin: 1em 0;
    ul {
      margin: 0 0 0 2em;
    }
  }

  ul {
    list-style-type: square 
  }

  ol {
    list-style-type: decimal;
  }

  ul, ol {
    margin-left: 2em;
  }

  pre {
    padding: 1em 2em;
    color: #b39a1d;
    background: ${({ theme }) => theme.data.BLOG_CODE_BG};
    font-family: menlo, monospace;
    font-weight: lighter;
  }

  code {
    background: ${({ theme }) => theme.data.BLOG_CODE_BG};
    color: ${({ theme }) => theme.data.BLOG_CODE};
  }

`

export default theme

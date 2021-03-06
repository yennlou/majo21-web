import { css } from 'styled-components'

const theme = css`
  & {
    font-family: monospace;
    font-weight: bold;
    text-decoration-skip: none;
    text-align: justify;
    line-height: 1.4;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    font-size: inherit;
  }

  h1,
  h2 {
    text-align: center;
    line-height: 2;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  h3 {
    margin-bottom: 1em;
  }

  h1,
  h2:not(#toc),
  h3,
  em,
  th {
    text-decoration: underline;
  }

  hr {
    border-color: var(--blog-font);
  }

  blockquote,
  strong {
    color: var(--blog-strong);
  }

  blockquote {
    margin-left: 2em;
    margin-right: 2em;
  }

  a {
    padding: 0.1em 0.2em;
    color: var(--blog-font);
    &:hover {
      background-color: var(--blog-link-bg);
      color: var(--blog-link);
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
    counter-reset: h2;
  }

  h2 {
    counter-reset: h3;
  }

  h2:not(#toc):before {
    counter-increment: h2;
    content: counter(h2) '. ';
  }

  h3:before {
    counter-increment: h3;
    content: counter(h2) '.' counter(h3) '. ';
  }

  p,
  ul,
  ol,
  pre {
    margin: 1em 0;
    ul {
      margin: 0 0 0 2em;
    }
  }

  ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
  }

  ul,
  ol {
    margin-left: 2em;
    margin-right: 2em;
  }

  pre {
    padding: 0;
    overflow-x: scroll;
    color: #b39a1d;
    background: var(--blog-code-bg);
    font-family: menlo, monospace;
    font-weight: lighter;
    margin: 0.4em 0em 1.6em;
    border-radius: 0.5em;
    overflow: scroll;

    code {
      display: inline-block;
      overflow: initial;
      padding: 0;
      margin: 1.6em 2em;
      border-radius: 0;
    }
  }

  code {
    background: var(--blog-code-bg);
    color: var(--blog-code);
    padding: 0 4px;
    margin: 0 2px;
    border-radius: 4px;
  }

  /* Paraíso Comment */
  .hljs-comment,
  .hljs-quote {
    color: #8d8687;
  }

  /* Paraíso Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-link,
  .hljs-meta {
    color: #c74a6a;
    color: #b39a1d;
  }

  /* Paraíso Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-deletion {
    color: #48c598;
    color: #c74a6a;
  }

  /* Paraíso Yellow */
  .hljs-title,
  .hljs-section,
  .hljs-attribute {
    color: #fec418;
  }

  /* Paraíso Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #458ec1;
  }

  /* Paraíso Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #d8b83e;
  }

  .hljs {
    color: #a39e9b;
    color: #bdbab8;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  @media (max-width: 870px) {
    pre {
      padding: 0;
      margin-left: -14px;
      width: 100vw;
      border-radius: 0px;
      code {
        margin: 1.6em;
      }
    }

    blockquote {
      margin-left: 1em;
      margin-right: 1em;
    }
  }
`

export default theme

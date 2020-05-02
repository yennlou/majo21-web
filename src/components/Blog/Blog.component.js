import React, { useEffect } from 'react'

import ReactHtmlParser from 'react-html-parser'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import html from 'highlight.js/lib/languages/xml'

import { BlogWrapper, BlogTitle, BlogBody } from './Blog.styles'
import BlogInfo from '../BlogInfo'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('html', html)
hljs.registerLanguage('sh', html)

const updateCodeSyntaxHighlighting = () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block)
  })
}

const Blog = ({ title, html, ...otherProps }) => {
  useEffect(updateCodeSyntaxHighlighting)
  return (
    <BlogWrapper>
      <BlogTitle>{title}</BlogTitle>
      <BlogInfo {...otherProps} linkable />
      <BlogBody>{ReactHtmlParser(html)}</BlogBody>
    </BlogWrapper>
  )
}

export default Blog

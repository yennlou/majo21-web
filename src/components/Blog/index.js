import React, { Component } from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'
import Disqus from 'disqus-react'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import html from 'highlight.js/lib/languages/xml'

import mdTheme from './md-themes/turing'
import BlogEntryInfo from '../BlogEntry/BlogEntryInfo'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('html', html)
hljs.registerLanguage('sh', html)

export const BlogWrapper = styled.div`
  padding: 24px 0 40px;
  color: ${({ theme }) => theme.data.BLOG_FONT};
`

export const BlogTitle = styled.h3`
  font-size: 42px;
  text-align: center;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.data.BLOG_FONT};
  color: ${({ theme }) => theme.data.BG};
`

const BlogBody = styled.div`
  ${mdTheme}
  font-size: 16px;
  margin-bottom: 30px;
`

class Blog extends Component {
  componentDidMount () {
    this.updateCodeSyntaxHighlighting()
  }

  componentDidUpdate () {
    this.updateCodeSyntaxHighlighting()
  }

  updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
  }

  render () {
    const { title, html, ...otherProps } = this.props
    const disqusShortname = 'majo21'
    const disqusConfig = {
      url: window.location.href,
      identifier: this.props.id,
      title
    }
    return (
      <BlogWrapper>
        <BlogTitle>
          {title}
        </BlogTitle>
        <BlogEntryInfo {...otherProps} />
        <BlogBody>{ReactHtmlParser(html)}</BlogBody>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </BlogWrapper>
    )
  }
}

export default Blog

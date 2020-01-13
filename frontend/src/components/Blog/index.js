import React, { Component } from 'react'
import styled from 'styled-components'
import hljs from 'highlight.js'

import mdTheme from './md-themes/turing'
import BlogEntryInfo from '../BlogEntry/BlogEntryInfo'

export const BlogWrapper = styled.div`
  padding: 24px 0 40px;
  color: ${({ theme }) => theme.data.MD_FONT};
`

export const BlogTitle = styled.h3`
  font-size: 42px;
  text-align: center;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.data.MD_FONT};
  color: ${({ theme }) => theme.data.BG};
`

const BlogBody = styled.div`
  ${mdTheme}
  font-size: 16px;
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
    return (
      <BlogWrapper>
        <BlogTitle>
          {title}
        </BlogTitle>
        <BlogEntryInfo {...otherProps} />
        <BlogBody dangerouslySetInnerHTML={{ __html: html }} />
      </BlogWrapper>
    )
  }
}

export default styled(Blog)``

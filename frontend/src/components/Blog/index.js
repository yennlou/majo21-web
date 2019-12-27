import React from 'react'
import styled from 'styled-components'

import mdTheme from './md-themes/turing'
import BlogEntryInfo from '../BlogEntry/BlogEntryInfo'

const BlogWrapper = styled.div`
  padding: 24px 0 40px;
  color: ${({ theme }) => theme.data.MD_FONT};
`

const BlogTitle = styled.h3`
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

const Blog = ({ title, html, ...otherProps }) => {
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

export default styled(Blog)``

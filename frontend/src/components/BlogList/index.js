import React from 'react'
import styled from 'styled-components'

import BlogEntry from './BlogEntry'

const BlogListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > * {
    width: calc(50% - 40px);
    margin-bottom: 40px;
  }
`

const BlogList = () => (
  <BlogListWrapper>
    <BlogEntry />
    <BlogEntry />
    <BlogEntry />
    <BlogEntry />
  </BlogListWrapper>
)

export default BlogList

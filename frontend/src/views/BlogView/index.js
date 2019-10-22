import React from 'react'
import styled from 'styled-components'
import BlogList from '../../components/BlogList'

const BlogViewWrapper = styled.div`
  padding-top: 10px;
`

const BlogView = () => (
  <BlogViewWrapper>
    <BlogList />
  </BlogViewWrapper>
)

export default BlogView

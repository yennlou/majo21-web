import React from 'react'
import styled from 'styled-components'
import Blog from '../../components/Blog'

const BlogViewWrapper = styled.div`
  padding: 60px 0px;
`

const title = 'SOME LONG TITLE'
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const BlogView = () => (
  <BlogViewWrapper>
    <Blog title={title} content={content} />
  </BlogViewWrapper>
)

export default BlogView

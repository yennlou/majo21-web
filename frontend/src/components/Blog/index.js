import React from 'react'
import styled from 'styled-components'

const BlogWrapper = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.data.BLOG_FONT}
`

const BlogTitle = styled.h3`
  font-size: 42px;
  text-align: center;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.data.BLOG_FONT};
  color: ${({ theme }) => theme.data.BG};
`

const BlogBody = styled.h3`
  font-size: 16px;
`

const Blog = ({ title, content }) => {
  return (
    <BlogWrapper>
      <BlogTitle>
        {title}
      </BlogTitle>
      <BlogBody>
        {content}
      </BlogBody>
    </BlogWrapper>
  )
}

export default Blog

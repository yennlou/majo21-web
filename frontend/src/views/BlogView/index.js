import React from 'react'
import styled from 'styled-components'
import BlogList from '../../components/BlogList'
import Pagination from '../../components/Pagination'

const BlogViewWrapper = styled.div`
  padding-top: 10px;
  position: relative;

  ${Pagination} {
    position: absolute;
    right: -54px;
    top: 16px;
  }

`

const BlogView = () => (
  <BlogViewWrapper>
    <BlogList />
    <Pagination />
  </BlogViewWrapper>
)

export default BlogView

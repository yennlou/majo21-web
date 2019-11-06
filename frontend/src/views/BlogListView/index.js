import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import BlogList from '../../components/BlogList'
import Pagination from '../../components/Pagination'

const BlogListViewWrapper = styled.div`
  padding-top: 10px;
  position: relative;

  ${Pagination} {
    position: absolute;
    right: -54px;
    top: 16px;
  }
`

const BlogListView = ({ directory }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageStart = (currentPage - 1) * 4
  const pageEnd = Math.min(pageStart + 4, directory.length)
  const blogList = directory.slice(pageStart, pageEnd)
  return (
    <BlogListViewWrapper>
      <BlogList data={blogList} />
      <Pagination size={Math.ceil(directory.length / 4)} value={currentPage} onChange={setCurrentPage} />
    </BlogListViewWrapper>
  )
}

const mapStateToProps = ({ blog: { directory } }) => ({
  directory
})

export default connect(mapStateToProps)(BlogListView)

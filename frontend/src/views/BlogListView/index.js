import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { selectBlogCollectionByQuery } from '../../redux/blog/selectors'
import { fetchCollectionStartAsync } from '../../redux/blog/actions'
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

const BlogListView = ({ collection, isFetched, fetchCollectionStartAsync }) => {
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])
  const pageStart = (currentPage - 1) * 4
  const pageEnd = Math.min(pageStart + 4, collection.length)
  const blogList = collection.slice(pageStart, pageEnd)
  return (
    <BlogListViewWrapper>
      <BlogList data={blogList} />
      <Pagination size={Math.ceil(collection.length / 4)} value={currentPage} onChange={setCurrentPage} />
    </BlogListViewWrapper>
  )
}

const mapStateToProps = (state) => ({
  isFetched: state.blog.isFetched,
  collection: selectBlogCollectionByQuery(state.config.query)(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogListView)

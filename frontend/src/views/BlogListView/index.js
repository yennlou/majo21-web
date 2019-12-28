import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { selectBlogCollectionByQuery } from '../../redux/blog/selectors'
import { fetchCollectionStartAsync } from '../../redux/blog/actions'
import BlogList from '../../components/BlogList'
import Pagination from '../../components/Pagination'

export const BlogListViewWrapper = styled.div`
  padding: 10px 0 40px;
  position: relative;
`

const BlogListView = ({ collection, isFetched, fetchCollectionStartAsync }) => {
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])
  const PageSize = 6
  const pageStart = (currentPage - 1) * PageSize
  const pageEnd = Math.min(pageStart + PageSize, collection.length)
  const blogList = collection.slice(pageStart, pageEnd)
  return (
    <BlogListViewWrapper>
      <BlogList data={blogList} />
      <Pagination size={Math.ceil(collection.length / PageSize)} value={currentPage} onChange={setCurrentPage} />
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

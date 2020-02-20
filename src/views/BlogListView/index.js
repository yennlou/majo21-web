import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import usePagination from '../../hooks/usePagination'
import { selectBlogCollectionByQuery } from '../../redux/blog/selectors'
import { fetchCollectionStartAsync } from '../../redux/blog/actions'
import BlogList from '../../components/BlogList'
import Pagination from '../../components/Pagination'

export const BlogListViewWrapper = styled.div`
  padding: 8px 0 40px;
  position: relative;
`

const BlogListView = ({ collection, isFetched, fetchCollectionStartAsync }) => {
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])
  const [currentPage, setCurrentPage, pageCount, currentItems] = usePagination(collection)
  const loadingItems = [...Array(4).keys()].map((idx) => ({ id: idx, isLoading: true }))
  const BlogListComponent = isFetched ? (<BlogList data={currentItems} />) : (<BlogList data={loadingItems} />)
  return (
    <BlogListViewWrapper>
      {BlogListComponent}
      <Pagination size={pageCount} value={currentPage} onChange={setCurrentPage} />
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

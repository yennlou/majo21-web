import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import usePagination from '../../hooks/usePagination'
import { selectBlogCollectionByQuery } from '../../redux/blog/selectors'
import { fetchCollectionStartAsync } from '../../redux/blog/actions'
import { BlogListViewWrapper, EmptyResult } from './BlogListView.styles'
import BlogList from '../../components/BlogList'
import Pagination from '../../components/Pagination'

const BlogListView = ({
  collection,
  isFetched,
  loading,
  fetchCollectionStartAsync
}) => {
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])
  const [currentPage, setCurrentPage, pageCount, currentItems] = usePagination(
    collection
  )
  const loadingItems = [...Array(4).keys()].map((idx) => ({
    id: idx,
    isLoading: true
  }))
  const BlogListComponent =
    !isFetched || loading ? (
      <BlogList data={loadingItems} />
    ) : collection.length ? (
      <BlogList data={currentItems} />
    ) : (
      <EmptyResult>Ooops! No results found.</EmptyResult>
    )
  return (
    <BlogListViewWrapper>
      {BlogListComponent}
      <Pagination
        size={pageCount}
        value={currentPage}
        onChange={setCurrentPage}
      />
    </BlogListViewWrapper>
  )
}

const mapStateToProps = (state) => ({
  loading: state.global.loading,
  isFetched: state.blog.isFetched,
  collection: selectBlogCollectionByQuery(state.global.query)(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogListView)

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import usePagination from '../../hooks/usePagination'
import { selectCollection } from '../../redux/gallery/selectors'
import { fetchCollectionStartAsync } from '../../redux/gallery/actions'
import Gallery from '../../components/Gallery'
import Pagination from '../../components/Pagination'

export const GalleryViewWrapper = styled.div`
  padding: 10px 0 20px;
`

const GalleryView = ({ collection, isFetched, fetchCollectionStartAsync }) => {
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])
  const [currentPage, setCurrentPage, pageCount, currentItems] = usePagination(collection, 12)

  return (
    <GalleryViewWrapper>
      <Gallery data={currentItems} />
      <Pagination size={pageCount} value={currentPage} onChange={setCurrentPage} />
    </GalleryViewWrapper>
  )
}

const mapStateToProps = (state) => ({
  isFetched: state.gallery.isFetched,
  collection: selectCollection(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryView)

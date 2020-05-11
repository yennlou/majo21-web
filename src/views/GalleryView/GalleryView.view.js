import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import usePagination from '../../hooks/usePagination'
import { selectCollection } from '../../redux/gallery/selectors'
import { fetchCollectionStartAsync } from '../../redux/gallery/actions'
import { GalleryViewWrapper } from './GalleryView.styles'
import Gallery from '../../components/Gallery'
import Pagination from '../../components/Pagination'
import Loading from '../../components/Loading'

const GalleryView = ({ collection, isFetched, fetchCollectionStartAsync }) => {
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])
  const [currentPage, setCurrentPage, pageCount, currentItems] = usePagination(
    collection,
    12
  )

  return (
    <GalleryViewWrapper>
      {!isFetched && <Loading />}
      <Gallery data={currentItems} />
      <Pagination
        size={pageCount}
        value={currentPage}
        onChange={setCurrentPage}
      />
    </GalleryViewWrapper>
  )
}

const mapStateToProps = (state) => ({
  isFetched: state.gallery.isFetched,
  collection: selectCollection(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView)

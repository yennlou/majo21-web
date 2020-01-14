import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/gallery/selectors'
import Gallery from '../../components/Gallery'
import Pagination from '../../components/Pagination'

export const GalleryViewWrapper = styled.div`
  padding: 10px 0 20px;
`

const GalleryView = ({ collection }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6
  const pageStart = (currentPage - 1) * pageSize
  const pageEnd = Math.min(pageStart + pageSize, collection.length)
  const galleryData = collection.slice(pageStart, pageEnd)
  return (
    <GalleryViewWrapper>
      <Gallery data={galleryData} />
      <Pagination size={Math.ceil(collection.length / pageSize)} value={currentPage} onChange={setCurrentPage} />
    </GalleryViewWrapper>
  )
}

const mapStateToProps = (state) => ({
  collection: selectCollection(state)
})

export default connect(
  mapStateToProps
)(GalleryView)

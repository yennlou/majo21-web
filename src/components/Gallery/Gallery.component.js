import React from 'react'
import GalleryEntry from '../GalleryEntry'
import { GalleryWrapper } from './Gallery.styles'

const Gallery = ({ data }) => (
  <GalleryWrapper>
    {data.map((entryData) => (
      <GalleryEntry key={entryData.id} data={entryData} />
    ))}
  </GalleryWrapper>
)

export default Gallery

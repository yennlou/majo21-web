import React from 'react'
import styled from 'styled-components'
import Entry from './Entry'

export const GalleryWrapper = styled.div`
  column-count: 3;
  column-gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 1270px) {
    column-count: 2;
  }

  @media (max-width: 520px) {
    column-count: 1;
  }

  > * {
    width: 100%;
    margin-bottom: 20px;
    break-inside: avoid;
  }
`

const Gallery = ({ data }) => (
  <GalleryWrapper>
    {
      (data.map((entryData) => (
        <Entry
          key={entryData.id}
          data={entryData}
        />
      )))
    }
  </GalleryWrapper>
)

export default Gallery

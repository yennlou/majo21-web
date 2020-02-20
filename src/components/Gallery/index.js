import React from 'react'
import styled from 'styled-components'
import Entry from './Entry'

export const GalleryWrapper = styled.div`
  column-count: 3;
  column-gap: 24px;
  margin-bottom: 32px;
  margin-top: -10px;

  @media (max-width: 1270px) {
    column-count: 2;
  }

  @media (max-width: 520px) {
    column-count: 1;
    margin-bottom: 12px;
  }

  > * {
    width: 100%;
    margin-bottom: 8px;
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

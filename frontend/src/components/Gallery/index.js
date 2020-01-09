import React from 'react'
import styled from 'styled-components'
import Entry from './Entry'

export const GalleryWrapper = styled.div`
  width: calc(100% - 10px);
  column-count: 3;
  column-gap: 24px;

  @media (max-width: 1290px) {
    column-count: 2;
  }

  @media (max-width: 870px) {
    column-count: 1;
  }

  > * {
    width: 100%;
    margin-bottom: 40px;
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

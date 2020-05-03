import React, { useState } from 'react'
import Icon from '../Icon'
import {
  GalleryEntryItem,
  GalleryEntryWrapper,
  Placeholder,
  GalleryEntryDescription,
  GalleryEntryImage
} from './GalleryEntry.styles'

const GalleryEntry = ({ data: { imageUrl, thumbnailUrl, description } }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  return (
    <GalleryEntryItem>
      <GalleryEntryWrapper>
        {showPlaceholder && (
          <Placeholder>
            <Icon name='image' />
          </Placeholder>
        )}
        <GalleryEntryImage
          showPlaceholder={showPlaceholder}
          src={thumbnailUrl}
          srcSet={`${imageUrl} 1024w, ${thumbnailUrl} 320w`}
          sizes='(min-width: 620px) 1024px, 320px'
          alt=''
          onLoad={() => setShowPlaceholder(false)}
        />
        <GalleryEntryDescription>{description}</GalleryEntryDescription>
      </GalleryEntryWrapper>
    </GalleryEntryItem>
  )
}

export default GalleryEntry

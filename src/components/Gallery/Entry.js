import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Icon from '../Icon'

const EntryWrapper = styled.div`
  color: ${({ theme }) => theme.data.BLOG_FONT};
  position: relative;
  background: white;
  padding: 10px 10px 12px;

  img {
    margin-bottom: 4px;
  }
`
const Placeholder = styled.div`
  width: 100%;
  padding: 25%;
  background-color: ${({ theme }) => theme.data.BG};
  color: ${({ theme }) => theme.data.BLOG_FONT}33;
  font-size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EntryImage = styled.img`
  height: auto;
  width: 100%;
  ${
    ({ showPlaceholder }) => showPlaceholder && css`
      height: 0;
    `
  }
`

const Entry = ({ data: { imageUrl, thumbnailUrl, description } }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  return (
    <EntryWrapper>
      {showPlaceholder &&
        (<Placeholder><Icon name='image' /></Placeholder>)}
      <EntryImage
        showPlaceholder={showPlaceholder}
        src={thumbnailUrl}
        srcSet={`${imageUrl} 1024w, ${thumbnailUrl} 320w`}
        sizes='(min-width: 620px) 1024px, 320px'
        alt=''
        onLoad={() => setShowPlaceholder(false)}
      />
      <div>{description}</div>
    </EntryWrapper>
  )
}

export default styled(Entry)``

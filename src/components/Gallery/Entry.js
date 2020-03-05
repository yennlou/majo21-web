import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Icon from '../Icon'

const EntryItem = styled.div`
  padding: 10px 0px;
`

const EntryWrapper = styled.div`
  color: ${({ theme }) => theme.data.BLOG_FONT};
  position: relative;
  font-size: 14px;
  box-shadow: 1px 1px 6px rgba(199, 74, 106, .5);
  border-radius: 4px;
  overflow: hidden;
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

const EntryDescription = styled.div`
  padding: 10px 14px 14px;
  color: white;
  font-weight: 300;
  font-family: "Helvetica Neue", Helvetica, Tahoma, "Arial";
  background: rgb(24, 27, 44);
  background: linear-gradient(120deg, rgba(199, 74, 106, 1), rgba(24, 27, 44, .9));
  width: 100%;
  margin-top: -4px;
`

const Entry = ({ data: { imageUrl, thumbnailUrl, description } }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  return (
    <EntryItem>
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
        <EntryDescription>{description}</EntryDescription>
      </EntryWrapper>
    </EntryItem>
  )
}

export default styled(Entry)``

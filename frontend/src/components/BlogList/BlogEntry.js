import React from 'react'
import styled from 'styled-components'

const Delimiter = styled(({ className }) => (
  <svg
    width='100%'
    height='12'
    className={className}
  >
    <defs>
      <pattern id='sawPattern' width='24' height='12' patternUnits='userSpaceOnUse'>
        <path d='M 0 0 L 12 12 L 24 0 Z' />
      </pattern>
    </defs>
    <rect width='100%' height='12' fill='url(#sawPattern)' />
  </svg>
))``

const EntryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 300px;
  border: 2px solid ${({ theme }) => theme.data.BLOG_BORDER};
  color: ${({ theme }) => theme.data.BLOG_FONT};

  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    bottom: -18px;
    right: -18px;
    border: 2px solid ${({ theme }) => theme.data.BLOG_BORDER}60; 
  }

  ${Delimiter} {
    fill: ${({ theme }) => theme.data.BLOG_FONT};
  }
`

const EntryTitle = styled.h3`
  font-size: 36px;
  padding: 24px;
  padding-bottom: 14px;
  color: ${({ theme }) => theme.data.BG};
  background-color: ${({ theme }) => theme.data.BLOG_FONT};
`

const EntryBody = styled.div`
  font-size: 18px;
  padding: 20px 50px;
`

const BlogEntry = () => (
  <EntryWrapper>
    <EntryTitle>
      SOME TITLE LALALALALALALA
    </EntryTitle>
    <Delimiter />
    <EntryBody>Lorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem </EntryBody>
  </EntryWrapper>
)

export default BlogEntry

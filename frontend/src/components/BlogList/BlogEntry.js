import React from 'react'
import styled from 'styled-components'

const EntryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 300px;
  border: 4px solid ${({ theme }) => theme.data.BLOG_BORDER};
  color: ${({ theme }) => theme.data.BLOG_FONT};

  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    bottom: -18px;
    right: -18px;
    border: 4px solid ${({ theme }) => theme.data.BLOG_BORDER}60; 
    /* border: 4px solid ${({ theme }) => theme.data.SIDEBAR_FONT};  */
  }
`

const EntryTitle = styled.h3`
  font-size: 36px;
  padding: 24px;
  color: ${({ theme }) => theme.data.BG};
  background-color: ${({ theme }) => theme.data.BLOG_FONT};
`

const EntryBody = styled.div`
  font-size: 18px;
  padding: 20px 50px;
`

const BlogEntry = () => (
  <EntryWrapper>
    <EntryTitle>SOME TITLE LALALALALALALA</EntryTitle>
    <EntryBody>Lorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem </EntryBody>
  </EntryWrapper>
)

export default BlogEntry

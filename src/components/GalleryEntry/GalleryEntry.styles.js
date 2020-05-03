import styled, { css } from 'styled-components'

export const GalleryEntryItem = styled.div`
  padding: 10px 0px;
`

export const GalleryEntryWrapper = styled.div`
  color: ${({ theme }) => theme.data.BLOG_FONT};
  position: relative;
  font-size: 14px;
  box-shadow: 1px 1px 6px rgba(199, 74, 106, 0.5);
  border-radius: 4px;
  overflow: hidden;
`
export const Placeholder = styled.div`
  width: 100%;
  padding: 25%;
  background-color: ${({ theme }) => theme.data.BG};
  color: ${({ theme }) => theme.data.BLOG_FONT}33;
  font-size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GalleryEntryImage = styled.img`
  height: auto;
  width: 100%;
  ${({ showPlaceholder }) =>
    showPlaceholder &&
    css`
      height: 0;
    `}
`

export const GalleryEntryDescription = styled.div`
  padding: 10px 14px 14px;
  color: white;
  font-weight: 300;
  font-family: 'Helvetica Neue', Helvetica, Tahoma, 'Arial';
  background: rgb(24, 27, 44);
  background: linear-gradient(
    120deg,
    rgba(199, 74, 106, 1),
    rgba(24, 27, 44, 0.9)
  );
  width: 100%;
  margin-top: -4px;
`

import React from 'react'
import styled from 'styled-components'

export const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: ${({ theme, active }) => active ? theme.data.BG : theme.data.PAGINATION};
  background: ${({ theme, active }) => active ? theme.data.PAGINATION : theme.data.BG};
  z-index: ${({ active }) => active ? 1 : 0};
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
`

const IndexItem = ({ children, ...otherProps }) => (
  <IndexWrapper {...otherProps}>
    {children}
  </IndexWrapper>
)

const PaginationWrapper = styled.div`
  display: flex;
  position: fixed;
  right: 20px;
  top: 116px;
  flex-direction: column;
  @media(max-width: 1290px) {
    right: 12px;
  }
  @media(max-width: 940px) {
    position: relative;
    right: 0;
    top: 0;
    flex-direction: row;
    ${IndexWrapper} {
      margin-bottom: 0px;
      margin-right: 20px;
    }
  }
`

const Pagination = ({ className, size = 1, value = 1, onChange }) => {
  return (
    <PaginationWrapper className={className}>
      {[...Array(size).keys()].map(idx =>
        (
          <IndexItem
            key={idx}
            active={idx + 1 === value}
            onClick={() => { onChange(idx + 1) }}
          >
            {String(idx + 1).padStart(2, '0')}
          </IndexItem>
        )
      )}
    </PaginationWrapper>
  )
}

export default Pagination

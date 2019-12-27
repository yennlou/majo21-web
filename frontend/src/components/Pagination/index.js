import React from 'react'
import styled from 'styled-components'

const IndexWrapper = styled.div`
  width: 30px;
  height: 30px;
  color: ${({ theme, active }) => active ? theme.data.BG : theme.data.PAGINATION};
  background: ${({ theme, active }) => active ? theme.data.PAGINATION : theme.data.BG};
  z-index: ${({ active }) => active ? 1 : 0};
  font-size: 14px;
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 116px;
  @media(max-width: 1290px) {
      right: 10px;
    }
`
const IndexText = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 6px;
`

const IndexItem = ({ children, ...otherProps }) => (
  <IndexWrapper {...otherProps}>
    <IndexText>{children}</IndexText>
  </IndexWrapper>
)

const PaginationWrapper = styled.div``

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

export default styled(Pagination)``

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
`
const IndexText = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 6px;
`

const IndexItem = ({ children, active }) => (
  <IndexWrapper active={active}>
    <IndexText>{children}</IndexText>
  </IndexWrapper>
)

const PaginationWrapper = styled.div``

const Pagination = ({ className }) => {
  return (
    <PaginationWrapper className={className}>
      <IndexItem>01</IndexItem>
      <IndexItem>02</IndexItem>
      <IndexItem active>03</IndexItem>
      <IndexItem>04</IndexItem>
      <IndexItem>05</IndexItem>
      <IndexItem>06</IndexItem>
      <IndexItem>07</IndexItem>
    </PaginationWrapper>
  )
}

export default styled(Pagination)``

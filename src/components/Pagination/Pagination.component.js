import React from 'react'
import { IndexWrapper, PaginationWrapper } from './Pagination.styles'

const IndexItem = ({ children, ...otherProps }) => (
  <IndexWrapper {...otherProps}>{children}</IndexWrapper>
)

const Pagination = ({ className, size = 1, value = 1, onChange }) => {
  return (
    <PaginationWrapper className={className}>
      {[...Array(size).keys()].map((idx) => (
        <IndexItem
          key={idx}
          active={idx + 1 === value}
          onClick={() => {
            onChange(idx + 1)
          }}
        >
          {String(idx + 1).padStart(2, '0')}
        </IndexItem>
      ))}
    </PaginationWrapper>
  )
}

export default Pagination

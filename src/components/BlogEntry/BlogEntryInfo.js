import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

export const BlogEntryInfoWrapper = styled.div`
  font-size: 14px;
  display: flex;
  > span {
    margin-right: 16px;
  }

  svg {
    margin-right: 6px;
  }
`

const BlogEntryInfo = ({ createdAt, readingTime }) => (
  <BlogEntryInfoWrapper>
    <span>
      <Icon name='calendar' />
      {createdAt && createdAt.split(' ')[0]}
    </span>
    <span>
      <Icon name='stopwatch' />
      {readingTime}
    </span>
  </BlogEntryInfoWrapper>
)

export default BlogEntryInfo

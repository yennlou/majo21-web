import React from 'react'
import styled from 'styled-components'

import BlogEntry from './BlogEntry'

const BlogListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > * {
    width: calc(50% - 40px);
    margin-bottom: 40px;
    margin-right: 16px;
  }
`

const BlogList = ({ data }) => (
  <BlogListWrapper>
    {(data.map(({ id, ...entry }) => (<BlogEntry key={id} {...entry} />)))}
  </BlogListWrapper>
)

export default styled(BlogList)``

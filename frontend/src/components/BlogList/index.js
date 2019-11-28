import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import BlogEntry from './BlogEntry'

const BlogListWrapper = styled.div`
  width: calc(100% - 10px);
  column-count: 2;
  column-gap: 46px;

  > * {
    width: 100%;
    margin-bottom: 40px;
    break-inside: avoid;
  }
`

const BlogList = ({ data, history }) => (
  <BlogListWrapper>
    {
      (data.map((props) =>
        <BlogEntry
          key={props.id}
          {...props}
        />))
    }
  </BlogListWrapper>
)

export default styled(withRouter(BlogList))``

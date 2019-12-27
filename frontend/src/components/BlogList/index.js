import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

import BlogEntry from '../BlogEntry'

const BlogListWrapper = styled.div`
  width: calc(100% - 10px);

  .mansory-grid {
    display: flex;
    margin-left: -50px;
    
  } 

  .mansory-column {
    padding-left: 50px;
    & > div {
      width: auto;
      margin-bottom: 44px;
    }
  }
`

const BlogList = ({ data, history }) => (
  <BlogListWrapper>
    <Masonry
      breakpointCols={{
        default: 2,
        1200: 1,
        1800: 2,
        2200: 3,
        2600: 4
      }}
      className='mansory-grid'
      columnClassName='mansory-column'
    >
      {
        (data.map((props) =>
          <BlogEntry
            key={props.id}
            {...props}
          />))
      }
    </Masonry>

  </BlogListWrapper>
)

export default styled(withRouter(BlogList))``

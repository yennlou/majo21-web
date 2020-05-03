import React from 'react'
import Masonry from 'react-masonry-css'

import BlogEntry from '../BlogEntry'
import { BlogListWrapper } from './BlogList.styles'

const BlogList = ({ data }) => (
  <BlogListWrapper>
    <Masonry
      breakpointCols={{
        default: 2,
        1240: 1,
        1800: 2,
        2200: 3,
        2600: 4
      }}
      className='mansory-grid'
      columnClassName='mansory-column'
    >
      {data.map((props) => (
        <BlogEntry key={props.id} {...props} />
      ))}
    </Masonry>
  </BlogListWrapper>
)

export default BlogList

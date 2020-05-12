import React from 'react'
import Masonry from 'react-masonry-css'

import BlogEntryLoading from '../BlogEntryLoading'
import { BlogListWrapper } from '../BlogList'

const BlogLoadingList = () => (
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
      {[...Array(4).keys()].map((props) => (
        <BlogEntryLoading key={props.id} {...props} />
      ))}
    </Masonry>
  </BlogListWrapper>
)

export default BlogLoadingList

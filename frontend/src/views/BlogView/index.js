import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Blog from '../../components/Blog'
import { selectBlog } from '../../redux/blog/selectors'

import { fetchCollectionStartAsync } from '../../redux/blog/actions'
const BlogViewWrapper = styled.div``

const BlogView = ({ blog, fetchCollectionStartAsync }) => {
  useEffect(fetchCollectionStartAsync, [])
  return (
    <BlogViewWrapper>
      <Blog {...blog} />
    </BlogViewWrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return (
    {
      blog: selectBlog(ownProps.match.params.blogId)(state)
    }
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogView)

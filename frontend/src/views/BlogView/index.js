import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Blog from '../../components/Blog'
import { selectBlog } from '../../redux/blog/selectors'

import { fetchCollectionStartAsync } from '../../redux/blog/actions'
const BlogViewWrapper = styled.div`
  padding: 40px 0 0 0;
`

const BackLink = styled.a`
  font-size: 16px;
  background-color: ${({ theme }) => theme.data.BG};
  color: ${({ theme }) => theme.data.BLOG_FONT};
  padding: 4px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.data.BLOG_FONT};
    color: ${({ theme }) => theme.data.BG};    
  }
`

const BlogView = ({ blog, isFetched, fetchCollectionStartAsync, history }) => {
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])
  return (
    <BlogViewWrapper>
      <BackLink onClick={() => history.push('/')}>
        &lt; Back
      </BackLink>
      <Blog {...blog} />
    </BlogViewWrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return (
    {
      isFetched: state.blog.isFetched,
      blog: selectBlog(ownProps.match.params.blogId)(state)
    }
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogView)

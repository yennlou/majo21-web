import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import BaseLink from '../../components/BaseLink'
import Blog from '../../components/Blog'
import { selectBlog } from '../../redux/blog/selectors'

import { fetchCollectionStartAsync } from '../../redux/blog/actions'
export const BlogViewWrapper = styled.div`
  padding: 40px 0 0 0;
`

const BackLink = withTheme(({ children, theme, ...otherProps }) => (
  <BaseLink {...otherProps} color={theme.data.BLOG_FONT} bgColor={theme.data.BG}>{children}</BaseLink>
))

const BlogView = ({ blog, isFetched, fetchCollectionStartAsync, history, theme }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(BlogView))

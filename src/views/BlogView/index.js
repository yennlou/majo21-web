import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Disqus from 'disqus-react'
import BaseLink from '../../components/BaseLink'
import Loading from '../../components/Loading'
import Blog from '../../components/Blog'
import BlogPrevNext from '../../components/BlogPrevNext'
import {
  selectBlog,
  selectNextBlog,
  selectPrevBlog
} from '../../redux/blog/selectors'

import { fetchCollectionStartAsync } from '../../redux/blog/actions'

export const BlogViewWrapper = styled.div`
  padding: 40px 0 10px 0;
`

const BackLink = ({ children, theme, ...otherProps }) => (
  <BaseLink {...otherProps} color='var(--blog-font)' bgColor='var(--bg)'>
    {children}
  </BaseLink>
)

const BlogView = ({
  blog,
  prevBlog,
  nextBlog,
  isFetched,
  fetchCollectionStartAsync
}) => {
  const history = useHistory()

  useEffect(() => {
    if (!isFetched) {
      fetchCollectionStartAsync()
    } else if (!blog) {
      history.push('/')
    }
  }, [isFetched])

  const disqusShortname = 'majo21'
  const disqusConfig = {
    url: window.location.href,
    identifier: blog && blog.id,
    title: blog && blog.title
  }
  return (
    <BlogViewWrapper>
      {!isFetched && <Loading />}
      <BackLink onClick={() => history.push('/')}>&lt; Back</BackLink>
      <Blog {...blog} />
      <BlogPrevNext prevBlog={prevBlog} nextBlog={nextBlog} />
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </BlogViewWrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  const blogId = ownProps.match.params.blogId
  return {
    isFetched: state.blog.isFetched,
    blog: selectBlog(blogId)(state),
    prevBlog: selectPrevBlog(blogId)(state),
    nextBlog: selectNextBlog(blogId)(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogView)

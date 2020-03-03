import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import Disqus from 'disqus-react'
import BaseLink from '../../components/BaseLink'
import Blog from '../../components/Blog'
import { selectBlog, selectNextBlog, selectPrevBlog } from '../../redux/blog/selectors'

import { fetchCollectionStartAsync } from '../../redux/blog/actions'
export const BlogViewWrapper = styled.div`
  padding: 40px 0 10px 0;
`

const BackLink = withTheme(({ children, theme, ...otherProps }) => (
  <BaseLink {...otherProps} color={theme.data.BLOG_FONT} bgColor={theme.data.BG}>{children}</BaseLink>
))

const PrevNextSection = ({ prevBlog, nextBlog }) => {
  const SectionWrapper = styled.div`
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.6;
    color: ${({ theme }) => theme.data.BLOG_FONT}
  `
  const Link = styled(BaseLink)`
    text-decoration: underline;
    padding: 2px;
    &:hover{text-decoration: none}
  `
  const history = useHistory()
  return (
    <SectionWrapper>
      {
        (prevBlog &&
          (
            <div>
              Prev:&nbsp;
              <Link onClick={() => { history.push(`/articles/${prevBlog.id}`) }}>{prevBlog.title}</Link>
            </div>
          )
        ) || (<div>&nbsp;</div>)
      }
      {
        (nextBlog &&
          (
            <div>
              Next:&nbsp;
              <Link onClick={() => { history.push(`/articles/${nextBlog.id}`) }}>{nextBlog.title}</Link>
            </div>
          )
        ) || (<div>&nbsp;</div>)
      }
    </SectionWrapper>
  )
}

const BlogView = ({ blog, prevBlog, nextBlog, isFetched, fetchCollectionStartAsync, theme }) => {
  const history = useHistory()
  useEffect(() => {
    if (isFetched) return
    fetchCollectionStartAsync()
  }, [])

  const disqusShortname = 'majo21'
  const disqusConfig = {
    url: window.location.href,
    identifier: blog && blog.id,
    title: blog && blog.title
  }
  return (
    <BlogViewWrapper>

      <BackLink onClick={() => history.push('/')}>&lt; Back</BackLink>
      <Blog {...blog} />
      <PrevNextSection prevBlog={prevBlog} nextBlog={nextBlog} />
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />

    </BlogViewWrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  const blogId = ownProps.match.params.blogId
  return (
    {
      isFetched: state.blog.isFetched,
      blog: selectBlog(blogId)(state),
      prevBlog: selectPrevBlog(blogId)(state),
      nextBlog: selectNextBlog(blogId)(state)
    }
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(BlogView))

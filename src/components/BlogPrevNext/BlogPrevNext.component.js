import React from 'react'
import { useHistory } from 'react-router-dom'
import { BlogPrevNextWrapper, BlogPrevNextLink } from './BlogPrevNext.styles'

const PrevNextSection = ({ prevBlog, nextBlog }) => {
  const history = useHistory()
  return (
    <BlogPrevNextWrapper>
      {(prevBlog && (
        <div>
          Prev:&nbsp;
          <BlogPrevNextLink
            onClick={() => {
              history.push(`/articles/${prevBlog.id}`)
            }}
          >
            {prevBlog.title}
          </BlogPrevNextLink>
        </div>
      )) || <div>&nbsp;</div>}
      {(nextBlog && (
        <div>
          Next:&nbsp;
          <BlogPrevNextLink
            onClick={() => {
              history.push(`/articles/${nextBlog.id}`)
            }}
          >
            {nextBlog.title}
          </BlogPrevNextLink>
        </div>
      )) || <div>&nbsp;</div>}
    </BlogPrevNextWrapper>
  )
}

export default PrevNextSection

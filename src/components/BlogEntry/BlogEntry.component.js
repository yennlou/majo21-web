import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import BlogInfo from '../BlogInfo'
import Delimiter from '../Delimiter'
import {
  BlogEntryWrapper,
  BlogEntryHeader,
  BlogEntryTitle,
  BlogEntryBody
} from './BlogEntry.styles'

const BlogEntry = ({ title, id, description, toc, history, ...otherProps }) => (
  <BlogEntryWrapper {...otherProps}>
    <BlogEntryHeader
      onClick={() => {
        history.push(`/articles/${id}`)
      }}
    >
      <BlogEntryTitle>{title}</BlogEntryTitle>
      <BlogInfo {...otherProps} />
    </BlogEntryHeader>
    <Delimiter />
    <BlogEntryBody>
      <ul>
        {toc.map((header) => {
          if (!Array.isArray(header)) {
            return (
              <li key={header.id}>
                <Link to={`/articles/${id}#${header.id}`}>
                  {header.content}
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </BlogEntryBody>
  </BlogEntryWrapper>
)

export default withRouter(BlogEntry)

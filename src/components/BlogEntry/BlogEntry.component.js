import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import BlogInfo from '../BlogInfo'
import Delimiter from '../Delimiter'
import {
  BlogEntryWrapper,
  EntryHeader,
  EntryTitle,
  EntryBody,
  EntryLoadingWrapper
} from './BlogEntry.styles'

const BlogEntryLoading = ({ isLoading, ...otherProps }) => (
  <EntryLoadingWrapper {...otherProps}>
    <EntryHeader>
      <EntryTitle>██████████████</EntryTitle>
      <BlogInfo createdAt='█████████' readingTime='███████' />
    </EntryHeader>
    <Delimiter />
    <EntryBody>
      <ul>
        <li>
          <a>███████████</a>
        </li>
        <li>
          <a>████████████████████████</a>
        </li>
        <li>
          <a>██████████████████</a>
        </li>
      </ul>
    </EntryBody>
  </EntryLoadingWrapper>
)

const BlogEntry = ({
  title,
  id,
  description,
  toc,
  history,
  isLoading,
  ...otherProps
}) => {
  if (isLoading) {
    return <BlogEntryLoading />
  }
  return (
    <BlogEntryWrapper {...otherProps}>
      <EntryHeader
        onClick={() => {
          history.push(`/articles/${id}`)
        }}
      >
        <EntryTitle>{title}</EntryTitle>
        <BlogInfo {...otherProps} />
      </EntryHeader>
      <Delimiter />
      <EntryBody>
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
      </EntryBody>
    </BlogEntryWrapper>
  )
}

export default withRouter(BlogEntry)

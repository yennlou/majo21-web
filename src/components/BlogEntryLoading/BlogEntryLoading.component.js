import React from 'react'
import { BlogEntryLoadingWrapper } from './BlogEntryLoading.styles'
import { BlogEntryHeader, BlogEntryTitle, BlogEntryBody } from '../BlogEntry'
import BlogInfo from '../BlogInfo'
import Delimiter from '../Delimiter'

const BlogEntryLoading = () => (
  <BlogEntryLoadingWrapper>
    <BlogEntryHeader>
      <BlogEntryTitle>██████████████</BlogEntryTitle>
      <BlogInfo createdAt='█████████' readingTime='███████' />
    </BlogEntryHeader>
    <Delimiter />
    <BlogEntryBody>
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
    </BlogEntryBody>
  </BlogEntryLoadingWrapper>
)

export default BlogEntryLoading

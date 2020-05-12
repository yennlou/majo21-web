import styled from 'styled-components'
import { BlogEntryWrapper, BlogEntryHeader, BlogEntryTitle } from '../BlogEntry'
import { BlogInfoWrapper } from '../BlogInfo'

export const BlogEntryLoadingWrapper = styled(BlogEntryWrapper)`
  opacity: 0.4;
  ${BlogEntryHeader}, a {
    pointer-events: none;
  }

  ${BlogEntryTitle}, ${BlogInfoWrapper}, li {
    opacity: 0.8;
    overflow: hidden;
  }
`

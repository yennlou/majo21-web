import React from 'react'
import styled, { css } from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

import BlogEntryInfo, { BlogEntryInfoWrapper } from './BlogEntryInfo'

const Delimiter = styled(({ className }) => (
  <svg
    width='100%'
    height='12'
    className={className}
  >
    <defs>
      <pattern id='sawPattern' width='24' height='12' patternUnits='userSpaceOnUse'>
        <path d='M 0 0 L 12 12 L 24 0 Z' />
      </pattern>
    </defs>
    <rect width='100%' height='12' fill='url(#sawPattern)' />
  </svg>
))``

export const BlogEntryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid ${({ theme }) => theme.data.BLOG_BORDER};
  color: ${({ theme }) => theme.data.BLOG_FONT};

  ${props => props.isLoading && css`
    opacity: 0.3;
  `}

  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    bottom: -18px;
    right: -18px;
    border: 2px solid ${({ theme }) => theme.data.BLOG_BORDER}60; 
  }

  ${Delimiter} {
    fill: ${({ theme }) => theme.data.BLOG_FONT};
    height: 20px;
  }
`

const EntryHeader = styled.div`
  font-size: 36px;
  padding: 24px;
  padding-bottom: 14px;
  color: ${({ theme }) => theme.data.BG};
  background-color: ${({ theme }) => theme.data.BLOG_FONT};
  text-transform: uppercase;
  cursor: pointer;
`

const EntryTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 20px;
`

const EntryBody = styled.div`
  font-size: 18px;
  padding: 10px 50px 40px 50px;
  line-height: 1.6;

  ul {
    list-style-type: square;
    text-decoration: underline;
    ul {
      margin-left: 2em;
    }
  }

  a {
    cursor: pointer;
    color: ${({ theme }) => theme.data.BLOG_FONT};
    &:hover {
      background-color: ${({ theme }) => theme.data.BLOG_LINK_BG};
      color: ${({ theme }) => theme.data.BLOG_LINK};
      text-decoration: none;
    }
  }
`

const EntryLoadingWrapper = styled(BlogEntryWrapper)`
  opacity: .4;
  ${EntryHeader}, a {
    pointer-events: none;
  }

  ${EntryTitle}, ${BlogEntryInfoWrapper}, li {
    opacity: .8;
    overflow: hidden;
  }
`

const BlogEntryLoading = ({ isLoading, ...otherProps }) => (
  <EntryLoadingWrapper {...otherProps}>
    <EntryHeader>
      <EntryTitle>██████████████</EntryTitle>
      <BlogEntryInfo createdAt='█████████' readingTime='███████' />
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

const BlogEntry = ({ title, id, description, toc, history, isLoading, ...otherProps }) => {
  if (isLoading) {
    return (<BlogEntryLoading />)
  }
  return (
    <BlogEntryWrapper {...otherProps}>
      <EntryHeader onClick={() => { history.push(`/articles/${id}`) }}>
        <EntryTitle>{title}</EntryTitle>
        <BlogEntryInfo {...otherProps} />
      </EntryHeader>
      <Delimiter />
      <EntryBody>
        <ul>
          {
            toc.map(header => {
              if (!Array.isArray(header)) {
                return (
                  <li key={header.id}>
                    <Link to={`/articles/${id}#${header.id}`}>{header.content}</Link>
                  </li>
                )
              }
            })
          }
        </ul>
      </EntryBody>
    </BlogEntryWrapper>
  )
}

export default withRouter(BlogEntry)

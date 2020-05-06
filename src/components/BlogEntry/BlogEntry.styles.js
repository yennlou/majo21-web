import React from 'react'
import styled, { css } from 'styled-components'
import { BlogInfoWrapper } from '../BlogInfo'

export const Delimiter = styled(({ className }) => (
  <svg width='100%' height='12' className={className}>
    <defs>
      <pattern
        id='sawPattern'
        width='24'
        height='12'
        patternUnits='userSpaceOnUse'
      >
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
  border: 2px solid var(--blog-border);
  color: var(--blog-font);

  ${(props) =>
    props.isLoading &&
    css`
      opacity: 0.3;
    `}

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    bottom: -18px;
    right: -18px;
    border: 2px solid var(--blog-border-shadow);
  }

  ${Delimiter} {
    fill: var(--blog-font);
    height: 20px;
  }
`

export const EntryHeader = styled.div`
  font-size: 36px;
  padding: 24px;
  padding-bottom: 14px;
  color: var(--bg);
  background-color: var(--blog-font);
  text-transform: uppercase;
  cursor: pointer;
`

export const EntryTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 20px;
`

export const EntryBody = styled.div`
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
    color: var(--blog-font);
    &:hover {
      background-color: var(--blog-link-bg);
      color: var(--blog-link);
      text-decoration: none;
    }
  }
`

export const EntryLoadingWrapper = styled(BlogEntryWrapper)`
  opacity: 0.4;
  ${EntryHeader}, a {
    pointer-events: none;
  }

  ${EntryTitle}, ${BlogInfoWrapper}, li {
    opacity: 0.8;
    overflow: hidden;
  }
`

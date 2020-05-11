import styled from 'styled-components'
import BaseLink from '../BaseLink'

export const BlogPrevNextWrapper = styled.div`
  margin-bottom: 20px;
  font-weight: 600;
  line-height: 1.6;
  color: var(--blog-font);
`
export const BlogPrevNextLink = styled(BaseLink)`
  text-decoration: underline;
  padding: 2px;
  &:hover {
    text-decoration: none;
  }
`

import mdTheme from './md-themes/turing'
import styled from 'styled-components'

export const BlogWrapper = styled.div`
  padding: 24px 0 24px;
  color: var(--blog-font);
`

export const BlogTitle = styled.h3`
  font-size: 42px;
  text-align: center;
  margin-bottom: 40px;
  background-color: var(--blog-font);
  color: var(--bg);
`

export const BlogBody = styled.div`
  ${mdTheme}
  font-size: 16px;
  margin-bottom: 30px;
`

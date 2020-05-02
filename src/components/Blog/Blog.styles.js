import mdTheme from './md-themes/turing'
import styled from 'styled-components'

export const BlogWrapper = styled.div`
  padding: 24px 0 24px;
  color: ${({ theme }) => theme.data.BLOG_FONT};
`

export const BlogTitle = styled.h3`
  font-size: 42px;
  text-align: center;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.data.BLOG_FONT};
  color: ${({ theme }) => theme.data.BG};
`

export const BlogBody = styled.div`
  ${mdTheme}
  font-size: 16px;
  margin-bottom: 30px;
`

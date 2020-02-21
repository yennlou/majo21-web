import styled from 'styled-components'

const BaseLink = styled.a`
  color: ${props => props.color || props.theme.data.BLOG_FONT};
  background-color: ${props => props.bgColor || props.theme.data.BG};
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.color || props.theme.data.BLOG_FONT};
    color: ${props => props.bgColor || props.theme.data.BG};
    position: relative;
    z-index: 100;
  }
`

export default BaseLink

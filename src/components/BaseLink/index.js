import styled from 'styled-components'

const BaseLink = styled.a`
  color: ${props => props.color || props.theme.data.BLOG_FONT};
  background-color: ${props => props.bgColor || props.theme.data.BG};
  padding: 4px;
  cursor: pointer;
  position: relative;

  &:active {
    background-color: ${props => props.color || props.theme.data.BLOG_FONT};
    color: ${props => props.bgColor || props.theme.data.BG};
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${props => props.color || props.theme.data.BLOG_FONT};
      color: ${props => props.bgColor || props.theme.data.BG};
    } 
  }
`

export default BaseLink

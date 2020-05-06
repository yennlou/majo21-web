import styled from 'styled-components'

const BaseLink = styled.a`
  color: ${(props) => props.color || 'var(--blog-font)'};
  background-color: ${(props) => props.bgColor || 'var(--bg)'};
  padding: 4px;
  cursor: pointer;
  position: relative;

  &:active {
    background-color: ${(props) => props.color || 'var(--blog-font)'};
    color: ${(props) => props.bgColor || 'var(--bg)'};
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.color || 'var(--blog-font)'};
      color: ${(props) => props.bgColor || 'var(--bg)'};
    }
  }
`

const HyperLink = styled(BaseLink)`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

export default BaseLink
export { HyperLink }

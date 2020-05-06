import styled from 'styled-components'

const BaseTag = styled.span`
  display: inline-block;
  padding: 4px 6px;
  color: var(--search-font);
  border: 1px solid currentColor;
  margin: 0 8px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;
  &:active,
  &.selected {
    background-color: var(--search-font);
    color: var(--bg);
  }
  @media (hover: hover) {
    &:hover {
      background-color: var(--search-font);
      color: var(--bg);
    }
  }
`

export default BaseTag

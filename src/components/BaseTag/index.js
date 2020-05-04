import styled from 'styled-components'

const BaseTag = styled.span`
  display: inline-block;
  padding: 4px 6px;
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  border: 1px solid currentColor;
  margin: 0 8px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;
  &:active,
  &.selected {
    background-color: ${({ theme }) => theme.data.SEARCH_FONT};
    color: ${({ theme }) => theme.data.BG};
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.data.SEARCH_FONT};
      color: ${({ theme }) => theme.data.BG};
    }
  }
`

export default BaseTag

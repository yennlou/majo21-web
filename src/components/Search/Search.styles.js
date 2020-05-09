import styled from 'styled-components'
import { TextLogo } from '../Sidebar'

const SearchInput = styled.input`
  color: var(--search-font);
  padding: 6px;
  width: 100%;
  max-width: 300px;
  background: var(--search-font-shadow);
  border: none;
  outline: none;
`

export const Mask = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  background-color: var(--bg);
`

export const SearchInputTop = styled(SearchInput)`
  ::placeholder {
    color: var(--search-placeholder);
  }
`

export const SearchInputCenter = styled(SearchInput)`
  position: fixed;
  z-index: 101;
  width: unset;
  max-width: unset;
  transition: all 0.5s;
`
export const TextLogoCenter = styled(TextLogo)`
  position: fixed;
  user-select: none;
  z-index: 100;
  transition: all 0.5s;
  color: var(--sidebar-font);
  cursor: default;
`

export const SearchInputWrapper = styled.div`
  color: var(--search-font);
  &.mask-on ${Mask} {
    opacity: 1;
  }

  &.search-hide ${SearchInputTop} {
    opacity: 0;
    pointer-events: none;
  }
`

export const InputHint = styled.div`
  font-size: 14px;
  color: var(--search-font-shadow);
  margin-bottom: 20px;
`

export const CategoryContainer = styled.div`
  position: fixed;
  z-index: 99;
  left: ${({ mobile }) => (mobile ? '15%' : '25%')};
  top: calc(35% + 46px);
  width: ${({ mobile }) => (mobile ? '70%' : '50%')};
`

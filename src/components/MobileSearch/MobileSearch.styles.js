import styled from 'styled-components'
import Icon from '../Icon'

export const SearchWrapper = styled.div`
  width: 100%;
  color: var(--search-icon);
  ${Icon} {
    font-size: 28px;
    cursor: pointer;
  }

  .search-close {
    color: var(--bg);
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    opacity: 0.8;
  }

  .search-input-enter {
    width: 5%;
  }
  .search-input-enter-active {
    width: 100%;
    transition: all 0.3s;
  }
  .search-input-exit {
    display: none;
  }
`

export const SearchInput = styled.input`
  color: var(--search-font);
  padding: 10px;
  position: absolute;
  top: 9px;
  width: 100%;
  background: var(--search-bg);
  border: none;
  outline: none;
  font-size: 19px;
  letter-spacing: 1px;
`

import styled from 'styled-components'
import Icon from '../Icon'

export const SearchWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.pallete.CABARET};
  ${Icon} {
    font-size: 28px;
    cursor: pointer;
  }

  .search-close {
    color: ${({ theme }) => theme.data.BG};
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
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  padding: 10px;
  position: absolute;
  top: 9px;
  width: 100%;
  background: ${({ theme }) => theme.data.SEARCH_BG};
  border: none;
  outline: none;
  font-size: 19px;
  letter-spacing: 1px;
`

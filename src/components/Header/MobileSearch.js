import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import useSearch from '../../hooks/useSearch'
import { debounced } from '../../utils/function'
import { setQuery } from '../../redux/config/actions'
import Icon from '../Icon'

const SearchWrapper = styled.div`
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
    opacity: .8;
  }

  .search-input-enter {
    width: 5%;
  }
  .search-input-enter-active {
    width: 100%;
    transition: all .3s;
  }
  .search-input-exit {
    display: none;
  }
`

const SearchInput = styled.input`
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  padding: 10px;
  position: absolute;
  top: 9px;
  width: 100%;
  background: ${({ theme }) => theme.data.SEARCH_BG};
  border:none;
  outline: none;
  font-size: 19px;
  letter-spacing: 1px;
`
const Search = ({ query, setQuery }) => {
  const [input, handleInputChange] = useSearch(query, setQuery)
  const [searchOn, setSearchOn] = useState(false)
  const [showClose, setShowClose] = useState(false)
  const searchInputEl = useRef(null)
  const handleClickOutside = (e) => {
    if (!searchInputEl?.current?.contains(e.target)) {
      setSearchOn(false)
    }
  }
  const handleSearchToggle = (e) => {
    setSearchOn(true)
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <SearchWrapper>
      {!searchOn && (<Icon name='search' onClick={handleSearchToggle} />)}
      <CSSTransition
        in={searchOn}
        timeout={{
          enter: 300,
          exit: 0
        }}
        unmountOnExit
        classNames='search-input'
        onEntered={() => setShowClose(true)}
        onExited={() => setShowClose(false)}
      >
        <SearchInput
          type='text'
          ref={searchInputEl}
          value={input}
          onChange={handleInputChange}
        />
      </CSSTransition>
      {showClose && (<Icon name='cross' className='search-close' />)}
    </SearchWrapper>
  )
}

const mapStateToProps = ({ config: { query } }) => ({
  query
})

const mapDispatchToProps = dispatch => ({
  setQuery: (query) => dispatch(setQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

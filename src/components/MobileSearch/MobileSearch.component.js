import React, { useState, useContext, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import SearchContext from '../../contexts/search-context'
import useSearchMobile from '../../hooks/useSearchMobile'
import { setQuery, setLoading } from '../../redux/global/actions'
import { SearchWrapper, SearchInput } from './MobileSearch.styles'
import Icon from '../Icon'

const Search = ({ query, setQuery, setLoading }) => {
  const [input, handleInputChange] = useSearchMobile(
    query,
    setQuery,
    setLoading
  )
  const [showClose, setShowClose] = useState(false)
  const [searchOn, setSearchOn] = useContext(SearchContext)
  const searchInputEl = useRef(null)

  useEffect(() => {
    if (searchOn && searchInputEl) {
      searchInputEl.current.focus()
    }
  }, [searchOn])

  return (
    <SearchWrapper>
      {!searchOn && <Icon name='search' onClick={() => setSearchOn(true)} />}
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
      {showClose && (
        <Icon
          name='cross'
          className='search-close'
          onClick={() => setSearchOn(false)}
        />
      )}
    </SearchWrapper>
  )
}

const mapStateToProps = ({ global: { query } }) => ({
  query
})

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query)),
  setLoading: (loading) => dispatch(setLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

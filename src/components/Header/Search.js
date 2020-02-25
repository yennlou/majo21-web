import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import Category, { CategoryWrapper } from './Category'
import { TextLogo } from '../Sidebar'
import useSearch from '../../hooks/useSearch'
import { setQuery } from '../../redux/config/actions'

const SearchInput = styled.input`
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  padding: 6px;
  width: 100%;
  max-width: 300px;
  background: ${({ theme }) => theme.data.SEARCH_FONT}44;
  border: none;
  outline: none;
`

const Mask = styled.div`
  position: fixed;
  z-index: 90;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity .5s ease-out;
  background-color: ${({ theme }) => theme.data.BG};
`

const SearchInputTop = styled(SearchInput)``

const SearchInputCenter = styled(SearchInput)`
  position: fixed;
  z-index: 100;
  width: unset;
  max-width: unset;
  transition: all .5s;
`
const TextLogoCenter = styled(TextLogo)`
  position: fixed;
  z-index: 100;
  transition: all .5s;
`

const SearchInputWrapper = styled.div`
  &.mask-on ${Mask}{ 
    opacity: 1;
  }

  &.search-hide ${SearchInputTop} {
    opacity: 0;
    pointer-events: none;
  }

  ${CategoryWrapper} {
    position: fixed;
    z-index: 99;
    left: 25%;
    top: calc(40% + 60px);
    width: 50%;
  }
`

const Search = ({ query, setQuery }) => {
  const [input, handleInputChange] = useSearch(query, setQuery)
  const [searchOn, setSearchOn] = useState(false)
  const [maskOn, setMaskOn] = useState(false)
  const [searchHide, setSearchHide] = useState(false)
  const searchInputEl = useRef(null)
  const searchInputCenterEl = useRef(null)
  const className = classNames({
    'search-on': searchOn,
    'search-hide': searchHide,
    'mask-on': maskOn
  })

  const applyStyleOnElements = () => {
    if (!searchInputEl || !searchInputCenterEl) return
    const { top, left } = searchInputEl.current.getBoundingClientRect()
    const { offsetWidth: width, offsetHeight: height } = searchInputEl.current
    searchInputCenterEl.current.setAttribute(
      'style', `
        top: ${top}px;
        left: ${left}px;
        width: ${width}px;
        height: ${height}px;
      `
    )
  }

  const unApplyStyleOnElements = () => {
    if (!searchInputCenterEl) return
    searchInputCenterEl.current.setAttribute('style', `
        left: 25%;
        top: 40%;
        width: 50%;
        padding: 10px 6px;
      `
    )
  }

  const onEnter = () => {
    setSearchHide(true)
    setMaskOn(true)
    applyStyleOnElements()
  }

  const onExit = () => {
    setMaskOn(false)
    applyStyleOnElements()
  }

  const onExited = () => {
    setSearchHide(false)
  }

  return (
    <SearchInputWrapper className={className}>
      <SearchInputTop
        className={className}
        ref={searchInputEl}
        onFocus={() => setSearchOn(true)}
      />
      <CSSTransition
        in={searchOn}
        timeout={500}
        onEnter={onEnter}
        onEntering={unApplyStyleOnElements}
        onExit={onExit}
        onExited={onExited}
        unmountOnExit
      >
        <>
          <Mask>
            <Category />
          </Mask>
          <SearchInputCenter
            type='text'
            value={input}
            onChange={handleInputChange}
            onFocus={() => setSearchOn(false)}
            ref={searchInputCenterEl}
          />
        </>
      </CSSTransition>
    </SearchInputWrapper>
  )
}

const mapStateToProps = ({ config: { query } }) => ({
  query
})

const mapDispatchToProps = dispatch => ({
  setQuery: (query) => dispatch(setQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

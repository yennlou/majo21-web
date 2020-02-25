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
  color: ${({ theme }) => theme.data.SIDEBAR_FONT};
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
  const logoCenterEl = useRef(null)
  const className = classNames({
    'search-on': searchOn,
    'search-hide': searchHide,
    'mask-on': maskOn
  })

  const applyStyleOnElements = () => {
    if (!searchInputEl || !searchInputCenterEl) return
    const { top: stop, left: sleft } = searchInputEl.current.getBoundingClientRect()
    const { offsetWidth: swidth, offsetHeight: sheight } = searchInputEl.current
    searchInputCenterEl.current.setAttribute(
      'style', `
        top: ${stop}px;
        left: ${sleft}px;
        width: ${swidth}px;
        height: ${sheight}px;
      `
    )
    const logoEl = getLogoEl()
    if (!logoEl || !logoCenterEl) return
    const { top: ltop, left: lleft } = logoEl.getBoundingClientRect()
    const { offsetWidth: lwidth, offsetHeight: lheight } = logoEl
    logoEl.setAttribute('style', `
        opacity: 0;
      `
    )
    logoCenterEl.current.setAttribute(
      'style', `
        top: ${ltop}px;
        left: ${lleft}px;
        width: ${lwidth}px;
        height: ${lheight}px;
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
    if (!logoCenterEl) return
    logoCenterEl.current.setAttribute(
      'style', `
        left: calc(50% - 110px);
        top: calc(40% - 110px);
        font-size: 52px;
      `
    )
  }

  function getLogoEl () {
    const els = document.querySelectorAll('.logo-majo21')
    // for (const el of els) {
    //   console.log(el)
    //   if (el.offsetWidth > 0 || el.offsetHeight > 0) {
    //     return el
    //   }
    // }
    return els[0]
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
    const logoEl = getLogoEl()
    logoEl && logoEl.setAttribute('style', `
        opacity: 1;
      `
    )
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
          <TextLogoCenter ref={logoCenterEl}>MAJO21</TextLogoCenter>
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

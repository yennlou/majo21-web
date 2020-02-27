import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import styled, { withTheme } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import Category from './Category'
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
  user-select: none;
  z-index: 100;
  transition: all .5s;
  color: ${({ theme }) => theme.data.SIDEBAR_FONT};
  cursor: default;
`

const SearchInputWrapper = styled.div`
  color: ${({ theme }) => theme.data.SEARCH_FONT};
  &.mask-on ${Mask}{ 
    opacity: 1;
  }

  &.search-hide ${SearchInputTop} {
    opacity: 0;
    pointer-events: none;
  }
`

const InputHint = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.data.SEARCH_FONT}44;
  margin-bottom: 20px;
`

const CategoryContainer = styled.div`
  position: fixed;
  z-index: 99;
  left: ${({ mobile }) => mobile ? '15%' : '25%'};
  top: calc(35% + 46px);
  width: ${({ mobile }) => mobile ? '70%' : '50%'};
`

const Search = ({ query, setQuery, theme }) => {
  const [searchOn, setSearchOn] = useState(false)
  const [input, setInput, handleInputChange, handleEnterKey] = useSearch(query, setQuery, () => setSearchOn(false))
  const [maskOn, setMaskOn] = useState(false)
  const [mobileOn, setMobileOn] = useState(false)
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
    logoEl.setAttribute('style', 'opacity: 0;')
    if (isMobile()) {
      setMobileOn(true)
      logoCenterEl.current.setAttribute(
        'style', `
          top: ${ltop}px;
          left: ${lleft}px;
          width: ${lwidth}px;
          height: ${lheight}px;
          color: ${theme.data.BG};
          font-size: 42px;
          letter-spacing: 4px;
          padding: 0;
        `
      )
    } else {
      setMobileOn(false)
      logoCenterEl.current.setAttribute(
        'style', `
          top: ${ltop}px;
          left: ${lleft}px;
          width: ${lwidth}px;
          height: ${lheight}px;
        `
      )
    }
  }
  const unApplyStyleOnElements = () => {
    if (!searchInputCenterEl) return

    const width = mobileOn ? '70%' : '50%'
    searchInputCenterEl.current.setAttribute('style', `
        left: calc(50% - ${width} / 2);
        top: 35%;
        width: ${width};
        padding: 10px 6px;
      `
    )
    if (!logoCenterEl) return
    logoCenterEl.current.setAttribute(
      'style', `
        left: calc(50% - 110px);
        top: calc(35% - 110px);
        font-size: 52px;
      `
    )
  }

  function getLogoEl () {
    const els = document.querySelectorAll('.logo-majo21')
    for (const el of els) {
      if (el.offsetWidth > 0) {
        return el
      }
    }
    return els[0]
  }

  function isMobile () {
    const el = getLogoEl()
    return el.className.includes('mobile')
  }

  const onEnter = () => {
    setSearchHide(true)
    setMaskOn(true)
    applyStyleOnElements()
    searchInputCenterEl.current.focus()
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

  const handleCategoryChange = (category) => {
    if (category.series) {
      setInput(`series:${category.series}`)
    } else if (Object.keys(category.tags).length) {
      setInput(`tags:${Object.keys(category.tags).join(',')}`)
    } else {
      setInput('')
    }
    searchInputCenterEl.current.focus()
  }

  return (
    <SearchInputWrapper className={className}>
      <SearchInputTop
        className={className}
        ref={searchInputEl}
        value={input}
        onChange={() => {}}
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
            <CategoryContainer mobile={mobileOn}>
              <InputHint>* Confirm with `Enter` key.</InputHint>
              <Category
                onCategoryChange={handleCategoryChange}
              />
            </CategoryContainer>
          </Mask>
          <TextLogoCenter ref={logoCenterEl}>MAJO21</TextLogoCenter>
          <SearchInputCenter
            type='text'
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleEnterKey}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Search))

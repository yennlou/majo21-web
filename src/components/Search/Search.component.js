import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import {
  Mask,
  SearchInputTop,
  SearchInputCenter,
  TextLogoCenter,
  SearchInputWrapper,
  InputHint,
  CategoryContainer
} from './Search.styles'
import Category from '../Category'
import useSearch from '../../hooks/useSearch'
import useCategoryInput from '../../hooks/useCategoryInput'
import { setQuery } from '../../redux/global/actions'

const Search = ({ query, setQuery }) => {
  const [searchOn, setSearchOn] = useState(false)
  const [input, setInput, handleInputChange, handleEnterKey] = useSearch(
    query,
    setQuery,
    () => setSearchOn(false)
  )
  const [maskOn, setMaskOn] = useState(false)
  const [mobileOn, setMobileOn] = useState(false)
  const [searchHide, setSearchHide] = useState(false)
  const searchInputEl = useRef(null)
  const searchInputCenterEl = useRef(null)
  const logoCenterEl = useRef(null)

  const [parseInputToCategoryValue, handleCategoryChange] = useCategoryInput(
    (newInput) => {
      if (newInput !== input) setInput(newInput)
      searchInputCenterEl.current.focus()
    }
  )

  const className = classNames({
    'search-on': searchOn,
    'search-hide': searchHide,
    'mask-on': maskOn
  })

  const applyStyleOnElements = () => {
    if (!searchInputEl || !searchInputCenterEl) return
    const {
      top: stop,
      left: sleft
    } = searchInputEl.current.getBoundingClientRect()
    const { offsetWidth: swidth, offsetHeight: sheight } = searchInputEl.current
    searchInputCenterEl.current.setAttribute(
      'style',
      `
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
        'style',
        `
          top: ${ltop}px;
          left: ${lleft}px;
          width: ${lwidth}px;
          height: ${lheight}px;
          color: var(--bg);
          font-size: 42px;
          letter-spacing: 4px;
          padding: 0;
        `
      )
    } else {
      setMobileOn(false)
      logoCenterEl.current.setAttribute(
        'style',
        `
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
    searchInputCenterEl.current.setAttribute(
      'style',
      `
        left: calc(50% - ${width} / 2);
        top: 35%;
        width: ${width};
        padding: 10px 6px;
      `
    )
    if (!logoCenterEl) return
    logoCenterEl.current.setAttribute(
      'style',
      `
        left: calc(50% - 110px);
        top: calc(35% - 110px);
        font-size: 52px;
      `
    )
  }

  function getLogoEl() {
    const els = document.querySelectorAll('.logo-majo21')
    for (const el of els) {
      if (el.offsetWidth > 0) {
        return el
      }
    }
    return els[0]
  }

  function isMobile() {
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
    logoEl &&
      logoEl.setAttribute(
        'style',
        `
        opacity: 1;
      `
      )
  }

  return (
    <SearchInputWrapper className={className}>
      <SearchInputTop
        className={className}
        placeholder='Search...'
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
                value={parseInputToCategoryValue(input)}
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

const mapStateToProps = ({ global: { query } }) => ({
  query
})

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(setQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

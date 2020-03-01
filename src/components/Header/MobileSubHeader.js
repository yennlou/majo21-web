import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import SearchContext from '../../contexts/search-context'
import InputContext from '../../contexts/input-context'
import ThemeSwitcher, { ThemeSwitcherWrapper } from './ThemeSwitcher'
import Search from './MobileSearch'
import NavMenu from './NavMenu'
import Category from './Category'

export const MobileSubHeaderLayout = styled.div`
  display: none;
  width: 100%;
  height: 60px;
  position: relative;
  padding: 14px 0;
`

const SubHeaderWrapper = styled.div`

  .mobile-category-enter {
    overflow-y: scroll;
    height: 0;
  }

  .mobile-category-enter-active {
    height: auto;
  }
  
  .mobile-category-exit-active {
    height: 0;
  }
`

const HeaderLeft = styled.div`
  float: left;
`

const HeaderRight = styled.div`
  float: right;
  display: flex;
  align-items: center;

  ${ThemeSwitcherWrapper} {
    margin-left: 40px;
    margin-right: 40px;
  }
`

const Header = () => {
  const [searchOn, setSearchOn] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useContext(InputContext)
  const parseInputToCategoryValue = (input) => {
    const value = {
      series: '',
      tags: {}
    }
    if (input.startsWith('series:')) {
      value.series = input.replace('series:', '').trim()
    }
    if (input.startsWith('tags:')) {
      const tags = input.replace('tags:', '').trim().split(',')
      for (const tag of tags) {
        value.tags[tag] = true
      }
    }
    return value
  }
  const handleCategoryChange = (category) => {
    if (category.series) {
      const newInput = `series:${category.series}`
      if (input !== newInput) {
        setInput(newInput)
      }
    } else if (Object.keys(category.tags).length) {
      const newInput = `tags:${Object.keys(category.tags).join(',')}`
      if (input !== newInput) {
        setInput(newInput)
      }
    } else {
      if (input !== '') setInput('')
    }
  }
  return (
    <SearchContext.Provider value={[searchOn, setSearchOn]}>
      <SubHeaderWrapper>
        <MobileSubHeaderLayout>
          <HeaderLeft>
            <Search />
          </HeaderLeft>
          <HeaderRight>
            <ThemeSwitcher />
            <NavMenu />
          </HeaderRight>
        </MobileSubHeaderLayout>
        <CSSTransition
          in={searchOn}
          timeout={300}
          unmountOnExit
          classNames='mobile-category'
        >
          <Category
            value={parseInputToCategoryValue(input)}
            onCategoryChange={handleCategoryChange}
          />
        </CSSTransition>
      </SubHeaderWrapper>
    </SearchContext.Provider>
  )
}

export default Header

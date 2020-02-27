import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import SearchContext from '../../contexts/search-context'
import InputContext from '../../contexts/input-context'
import ThemeSwitcher, { ThemeSwitcherWrapper } from './ThemeSwitcher'
import Search from './MobileSearch'
import NavMenu from './NavMenu'
import Category, { CategorySection } from './Category'

export const MobileSubHeaderLayout = styled.div`
  display: none;
  width: 100%;
  height: 60px;
  position: relative;
  padding: 14px 0;
`

const SubHeaderWrapper = styled.div`
  ${CategorySection} {
    margin-bottom: 18px;
  }

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
  const [input, setInput] = useState('')
  const handleCategoryChange = (category) => {
    if (category.series) {
      setInput(`series:${category.series}`)
    } else if (Object.keys(category.tags).length) {
      setInput(`tags:${Object.keys(category.tags).join(',')}`)
    } else {
      setInput('')
    }
  }
  return (
    <SearchContext.Provider value={[searchOn, setSearchOn]}>
      <InputContext.Provider value={[input, setInput]}>
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
            <Category onCategoryChange={handleCategoryChange} />
          </CSSTransition>
        </SubHeaderWrapper>
      </InputContext.Provider>
    </SearchContext.Provider>
  )
}

export default Header

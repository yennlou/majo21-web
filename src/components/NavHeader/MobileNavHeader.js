import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import SearchContext from '../../contexts/search-context'
import InputContext from '../../contexts/input-context'
import useCategoryInput from '../../hooks/useCategoryInput'
import ThemeSwitcher, { ThemeSwitcherWrapper } from './ThemeSwitcher'
import Search from './MobileSearch'
import NavMenu from './NavMenu'
import Category from './Category'

export const MobileNavHeaderLayout = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  padding: 14px 0;
`

export const MobileNavHeaderWrapper = styled.div`
  .mobile-category-enter {
    height: 0;
  }

  .mobile-category-enter-active {
    height: auto;
  }
  
  .mobile-category-exit-active {
    display:none;
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
  const [parseInputToCategoryValue, handleCategoryChange] = useCategoryInput((newInput) => {
    if (newInput !== input) setInput(newInput)
  })
  return (
    <SearchContext.Provider value={[searchOn, setSearchOn]}>
      <MobileNavHeaderWrapper>
        <MobileNavHeaderLayout>
          <HeaderLeft>
            <Search />
          </HeaderLeft>
          <HeaderRight>
            <ThemeSwitcher />
            <NavMenu />
          </HeaderRight>
        </MobileNavHeaderLayout>
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
      </MobileNavHeaderWrapper>
    </SearchContext.Provider>
  )
}

export default Header

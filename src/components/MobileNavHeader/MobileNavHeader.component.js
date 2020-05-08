import React, { useState, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'

import SearchContext from '../../contexts/search-context'
import InputContext from '../../contexts/input-context'
import useCategoryInput from '../../hooks/useCategoryInput'
import ThemeSwitcher from '../ThemeSwitcher'
import MobileSearch from '../MobileSearch'
import Nav from '../Nav'
import Category from '../Category'

import {
  MobileNavHeaderWrapper,
  MobileNavHeaderLayout,
  HeaderLeft,
  HeaderRight
} from './MobileNavHeader.styles'

const Header = () => {
  const [searchOn, setSearchOn] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useContext(InputContext)
  const [parseInputToCategoryValue, handleCategoryChange] = useCategoryInput(
    (newInput) => {
      if (newInput !== input) setInput(newInput)
    }
  )
  return (
    <SearchContext.Provider value={[searchOn, setSearchOn]}>
      <MobileNavHeaderWrapper>
        <MobileNavHeaderLayout>
          <HeaderLeft>
            <MobileSearch />
          </HeaderLeft>
          <HeaderRight>
            <ThemeSwitcher />
            <Nav />
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

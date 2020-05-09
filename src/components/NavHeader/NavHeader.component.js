import React from 'react'

import {
  NavHeaderWrapper,
  NavHeaderLayout,
  NavHeaderLeft,
  NavHeaderRight
} from './NavHeader.styles'
import Search from '../Search'
import ThemeSwitcher from '../ThemeSwitcher'
import Nav from '../Nav'

const Header = () => {
  return (
    <NavHeaderWrapper>
      <NavHeaderLayout>
        <NavHeaderLeft>
          <Search />
        </NavHeaderLeft>
        <NavHeaderRight>
          <ThemeSwitcher />
          <Nav />
        </NavHeaderRight>
      </NavHeaderLayout>
    </NavHeaderWrapper>
  )
}

export default Header

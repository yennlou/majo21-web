import React from 'react'
import styled from 'styled-components'

import Search from './Search'
import ThemeSwitcher from './ThemeSwitcher'
import NavMenu from './NavMenu'

const HeaderLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
`

const HeaderLeft = styled.div`
  flex-grow: 1;
  flex-basis: 300px;
`

const HeaderRight = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  ${ThemeSwitcher} {
    margin-left: 40px;
    margin-right: 40px;
  }
`

const Header = ({ setThemeLight, setThemeDark }) => {
  return (
    <HeaderLayout>
      <HeaderLeft>
        <Search />
      </HeaderLeft>
      <HeaderRight>
        <ThemeSwitcher />
        <NavMenu />
      </HeaderRight>
    </HeaderLayout>
  )
}

export default Header

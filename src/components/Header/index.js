import React from 'react'
import styled from 'styled-components'

import Search from './Search'
import ThemeSwitcher, { ThemeSwitcherWrapper } from './ThemeSwitcher'
import NavMenu from './NavMenu'

export const HeaderWrapper = styled.div`
  display: block;
  
`

export const HeaderLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  position: relative;
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

  ${ThemeSwitcherWrapper} {
    margin-left: 40px;
    margin-right: 40px;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLayout>
        <HeaderLeft>
          <Search />
        </HeaderLeft>
        <HeaderRight>
          <ThemeSwitcher />
          <NavMenu />
        </HeaderRight>
      </HeaderLayout>
    </HeaderWrapper>
  )
}

export default Header

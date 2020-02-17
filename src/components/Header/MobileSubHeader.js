import React from 'react'
import styled from 'styled-components'

import Search from './MobileSearch'
import ThemeSwitcher, { ThemeSwitcherWrapper } from './ThemeSwitcher'
import NavMenu from './NavMenu'

export const MobileSubHeaderLayout = styled.div`
  display: none;
  width: 100%;
  height: 60px;
  position: relative;
  padding: 14px 0;
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
  return (
    <MobileSubHeaderLayout>
      <HeaderLeft>
        <Search />
      </HeaderLeft>
      <HeaderRight>
        <ThemeSwitcher />
        <NavMenu />
      </HeaderRight>
    </MobileSubHeaderLayout>
  )
}

export default Header

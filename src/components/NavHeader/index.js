import React from 'react'
import styled from 'styled-components'

import Search from './Search'
import ThemeSwitcher, { ThemeSwitcherWrapper } from '../ThemeSwitcher'
import Nav from '../Nav'

export const NavHeaderWrapper = styled.div`
  display: block;
`

export const NavHeaderLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  position: relative;
  align-items: center;
`

const NavHeaderLeft = styled.div`
  flex-grow: 1;
  flex-basis: 300px;
`

const NavHeaderRight = styled.div`
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

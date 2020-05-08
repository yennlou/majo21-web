import styled from 'styled-components'
import { ThemeSwitcherWrapper } from '../ThemeSwitcher'

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
    display: none;
  }
`

export const HeaderLeft = styled.div`
  float: left;
`

export const HeaderRight = styled.div`
  float: right;
  display: flex;
  align-items: center;

  ${ThemeSwitcherWrapper} {
    margin-left: 40px;
    margin-right: 40px;
  }
`

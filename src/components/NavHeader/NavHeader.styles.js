import styled from 'styled-components'
import { ThemeSwitcherWrapper } from '../ThemeSwitcher'

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

export const NavHeaderLeft = styled.div`
  flex-grow: 1;
  flex-basis: 300px;
`

export const NavHeaderRight = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  ${ThemeSwitcherWrapper} {
    margin-left: 40px;
    margin-right: 40px;
  }
`

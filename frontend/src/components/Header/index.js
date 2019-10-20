import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { setTheme } from '../../redux/config/actions'

const HeaderLayout = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const HeaderLeft = styled.div`
  flex: 1 0 50%;
`

const HeaderRight = styled.div`
  flex: 1 0 50%;
  display: flex;
  align-items: center;
`

const SearchWrapper = styled.div`
  padding: 16px;
  width: 70%;
  background: ${({ theme }) => theme.data.SEARCH_BG};
`

const NavMenu = styled.ul`
  width: 220px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.data.NAV_FONT};
  margin-left: auto;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 20px;
  /* text-decoration: underline; */
`

const ThemeSwitcher = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
`

const ThemeOption = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.data.NAV_FONT};
`

const ThemeOptionLight = styled(ThemeOption)`
  background-color: ${({ theme }) => theme.pallete.WHITESMOKE};
`
const ThemeOptionDark = styled(ThemeOption)`
  background-color: ${({ theme }) => theme.pallete.BLACKRUSSIAN};
`

const Header = ({ setThemeLight, setThemeDark }) => {
  return (
    <HeaderLayout>
      <HeaderLeft>
        <SearchWrapper />
      </HeaderLeft>
      <HeaderRight>
        <ThemeSwitcher>
          <ThemeOptionLight onClick={setThemeLight} />
          <ThemeOptionDark onClick={setThemeDark} />
        </ThemeSwitcher>
        <NavMenu>
          <li>Blog</li>
          <li>Portfolio</li>
        </NavMenu>
      </HeaderRight>
    </HeaderLayout>
  )
}

const mapDispatchToProps = dispatch => ({
  setThemeLight: () => dispatch(setTheme('light')),
  setThemeDark: () => dispatch(setTheme('dark'))
})

export default connect(null, mapDispatchToProps)(Header)

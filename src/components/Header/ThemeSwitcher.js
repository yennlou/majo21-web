import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setTheme } from '../../redux/config/actions'

export const ThemeSwitcherWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
`

const ThemeOption = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.data.NAV_FONT};
  cursor: pointer;
`

const ThemeOptionLight = styled(ThemeOption)`
  background-color: ${({ theme }) => theme.pallete.WHITESMOKE};
`
const ThemeOptionDark = styled(ThemeOption)`
  background-color: ${({ theme }) => theme.pallete.BLACKRUSSIAN};
`

const ThemeSwitcher = ({ className, setThemeLight, setThemeDark }) => (
  <ThemeSwitcherWrapper className={className}>
    <ThemeOptionLight onClick={setThemeLight} />
    <ThemeOptionDark onClick={setThemeDark} />
  </ThemeSwitcherWrapper>
)

const mapDispatchToProps = dispatch => ({
  setThemeLight: () => dispatch(setTheme('light')),
  setThemeDark: () => dispatch(setTheme('dark'))
})

export default connect(null, mapDispatchToProps)(ThemeSwitcher)

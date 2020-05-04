import React from 'react'
import { connect } from 'react-redux'

import { setTheme } from '../../redux/global/actions'
import {
  ThemeSwitcherWrapper,
  ThemeOptionLight,
  ThemeOptionDark
} from './ThemeSwitcher.styles'

const ThemeSwitcher = ({ className, setThemeLight, setThemeDark }) => (
  <ThemeSwitcherWrapper className={className}>
    <ThemeOptionLight onClick={setThemeLight} />
    <ThemeOptionDark onClick={setThemeDark} />
  </ThemeSwitcherWrapper>
)

const mapDispatchToProps = (dispatch) => ({
  setThemeLight: () => dispatch(setTheme('light')),
  setThemeDark: () => dispatch(setTheme('dark'))
})

export default connect(null, mapDispatchToProps)(ThemeSwitcher)

import { ConfigActionTypes } from './types'

export const setTheme = theme => ({
  type: ConfigActionTypes.SET_THEME,
  payload: theme
})

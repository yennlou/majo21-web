import { ConfigActionTypes } from './types'

export const setTheme = theme => ({
  type: ConfigActionTypes.SET_THEME,
  payload: theme
})

export const setQuery = query => ({
  type: ConfigActionTypes.SET_QUERY,
  payload: query
})

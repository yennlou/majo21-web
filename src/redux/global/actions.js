import { GlobalActionTypes } from './types'

export const setTheme = theme => ({
  type: GlobalActionTypes.SET_THEME,
  payload: theme
})

export const setQuery = query => ({
  type: GlobalActionTypes.SET_QUERY,
  payload: query
})

export const setLoading = loading => ({
  type: GlobalActionTypes.SET_LOADING,
  payload: loading
})

import { GlobalActionTypes } from './types'

const INITIAL_STATE = {
  theme: 'light',
  query: '',
  loading: false
}

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GlobalActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case GlobalActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload
      }
    case GlobalActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default globalReducer

import { ConfigActionTypes } from './types'

const INITIAL_STATE = {
  theme: 'light',
  query: ''
}

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConfigActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case ConfigActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload
      }
    default:
      return state
  }
}

export default configReducer

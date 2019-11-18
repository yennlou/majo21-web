import { ConfigActionTypes } from './types'

const INITIAL_STATE = {
  theme: 'light'
}

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConfigActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}

export default configReducer

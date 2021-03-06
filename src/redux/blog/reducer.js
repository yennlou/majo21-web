import BlogActionTypes from './types'

const INITIAL_STATE = {
  collection: [],
  isFetched: false,
  isFetching: false,
  errMsg: undefined
}

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      }
    case BlogActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        collection: action.payload
      }
    case BlogActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMsg: action.payload
      }
    default:
      return state
  }
}

export default blogReducer

import CategoryActionTypes from './types'

const INITIAL_STATE = {
  series: ['MAJO21个站拆解'],
  tags: [],
  isFetched: false,
  isFetching: false,
  errMsg: undefined
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORY_START:
      return {
        ...state,
        isFetching: true
      }
    case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        series: action.payload.series,
        tags: action.payload.tags
      }
    case CategoryActionTypes.FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMsg: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer

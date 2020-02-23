import CategoryActionTypes from './types'

export const fetchCategoryStart = () => ({
  type: CategoryActionTypes.FETCH_CATEGORY_START
})

export const fetchCategorySuccess = () => ({
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS
})

export const fetchCategoryFailure = errMsg => ({
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
  payload: errMsg
})

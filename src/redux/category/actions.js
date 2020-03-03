import CategoryActionTypes from './types'
import service from '../../utils/service'

export const fetchCategoryStart = () => ({
  type: CategoryActionTypes.FETCH_CATEGORY_START
})

export const fetchCategorySuccess = (category) => ({
  type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
  payload: category
})

export const fetchCategoryFailure = errMsg => ({
  type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
  payload: errMsg
})

export const fetchCategoryStartAsync = () => {
  return dispatch => {
    dispatch(fetchCategoryStart)
    service
      .get('/series')
      .then(({ data }) => {
        dispatch(fetchCategorySuccess(
          {
            series: data.map(item => item.series)
          }
        ))
      })
      .catch(err => {
        dispatch(fetchCategoryFailure(err))
      })
  }
}

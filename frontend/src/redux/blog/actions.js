import BlogActionTypes from './types'
import service from '../../utils/service'
import { parseDataToBlog } from './utils'

export const fetchCollectionStart = () => ({
  type: BlogActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collection => ({
  type: BlogActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collection
})

export const fetchCollectionFailure = errMsg => ({
  type: BlogActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errMsg
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionStart)
    service
      .get('/api/articles')
      .then(({ data }) => {
        dispatch(fetchCollectionSuccess(
          data.map(parseDataToBlog)
        ))
      })
      .catch(err => {
        dispatch(fetchCollectionFailure(err))
      })
  }
}

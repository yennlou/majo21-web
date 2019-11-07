import BlogActionTypes from './types'
import service from '../../utils/service'

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
    service
      .get('/api/articles')
      .then(({ data }) => {
        dispatch(fetchCollectionSuccess(
          data.map(({ _id, name, content }) =>
            ({
              id: _id,
              title: name,
              description: content
            }))
        ))
      })
      .catch(err => {
        dispatch(fetchCollectionFailure(err))
      })
  }
}

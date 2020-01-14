import GalleryActionTypes from './types'
import service from '../../utils/service'

export const fetchCollectionStart = () => ({
  type: GalleryActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collection => ({
  type: GalleryActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collection
})

export const fetchCollectionFailure = errMsg => ({
  type: GalleryActionTypes.fetchCollectionFailure,
  payload: errMsg
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionStart)
    service
      .get('/api/creations')
      .then(({ data }) => {
        dispatch(fetchCollectionSuccess(data))
      })
      .catch(err => {
        dispatch(fetchCollectionFailure(err))
      })
  }
}

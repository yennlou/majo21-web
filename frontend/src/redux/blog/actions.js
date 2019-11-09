import BlogActionTypes from './types'
import service from '../../utils/service'
import showdown from 'showdown'

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

const parseDataToBlog = (data) => {
  const { content, _id: id } = data
  const conv = new showdown.Converter({ metadata: true })
  const html = conv.makeHtml(content)
  const metadata = conv.getMetadata()
  return {
    id,
    html,
    ...metadata
  }
}

export const fetchCollectionStartAsync = () => {
  return dispatch => {
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

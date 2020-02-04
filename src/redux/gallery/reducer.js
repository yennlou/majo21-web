import GalleryActionTypes from './types'

const INITIAL_STATE = {
  collection: [],
  isFetched: false,
  isFetching: false,
  errMsg: undefined
}

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GalleryActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      }
    case GalleryActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        collection: action.payload
      }
    case GalleryActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMsg: action.payload
      }
    default:
      return state
  }
}

export default galleryReducer

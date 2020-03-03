import { combineReducers } from 'redux'

import globalReducer from './global/reducer'
import blogReducer from './blog/reducer'
import galleryReducer from './gallery/reducer'
import categoryReducer from './category/reducer'

const rootReducer = combineReducers({
  global: globalReducer,
  blog: blogReducer,
  gallery: galleryReducer,
  category: categoryReducer
})

export default rootReducer

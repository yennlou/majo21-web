import { combineReducers } from 'redux'

import configReducer from './config/reducer'
import blogReducer from './blog/reducer'
import galleryReducer from './gallery/reducer'
import categoryReducer from './category/reducer'

const rootReducer = combineReducers({
  config: configReducer,
  blog: blogReducer,
  gallery: galleryReducer,
  category: categoryReducer
})

export default rootReducer

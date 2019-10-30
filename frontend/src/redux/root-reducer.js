import { combineReducers } from 'redux'

import configReducer from './config/reducer'
import blogReducer from './blog/reducer'

const rootReducer = combineReducers({
  config: configReducer,
  blog: blogReducer
})

export default rootReducer

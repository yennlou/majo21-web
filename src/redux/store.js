import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

const middlewares = [thunk]
let composeEnhancers = compose

if (process.env.DEVTOOL_ON === '1') {
  middlewares.push(logger)
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default { store }

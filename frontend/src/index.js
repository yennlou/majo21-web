import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { store } from './redux/store'
import App from './App.js'

const browserHistory = createBrowserHistory()

browserHistory.listen(location => {
  console.log('????', location)
  const { hash } = window.location
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '')
      const elm = document.getElementById(id)
      if (elm) elm.scrollIntoView()
    }, 0)
  }
})

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>
), document.getElementById('app'))

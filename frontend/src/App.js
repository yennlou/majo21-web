import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import lightTheme from './styles/themes/light'
import darkTheme from './styles/themes/dark'
import Sidebar from './components/Sidebar'

const Layout = styled.div`
  display: flex;
  height: 100%;
`

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Router>
          <Switch>
            <Route path='/'>
              <div>
              Hello React!
              </div>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default App

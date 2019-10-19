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
import Header from './components/Header'

const Layout = styled.div`
  display: flex;
  height: 100%;
`
const Main = styled.div`
  padding: 32px 80px;
  flex-grow: 1;
`

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Main>
          <Header />
          <Router>
            <Switch>
              <Route path='/'>
                <div>
                 &nbsp;
                </div>
              </Route>
            </Switch>
          </Router>
        </Main>
      </Layout>
    </ThemeProvider>
  )
}

export default App

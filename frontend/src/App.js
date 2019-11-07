import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import lightTheme from './styles/themes/light'
import darkTheme from './styles/themes/dark'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

import BlogListView from './views/BlogListView'
import BlogView from './views/BlogView'

const Layout = styled.div`
  display: flex;
  height: 100%;
`
const Main = styled.div`
  padding: 0 80px;
  flex-grow: 1;
  min-width: 800px;
`

const themeCollection = {
  light: lightTheme,
  dark: darkTheme
}

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={themeCollection[theme]}>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Main>
          <Switch>
            <Route exact path='/'>
              <Header />
              <BlogListView />
            </Route>
            <Route exact path='/articles/:articleId'>
              <BlogView />
            </Route>
          </Switch>
        </Main>
      </Layout>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ config: { theme } }) => ({
  theme
})

export default connect(mapStateToProps)(App)

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import lightTheme from './styles/themes/light'
import darkTheme from './styles/themes/dark'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Sidebar/Footer'

import BlogListView from './views/BlogListView'
import BlogView from './views/BlogView'
import GalleryView from './views/GalleryView'

const Main = styled.div`
  padding: 0 80px;
  flex-grow: 1;
  height: 100%;
  overflow: scroll;
`

const Layout = styled.div`
  display: flex;
  height: 100%;

  @media(max-width: 1290px) {
    ${Main} {
      padding: 0 60px;
    }
  }

  @media(max-width: 1020px) {
    ${Main} {
      padding: 0 60px 0 20px;
    }
  }

  @media(max-width: 920px) {
    ${Main} {
      padding: 0 20px 10px 20px;
    }
  }

  @media(max-width: 880px) {
    flex-direction: column;
    overflow: scroll;
    ${Main} {
      overflow: initial;
    } 
  }

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
            <Route
              exact
              path='/articles/:blogId'
              component={BlogView}
            />
            <Route exact path='/gallery'>
              <Header />
              <GalleryView />
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

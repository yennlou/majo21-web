import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import lightTheme from './styles/themes/light'
import darkTheme from './styles/themes/dark'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ThemeSwitcher from './components/Header/ThemeSwitcher'

import MobileFooter, { MobileFooterWrapper } from './components/MobileFooter'

import BlogListView, { BlogListViewWrapper } from './views/BlogListView'
import BlogView from './views/BlogView'
import GalleryView from './views/GalleryView'

const Main = styled.div`
  padding: 0 80px;
  flex-grow: 1;
  height: 100%;
  overflow: scroll;
  background: ${({ theme }) => theme.data.BG};
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
    ${ThemeSwitcher} {
      margin-right: 30px;
    }
  }
  @media(max-width: 940px) {
    ${Main} {
      padding: 0 20px 10px 20px;
    }
  }
  @media(max-width: 870px) {
    flex-direction: column;
    overflow: scroll;
    ${Main} {
      overflow: initial;
    } 
    ${BlogListViewWrapper} {
      padding-bottom: 20px;
    }
    ${MobileFooterWrapper} {
      display: block;
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
          <MobileFooter />
        </Main>
      </Layout>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ config: { theme } }) => ({
  theme
})

export default connect(mapStateToProps)(App)

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import lightTheme from './styles/themes/light'
import darkTheme from './styles/themes/dark'
import Sidebar, { SidebarWrapper } from './components/Sidebar'
import Header, { HeaderLayout } from './components/Header'
import MobileSubHeader, { MobileSubHeaderLayout } from './components/Header/MobileSubHeader'
import ThemeSwitcher, { ThemeSwitcherWrapper } from './components/Header/ThemeSwitcher'
import { BlogEntryWrapper } from './components/BlogEntry'
import { GalleryWrapper } from './components/Gallery'
import { BlogTitle, BlogWrapper } from './components/Blog'
import { IndexWrapper } from './components/Pagination'

import MobileHeader, { MobileHeaderWrapper } from './components/MobileHeader'
import MobileFooter, { MobileFooterWrapper } from './components/MobileFooter'

import BlogListView, { BlogListViewWrapper } from './views/BlogListView'
import BlogView, { BlogViewWrapper } from './views/BlogView'
import GalleryView, { GalleryViewWrapper } from './views/GalleryView'

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
      overflow: auto;
      padding: 0 14px 0px;
    } 
    ${BlogListViewWrapper} {
      padding-top: 0px;
      padding-bottom: 20px;
    }
    ${SidebarWrapper} {
      display: none;
    }
    ${MobileFooterWrapper} {
      display: block;
    }
    ${MobileHeaderWrapper} {
      display: flex;
      margin-top: 12px;
    }
    ${HeaderLayout} {
      height: 60px;
    }
    ${ThemeSwitcher} {
      margin-left: 28px;
      margin-right: 20px;
    }
    ${ThemeSwitcherWrapper} {
      width: 75px;
    }
    ${GalleryWrapper} {
      column-count: 1;
    }
    ${GalleryViewWrapper} {
      padding-top: 0px;
      padding-bottom: 20px; 
    }
    ${BlogTitle} {
      margin-bottom: 16px;
    }
    ${BlogWrapper} {
      padding-bottom: 10px;
    }
    ${BlogViewWrapper} {
      padding-top: 30px;
    }
    ${BlogEntryWrapper} {
      &::after {
        right: -13px;
        bottom: -13px;
      }
    }
    ${IndexWrapper} {
      width: 38px;
      height: 38px;
      font-size: 14px;
    }
  }
  @media(max-width: 520px) {
    ${HeaderLayout} {
      display: none;
    }
    ${MobileSubHeaderLayout} {
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
              <MobileHeader />
              <MobileSubHeader />
              <Header />
              <BlogListView />
            </Route>
            <Route
              exact
              path='/articles/:blogId'
              component={BlogView}
            />
            <Route exact path='/gallery'>
              <MobileHeader />
              <MobileSubHeader />
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

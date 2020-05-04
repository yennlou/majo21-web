import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import { fetchCategoryStartAsync } from './redux/category/actions'

import GlobalStyle from './styles/GlobalStyle'
import lightTheme from './styles/themes/light'
import darkTheme from './styles/themes/dark'
import InputContext from './contexts/input-context'
import Sidebar from './components/Sidebar'
import NavHeader, { NavHeaderLayout } from './components/NavHeader'
import MobileNavHeader from './components/NavHeader/MobileNavHeader'
import { ThemeSwitcherWrapper } from './components/ThemeSwitcher'
import { BlogEntryWrapper } from './components/BlogEntry'

import { BlogTitle, BlogWrapper } from './components/Blog'
import { IndexWrapper } from './components/Pagination'

import TabletHeader from './components/TabletHeader'
import TabletFooter from './components/TabletFooter'

import BlogListView, {
  BlogListViewWrapper,
  EmptyResult
} from './views/BlogListView'
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

  @media (max-width: 1270px) {
    ${Main} {
      padding: 0 60px;
    }
  }
  @media (max-width: 1020px) {
    ${Main} {
      padding: 0 60px 0 20px;
    }
    ${ThemeSwitcherWrapper} {
      margin-right: 30px;
    }
  }
  @media (max-width: 940px) {
    ${Main} {
      padding: 0 20px 10px 20px;
    }
  }
  @media (max-width: 870px) {
    flex-direction: column;
    overflow: scroll;
    ${Main} {
      overflow: auto;
      padding: 0 14px 0px;
      display: flex;
      flex-direction: column;
    }
    ${BlogListViewWrapper} {
      padding-top: 0px;
      padding-bottom: 20px;
    }
    ${EmptyResult} {
      height: calc(100vh - 480px);
    }
    ${NavHeaderLayout} {
      height: 60px;
    }
    ${ThemeSwitcherWrapper} {
      width: 75px;
      margin-left: 28px;
      margin-right: 20px;
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
`

const themeCollection = {
  light: lightTheme,
  dark: darkTheme
}

const App = ({ theme, isCategoryFetched, fetchCategoryStartAsync }) => {
  const [input, setInput] = useState('')
  const isMobile = useMediaQuery({ query: '(max-width: 520px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 870px)' })
  useEffect(() => {
    if (isCategoryFetched) return
    fetchCategoryStartAsync()
  }, [])
  return (
    <ThemeProvider theme={themeCollection[theme]}>
      <InputContext.Provider value={[input, setInput]}>
        <GlobalStyle />
        <Layout>
          {!isTablet && <Sidebar />}
          <Main>
            <Switch>
              <Route exact path='/'>
                {isTablet && <TabletHeader />}
                {isMobile && <MobileNavHeader />}
                {!isMobile && <NavHeader />}
                <BlogListView />
              </Route>
              <Route exact path='/articles/:blogId' component={BlogView} />
              <Route exact path='/gallery'>
                {isTablet && <TabletHeader />}
                {isMobile && <MobileNavHeader />}
                {!isMobile && <NavHeader />}
                <GalleryView />
              </Route>
            </Switch>
            {isTablet && <TabletFooter />}
          </Main>
        </Layout>
      </InputContext.Provider>
    </ThemeProvider>
  )
}

const mapStateToProps = ({
  global: { theme },
  category: { isFetched: isCategoryFetched }
}) => ({
  theme,
  isCategoryFetched
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategoryStartAsync: () => dispatch(fetchCategoryStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCategoryStartAsync } from './redux/category/actions'

import GlobalStyle from './styles/GlobalStyle'
import InputContext from './contexts/input-context'
import Sidebar from './components/Sidebar'
import NavHeader from './components/NavHeader'
import MobileNavHeader from './components/NavHeader/MobileNavHeader'

import TabletHeader from './components/TabletHeader'
import TabletFooter from './components/TabletFooter'
import ThemeLayout, { Main } from './components/ThemeLayout'

import BlogListView from './views/BlogListView'
import BlogView from './views/BlogView'
import GalleryView from './views/GalleryView'

const App = ({ theme, isCategoryFetched, fetchCategoryStartAsync }) => {
  const [input, setInput] = useState('')
  const isMobile = useMediaQuery({ query: '(max-width: 520px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 870px)' })
  useEffect(() => {
    if (isCategoryFetched) return
    fetchCategoryStartAsync()
  }, [])
  return (
    <InputContext.Provider value={[input, setInput]}>
      <GlobalStyle />
      <ThemeLayout theme={theme}>
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
      </ThemeLayout>
    </InputContext.Provider>
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

import styled from 'styled-components'
import { NavHeaderLayout } from '../NavHeader'
import { ThemeSwitcherWrapper } from '../ThemeSwitcher'
import { BlogEntryWrapper } from '../BlogEntry'

import { BlogTitle, BlogWrapper } from '../Blog'
import { IndexWrapper } from '../Pagination'

import { BlogListViewWrapper, EmptyResult } from '../../views/BlogListView'
import { BlogViewWrapper } from '../../views/BlogView'
import { GalleryViewWrapper } from '../../views/GalleryView'

import themeDark from './theme.dark.js'
import themeLight from './theme.light.js'

export const Main = styled.div`
  padding: 0 80px;
  flex-grow: 1;
  height: 100%;
  overflow: scroll;
  background: var(--bg);
`

export const Layout = styled.div`
  ${(props) => props.theme === 'dark' && themeDark}
  ${(props) => props.theme === 'light' && themeLight}
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

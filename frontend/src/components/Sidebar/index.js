import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Demo from '../Demo'
import Footer from './Footer'

export const SidebarWrapper = styled.div(({ theme }) => {
  const { SIDEBAR_BG: bgColor, SIDEBAR_FONT: fontColor } = theme.data
  return css`
    height: 100%;
    flex: 0 0 400px;
    background-color: ${bgColor};
    color: ${fontColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 700px;

    @media(max-width: 1020px) {
      flex-basis: 360px;
    }
  `
})

const TextLogo = styled.span`
  font-size: 36px;
  letter-spacing: 4px;
  padding: 34px;
  margin-bottom: 4px;
  cursor: pointer;
`

const Contact = styled.div`
  padding: 42px;
  font-size: 16px;
  line-height: 1.4;
  white-space: nowrap;
`

const Sidebar = ({ theme }) => {
  const history = useHistory()
  return (
    <SidebarWrapper>
      <TextLogo onClick={() => (history.push('/'))}>
        MAJO21
      </TextLogo>
      <Demo />

      <Contact>
        <ul>
          <li>* github : github.com/yennlou</li>
          <li>* twitter: maaaajo21</li>
          <li>* douban : 二十一世纪魔女</li>
        </ul>
      </Contact>
      <Footer />
    </SidebarWrapper>
  )
}

export default styled(Sidebar)``

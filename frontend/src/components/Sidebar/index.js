import React from 'react'
import styled, { css } from 'styled-components'

import Demo from '../Demo'
import SVGCloud from './footer-bg.svg'

const SidebarWrapper = styled.div(({ theme }) => {
  const { SIDEBAR_BG: bgColor, SIDEBAR_FONT: fontColor } = theme.data
  return css`
    width: 400px;
    height: 100%;
    background-color: ${bgColor};
    color: ${fontColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 740px;
  `
})

const TextLogo = styled.span`
  font-size: 36px;
  letter-spacing: 4px;
  padding: 34px;
  margin-bottom: 4px;
`

const FooterWrapper = styled.div`
  position: relative;
  margin-top: auto;
  width: 100%;
`

const FooterBG = styled(SVGCloud)`
  position: absolute;
  bottom: -135px;
  left: -80px;
`
const Copyright = styled.div`
  color: ${({ theme }) => theme.data.BG};
  text-align: center;
  position: absolute;
  bottom: 24px;
  width: 100%;
`

const Footer = ({ theme }, children) => {
  return (
    <FooterWrapper>
      <FooterBG />
      <Copyright>Created BY Majo21</Copyright>
    </FooterWrapper>
  )
}

const Contact = styled.div`
  padding: 42px;
  font-size: 16px;
  line-height: 1.4;
`

const Sidebar = ({ theme }) => {
  return (
    <SidebarWrapper>
      <TextLogo>
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

export default Sidebar

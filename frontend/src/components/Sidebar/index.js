import React from 'react'
import styled, { css } from 'styled-components'
import Demo from '../Demo'

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
  `
})

const TextLogo = styled.span`
  font-size: 36px;
  letter-spacing: 4px;
  padding: 32px;
`

const Footer = ({ theme }, children) => {
  return (
    <div>cddd</div>
  )
}

const Sidebar = ({ theme }) => {
  return (
    <SidebarWrapper>
      <TextLogo>
        MAJO21
      </TextLogo>
      <Demo />
    </SidebarWrapper>
  )
}

export default Sidebar

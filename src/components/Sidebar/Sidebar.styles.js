import React from 'react'
import styled, { css, withTheme } from 'styled-components'
import BaseLink from '../BaseLink'

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

    @media (max-width: 1020px) {
      flex-basis: 360px;
    }
  `
})

export const TextLogo = styled.span`
  font-size: 36px;
  letter-spacing: 4px;
  padding: 34px 0 33px;
  cursor: pointer;
`

export const Contact = styled.div`
  padding: 42px;
  font-size: 16px;
  line-height: 1.5;
  white-space: nowrap;
`

export const ContactLink = withTheme(({ children, theme, ...otherProps }) => {
  const Link = styled(BaseLink)`
    padding: 1px 4px;
    &:hover {
      text-decoration: none;
    }
  `
  return (
    <Link {...otherProps} color={theme.data.SIDEBAR_FONT}>
      {children}
    </Link>
  )
})

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css, withTheme } from 'styled-components'

import BaseLink from '../BaseLink'
import Demo from '../Demo'
import SidebarFooter from '../SidebarFooter'

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

const ContactLink = withTheme(({ children, theme, ...otherProps }) => {
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

export const TextLogo = styled.span`
  font-size: 36px;
  letter-spacing: 4px;
  padding: 34px 0 33px;
  cursor: pointer;
`

const Contact = styled.div`
  padding: 42px;
  font-size: 16px;
  line-height: 1.5;
  white-space: nowrap;
`

const Sidebar = ({ theme }) => {
  const history = useHistory()
  return (
    <SidebarWrapper>
      <TextLogo className='logo-majo21' onClick={() => history.push('/')}>
        MAJO21
      </TextLogo>
      <Demo />

      <Contact>
        <ul>
          <li>
            * GITHUB&nbsp; =&nbsp;
            <ContactLink
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/yennlou'
            >
              github.com/yennlou
            </ContactLink>
          </li>
          <li>
            * TWITTER =&nbsp;
            <ContactLink
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/maaaajo21'
            >
              maaaajo21
            </ContactLink>
          </li>
          <li>
            * DOUBAN&nbsp; =&nbsp;
            <ContactLink
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.douban.com/people/maaaajo21/'
            >
              二十一世纪魔女
            </ContactLink>
          </li>
        </ul>
      </Contact>
      <SidebarFooter />
    </SidebarWrapper>
  )
}

export default withTheme(Sidebar)

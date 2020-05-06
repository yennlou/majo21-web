import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  SidebarWrapper,
  TextLogo,
  Contact,
  ContactLink
} from './Sidebar.styles'

import Demo from '../Demo'
import SidebarFooter from '../SidebarFooter'

const Sidebar = () => {
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

export default Sidebar

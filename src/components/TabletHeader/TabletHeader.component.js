import React from 'react'
import { useHistory } from 'react-router-dom'
import Icon from '../Icon'
import {
  TabletHeaderWrapper,
  TabletHeaderContact,
  TabletHeaderLayout,
  TextLogo
} from './TabletHeader.styles'

const TabletHeader = () => {
  const history = useHistory()
  return (
    <TabletHeaderWrapper>
      <TabletHeaderLayout>
        <TextLogo
          className='logo-majo21 logo-majo21--mobile'
          onClick={() => history.push('/')}
        >
          MAJO21
        </TextLogo>
        <TabletHeaderContact>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/maaaajo21'
          >
            <Icon name='twitter' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/yennlou'
          >
            <Icon name='github' />
          </a>
        </TabletHeaderContact>
      </TabletHeaderLayout>
    </TabletHeaderWrapper>
  )
}

export default TabletHeader

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../Icon'

export const TabletHeaderLayout = styled.div`
  display: flex;
  color: var(--bg);
  background: var(--sidebar-font);
  justify-content: space-between;
  padding: 0 10px 0 8px;
`

export const TabletHeaderWrapper = styled.div`
  margin-top: 12px;
`

const TextLogo = styled.div`
  font-size: 42px;
  letter-spacing: 4px;
  cursor: pointer;
`

const Contact = styled.div`
  font-size: 34px;
  display: flex;
  justify-content: space-between;
  width: 84px;
  align-items: center;
  position: relative;
  top: 1px;
`

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
        <Contact>
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
        </Contact>
      </TabletHeaderLayout>
    </TabletHeaderWrapper>
  )
}

export default TabletHeader

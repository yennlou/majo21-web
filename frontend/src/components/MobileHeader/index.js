import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

export const MobileHeaderWrapper = styled.div`
  display: none;
  color: ${({ theme }) => theme.data.BG};
  background: ${({ theme }) => theme.data.SIDEBAR_FONT};
  justify-content: space-between;
  padding: 0 10px 0 8px;
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
  top: -3px;
`

const MobileHeader = () => (
  <MobileHeaderWrapper>
    <TextLogo>MAJO21</TextLogo>
    <Contact>
      <Icon name='twitter' />
      <Icon name='github' />
    </Contact>

  </MobileHeaderWrapper>
)

export default MobileHeader

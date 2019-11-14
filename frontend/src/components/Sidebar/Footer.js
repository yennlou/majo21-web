import React from 'react'

import styled from 'styled-components'
import SVGCloud from './footer-bg.svg'

const FooterWrapper = styled.div`
  position: relative;
  margin-top: auto;
  width: 100%;
`

const FooterBG = styled(SVGCloud)`
  position: absolute;
  bottom: 0px;
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

export default Footer

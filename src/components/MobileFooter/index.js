import React from 'react'
import styled from 'styled-components'

const Delimiter = styled(({ className }) => (
  <svg
    width='100%'
    height='12'
    className={className}
  >
    <defs>
      <pattern id='sawPattern' width='24' height='12' patternUnits='userSpaceOnUse'>
        <path d='M 0 0 L 12 12 L 24 0 Z' />
      </pattern>
    </defs>
    <rect width='100%' height='12' fill='url(#sawPattern)' />
  </svg>
))``

export const MobileFooterWrapper = styled.div`
  position:relative;
  text-align: center;
  display: none;
  width: 100vw;
  margin-left: -14px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.data.BG};
  ${Delimiter} {
    fill: ${({ theme }) => theme.data.BLOG_FONT};
    height: 12px;
    position:relative;
    top: 5px;
    transform: scaleY(-1);
  }
  span {
    position: relative;
    left: 1px;
    color: ${({ theme }) => theme.pallete.CABARET}
  }
`

export const MobileFooterBody = styled.div`
  padding: 32px 0;
  background-color: ${({ theme }) => theme.data.BLOG_FONT};
`

const MobileFooter = () => (
  <MobileFooterWrapper>
    <Delimiter />
    <MobileFooterBody>
    Designed by <span>Majo21</span>
    </MobileFooterBody>
  </MobileFooterWrapper>
)

export default MobileFooter

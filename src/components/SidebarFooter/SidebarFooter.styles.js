import styled from 'styled-components'
import SVGCloud from './footer-bg.svg'

export const SidebarFooterWrapper = styled.div`
  position: relative;
  margin-top: auto;
  width: 100%;
`

export const SidebarFooterBG = styled(SVGCloud)`
  position: absolute;
  bottom: 0px;
  left: -80px;
`
export const Copyright = styled.div`
  color: ${({ theme }) => theme.data.BG};
  text-align: center;
  position: absolute;
  bottom: 24px;
  width: 100%;
`

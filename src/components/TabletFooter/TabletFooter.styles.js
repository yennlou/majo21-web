import styled from 'styled-components'
import Delimiter from '../Delimiter'

export const TabletFooterWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100vw;
  margin-left: -14px;
  margin-top: auto;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--bg);
  ${Delimiter} {
    fill: var(--blog-font);
    height: 12px;
    position: relative;
    top: 5px;
    transform: scaleY(-1);
  }
  span {
    position: relative;
    left: 1px;
    color: var(--color-cabaret);
  }
`

export const TabletFooterBody = styled.div`
  padding: 32px 0;
  background-color: var(--blog-font);
  letter-spacing: 0.2em;
`

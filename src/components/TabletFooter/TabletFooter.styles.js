import React from 'react'
import styled from 'styled-components'

export const Delimiter = styled(({ className }) => (
  <svg width='100%' height='12' className={className}>
    <defs>
      <pattern
        id='sawPattern'
        width='24'
        height='12'
        patternUnits='userSpaceOnUse'
      >
        <path d='M 0 0 L 12 12 L 24 0 Z' />
      </pattern>
    </defs>
    <rect width='100%' height='12' fill='url(#sawPattern)' />
  </svg>
))``

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

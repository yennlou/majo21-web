import React from 'react'
import styled from 'styled-components'

const Delimiter = styled(({ className }) => (
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

export default Delimiter

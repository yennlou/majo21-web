import React from 'react'
import styled from 'styled-components'
import '../../assets/icons/sprite.svg'

const Svg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`

const Icon = ({ name }) => (
  <Svg className={`icon icon-${name}`}>
    <use xlinkHref={`#sprite_icon-${name}`} />
  </Svg>
)

export default Icon

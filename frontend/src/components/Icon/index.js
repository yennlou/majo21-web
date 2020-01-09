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
  position: relative;
  bottom: -1px;
`

const Icon = ({ name, ...otherProps }) => (
  <Svg className={`icon icon-${name}`} {...otherProps}>
    <use xlinkHref={`#sprite_icon-${name}`} />
  </Svg>
)

export default styled(Icon)``

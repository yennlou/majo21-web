import React from 'react'
import Icon from '../Icon'
import { Mask } from './Loading.styles'

const Loading = () => {
  return (
    <Mask>
      <Icon name='spinner' />
    </Mask>
  )
}

export default Loading

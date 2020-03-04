import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const Mask = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.data.BG}88;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-size: 42px;
  color: ${({ theme }) => theme.data.NAV_FONT};

  svg {
    animation: rotation-in-steps 1s steps(12) infinite;
  }

  @keyframes rotation-in-steps {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loading = () => {
  return (
    <Mask>
      <Icon name='spinner' />
    </Mask>
  )
}

export default Loading

import styled from 'styled-components'

export const Mask = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--mask);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-size: 42px;
  color: var(--nav-font);

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

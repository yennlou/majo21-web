import styled from 'styled-components'

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  color: var(--nav-font);
  margin-left: auto;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 20px;

  li:not(:last-child) {
    margin-right: 42px;
    @media (max-width: 1100px) {
      margin-right: 24px;
    }
    @media (max-width: 870px) {
      margin-right: 16px;
    }
  }

  a {
    text-decoration: none;
  }
`

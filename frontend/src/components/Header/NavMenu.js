import React from 'react'
import styled from 'styled-components'

const NavMenuUl = styled.ul`
  /* width: 220px; */
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.data.NAV_FONT};
  margin-left: auto;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 20px;
  /* text-decoration: underline; */

  li:not(:last-child) {
    margin-right: 42px;
  }
`

const NavMenu = () => (
  <NavMenuUl>
    <li>Blog</li>
    <li>Gallery</li>
  </NavMenuUl>
)

export default NavMenu

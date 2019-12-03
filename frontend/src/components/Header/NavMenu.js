import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  
  a {
    text-decoration: none;
  }
`

const NavMenu = () => (
  <NavMenuUl>
    <li><Link to='/'>Blog</Link></li>
    <li><Link to='/gallery'>Gallery</Link></li>
  </NavMenuUl>
)

export default NavMenu

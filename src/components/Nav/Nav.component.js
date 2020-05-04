import React from 'react'
import { Link } from 'react-router-dom'
import { NavList } from './Nav.styles'

const Nav = () => (
  <NavList>
    <li>
      <Link to='/'>Blog</Link>
    </li>
    <li>
      <Link to='/gallery'>Gallery</Link>
    </li>
  </NavList>
)

export default Nav

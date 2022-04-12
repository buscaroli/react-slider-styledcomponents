import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuLinks } from '../data/menuLinks'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: red;
`

const Logo = styled(Link)`
  color: green;
  text-decoration: none;
`

const NavMenu = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
`

const NavMenuLink = styled(Link)`
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-decoration: none;
`

function Navbar() {
  return (
    <Nav>
      <Logo to="#">MATT</Logo>
      <NavMenu>
        {menuLinks.map((link, index) => {
          return (
            <NavMenuLink to={link.address} key={index}>
              {link.text}
            </NavMenuLink>
          )
        })}
      </NavMenu>
      <h1>Navbar</h1>
    </Nav>
  )
}

export default Navbar

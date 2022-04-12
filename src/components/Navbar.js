import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuLinks } from '../data/menuLinks'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: red;
`

const Logo = styled(Link)`
  color: silver;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  padding: 0 1rem;
`

const NavMenu = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
`

const NavMenuLink = styled(Link)`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
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
    </Nav>
  )
}

export default Navbar

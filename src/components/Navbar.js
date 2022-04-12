import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuLinks } from '../data/menuLinks'
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: teal;
`

const Logo = styled(Link)`
  color: white;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  padding: 0 1rem;
`

const NavMenu = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const NavMenuLink = styled(Link)`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-decoration: none;
`

const HamburgerWrapper = styled.div`
  color: white;
  font-size: 1.5rem;
  padding-right: 1rem;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    display: block;
  }
`

const StyledHamburgerMenu = styled(FaBars)`
  transition: all, 0.3s;

  &:hover {
    transform: scale(1.5);
  }
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
      <HamburgerWrapper>
        <StyledHamburgerMenu icon={FaBars} />
      </HamburgerWrapper>
    </Nav>
  )
}

export default Navbar

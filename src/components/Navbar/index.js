import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,
     NavbarContainer,
     NavLogo,
     MobileIcon,
     NavItem, 
     NavLinks, 
     NavMenu,
     NavButton,
     NavButtonLink
    } from './navbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavLogo to="/">Lincoln</NavLogo>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">About me</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="teaching">Teaching</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="proofreading">Proofreading</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavButton>
                      <NavButtonLink to="mailto:clinelin@gmail.com">Contact me</NavButtonLink>
                  </NavButton>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar

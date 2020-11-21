import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';
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

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
          <Nav scrollNav= {scrollNav}>
              <NavbarContainer>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavLogo to="/" onClick={toggleHome}>Lincoln</NavLogo>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          >About me</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="teaching"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}>Teaching</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="proofreading"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={0-80}>Proofreading</NavLinks>
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

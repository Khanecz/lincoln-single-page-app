import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#33312e' : 'transparent')};
height: 80px;
//margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: fixed;
width: 100%;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8 all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1800px;
`

export const NavLogo = styled.a`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #17a398;
}
`

export const NavButton = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavButtonLink = styled.a`
border-radius: 50px;
background: #17a398;
white-space: nowrap;
padding: 10px 22px;
color: #33312E;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-weight: 500;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
}
`


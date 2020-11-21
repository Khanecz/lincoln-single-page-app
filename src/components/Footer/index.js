import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer,
        FooterWrap, 
        FooterLinksContainer,
        FooterLink,
        SocialMedia,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
        SocialLogo,
        SocialMediaWrap
    } from './footerElements';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                  <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>Lincoln</SocialLogo>
                    <WebsiteRights>
                        Michael Řežábek @ {new Date().getFullYear()}
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//https://www.linkedin.com/in/lincolncline/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                  </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

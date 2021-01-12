import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideButtonWrap,
    SidebarRoute
} from "./sidebarElements";

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="teaching" onClick={toggle}>
                        Teaching
                    </SidebarLink>
                    <SidebarLink to="proofreading" onClick={toggle}>
                        Proofreading
                    </SidebarLink>
                    <SidebarLink to="pricing" onClick={toggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to="reviews" onClick={toggle}>
                        Reviews
                    </SidebarLink>
                </SidebarMenu>
                <SideButtonWrap>
                    <SidebarRoute aria-label="email" href="mailto:clinelin@gmail.com">
                        Contact me
                    </SidebarRoute>
                </SideButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

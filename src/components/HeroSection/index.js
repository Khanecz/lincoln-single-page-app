import React from 'react'
import {HeroContainer,
        HeroBg,
        HeroContent,
        HeroH1,
        HeroP
       } from './heroElements';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg />
            <HeroContent>
                <HeroH1>Lincoln Truesdale Cline</HeroH1>
                <HeroP>
                    the best fucking english teacher
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/ContentSection/data';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';
import {ReviewOne} from '../components/ReviewSection/data';



export const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> 
            <HeroSection/>
            <ContentSection {...homeObjOne} />
            <ContentSection {...homeObjTwo} />
            <ContentSection {...homeObjThree} />
            <ContentSection {...homeObjFour} />
            <ReviewSection {...ReviewOne}/>
            <Footer/>
        </>
    )
}

export default Home;

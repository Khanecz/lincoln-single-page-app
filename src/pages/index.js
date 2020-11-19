import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection'
import { homeObjOne } from '../components/ContentSection/data';


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
        </>
    )
}

export default Home;

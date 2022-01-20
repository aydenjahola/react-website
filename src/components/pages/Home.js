import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Events from '../Events';
import Navbar from '../Navbar';

function Home() {
    return (
        <>
            <HeroSection />
            <Welcome />
            <Cards />
            <Events />
        </>
    );
}

export default Home;

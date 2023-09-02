import React from 'react';
import '../../../App.css';
import Cards from '../../Cards';
import HeroSection from './HeroSection';
import Footer from '../../footer/Footer';
import Welcome from './Welcome';
import Events from '../events/Events';
import Navbar from '../../navbar/Navbar';

function Home() {
    return (
        <>
            <HeroSection />
            <Welcome />
            <Cards />
            <Events />
            <br /><br /><br />
        </>
    );
}

export default Home;

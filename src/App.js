import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Events from './components/pages/Events';
import Join from './components/pages/Join';
import Footer from './components/Footer';
import { createContext } from "react";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/events' component={Events} />
                    <Route path='/services' component={Services} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/join' component={Join} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;

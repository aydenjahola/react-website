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
import Gallery from './components/pages/Gallery';

function App() {

    const [darkMode, setDarkMode] = React.useState(false);
    return (
        <>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <div className='container'>
                    <span style={{ color: darkMode ? 'grey' : '#ffd15c' }}>
                        <i class="far fa-sun"></i>
                    </span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>
                        <i class="far fa-moon"></i>
                    </span>
                </div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/events' component={Events} />
                        <Route path='/services' component={Services} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/join' component={Join} />
                    </Switch>
                    <Footer />
                </Router>

            </div>
        </>
    );
}

export default App;

{/*                         References

https://www.youtube.com/watch?v=cDwa_JwuC-w
https://www.youtube.com/watch?v=I2UBjN5ER4s&t=2562s
https://www.youtube.com/watch?v=IGzhnFDcSsw
*/}
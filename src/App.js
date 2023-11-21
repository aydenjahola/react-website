import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Home from './components/pages/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Services from './components/pages/services/Services'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'
import Join from './components/pages/join/Join'
import Footer from './components/footer/Footer'
import Gallery from './components/pages/gallery/Gallery'
import Emergency from './components/pages/emergency/Emergency'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='container'>
        <span style={{ color: darkMode ? 'grey' : '#ffd15c' }}>
          <i class='far fa-sun'></i>
        </span>
        <div className='switch-checkbox'>
          <label className='switch'>
            <input
              type='checkbox'
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className='slider round'></span>
          </label>
        </div>
        <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>
          <i class='far fa-moon'></i>
        </span>
      </div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/emergency' component={Emergency} />
          <Route path='/join' component={Join} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App

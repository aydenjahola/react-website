import React from 'react'
import '../../../App.css'
import Services from '../../Services'
import Events from '../../Events'
import HeroSection from './HeroSection'
import Welcome from './Welcome'
import CommitteeCards from '../../committee/CommitteeCards'

function Home() {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Events />
      <Services />
      <CommitteeCards />
      <br />
      <br />
      <br />
    </>
  )
}

export default Home

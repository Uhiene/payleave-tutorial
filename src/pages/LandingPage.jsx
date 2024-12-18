import React from 'react'
import Hero from '../components/landingPage.jsx/Hero'
import About from '../components/landingPage.jsx/About'
import Payments from '../components/landingPage.jsx/Payments'
import RecievePayments from '../components/landingPage.jsx/RecievePayments'
import Mission from '../components/landingPage.jsx/Mission'
import Footer from '../components/landingPage.jsx/Footer'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Payments/>
        <RecievePayments/>
        <Mission/>
        <Footer/>
    </div>
  )
}

export default LandingPage
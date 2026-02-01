import React from 'react'
import Hero from '../components/Hero'
import ProblemSection from '../section/ProblemSection'
import SecuritySection from '../section/SecuritySection'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SecuritySection/>
      <HowItWorks/>
      <Footer/>
    </>

  )
}

export default Home

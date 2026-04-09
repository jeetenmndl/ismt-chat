import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'

const Landing = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Features />
        <About />
    </main>
  )
}

export default Landing
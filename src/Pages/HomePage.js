import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Capability from '../Components/Capability'
import Projects from '../Components/Projects'

export default function HomePage() {
  return (
    <>
   
        <Navbar></Navbar> 

        <HeroSection></HeroSection>
        <Capability></Capability>
        <Projects></Projects>
     </>
  )
}

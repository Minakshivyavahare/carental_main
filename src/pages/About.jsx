import React, { useEffect } from 'react'
import AboutDeals from '../component/AboutDeals'
import AboutTestimonials from '../component/AboutTestimonials'

const About = () => {

   useEffect(()=>{
      window.scrollTo(0,0)
      },[])
  return (
    <div className="min-h-screen bg-[#171717]">
    <AboutDeals/>
    <AboutTestimonials/>
  </div>
  )
}

export default About

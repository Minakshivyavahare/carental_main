import React from 'react'
import Hero from '../service/Hero';
import Services from '../service/Services';
import Deals from '../service/Deals';
import Testimonials from '../service/Testimonials';
 import Offer from '../service/Offer';
import Stats from '../service/Stats';
 import Events from '../service/Events';

export const MainService = () => {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Hero />
      <Services />
      <Deals/>
      <Testimonials />
      <Offer />
      <Stats />
      <div className="border border-gray-800 h-0.5"></div>
      <Events />
    </div>
  )
}

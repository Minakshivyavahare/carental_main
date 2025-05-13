import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import hero from "../assets/service_hero.jpg";

const ServiceHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-30 pb-20 sm:px-8 lg:px-16">
    <img
      src={hero}
      alt="Hero Background"
      className="object-cover rounded-xl brightness-85 h-50 md:h-auto"
    />
    <div className="absolute md:left-90 md:top-1/2 top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white font-family-urbanist drop-shadow-lg md:ml-20 ml-7">
        Services
      </h1>
    </div>
    <div className="absolute md:bottom-14 sm:bottom-16 left-1/2 transform -translate-x-1/2 hidden sm:block">
      <nav className="flex items-center space-x-2 text-white bg-[#171717] bg-opacity-50 px-4 py-3 rounded-xl border border-gray-700">
        <a href="#" className="hover:text-[#82b440] font-medium text-xs sm:text-base font-family-urbanist text-gray-200">
          Home
        </a>
        <span>
          <FaChevronRight className="text-gray-500 font-light" />
        </span>
        <a href="#" className="hover:text-[#82b440] font-medium text-xs sm:text-base font-family-urbanist text-gray-200">
          Services
        </a>
      </nav>
    </div>
  </section>
  )
}

export default ServiceHero
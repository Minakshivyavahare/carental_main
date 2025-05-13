import React, { useEffect } from 'react'
import ServiceHero from '../component/ServiceHero'
import ServiceMid from '../component/ServiceMid'


const Service = () => {
  
   useEffect(()=>{
      window.scrollTo(0,0)
      },[])
  return (
    <div className="min-h-screen bg-[#171717]">
    <ServiceHero/>
    <ServiceMid/>
  
  </div>
  )
}

export default Service
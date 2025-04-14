import React from 'react'
import City from './City'

const AllOverIndia = () => {
  return (
    <div className='pt-20 px-5 pb-20 bg-[#313131]'>
      <div className='flex items-center justify-center'>
      <div class="h-[3px] w-[90px] bg-gradient-to-r from-transparent via-white to-transparent" style={{clipPath:"polygon(0% 50%, 100% 0%, 100% 100%)"}}></div>
        <h3 className='text-center font-bold text-white text-4xl py-4' >Available Car Rentals</h3>
        <div class=" h-[3px]  w-[90px] bg-gradient-to-r from-transparent via-white to-transparent" style={{clipPath:"polygon(0% 50%, 100% 0%, 100% 100%)"}}></div>
      </div>
      
        <City/>
       
    </div>
  )
}

export default AllOverIndia
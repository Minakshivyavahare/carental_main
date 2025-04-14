import React, { useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useDispatch } from 'react-redux';
import { getSearchCar } from '../features/AllCar/carSlice';
import { useNavigate } from 'react-router-dom';
import { Search, Car, Calendar, MapPin, TrendingUp, Shield, Fuel, Settings, Star } from 'lucide-react';



const Time = () => {

   const [text,setText] = useState("")
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchCar(text))
    navigate("/search/coinQuery")

   }


   

 


  return (
 <>

<div className=" bg-[#313131]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find Your Perfect Ride
          </h1>
          <p className="text-lg text-gray-400">
            Luxury vehicles, unbeatable prices, seamless experience
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center">
                <Search className="h-6 w-6 text-[#82B440]" />
              </div>
              <input
                type="text"
                value={text}
                onChange={(e) =>setText(e.target.value)}
                className="w-full pl-16 pr-32 py-6 text-xl rounded-2xl
                         bg-[#191919] text-white placeholder
                         border-2 border-gray-700
                         focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20
                         transition duration-300"
                placeholder="Search for your dream car..."
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2
                         px-6 py-3 bg-[#82B440] text-white rounded-xl
                         transition duration-300
                         shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                         text-lg font-semibold"
              >
                Search
              </button>
            </div>
          </form>
        </div>

       
      
      </div>
    </div>
    
    {/* <div className='flex justify-center w-[100%] items-center p-10 bg-[#313131]'>
<div className='w-[90%] md:w-[80%] flex justify-center items-center h-[auto] bg-[#191919] rounded-xl '>
<div className='time-box-inside w-[100%] mx-[30px] flex-col flex justify-center items-center  bg-[#191919]'>
   
    <div className='time-box-bottom my-[25px] py-[20px] border  rounded-xl border-[rgba(255,255,255,0.1)] w-full flex flex-col md:flex-row items-center justify-between  px-3'>
       
     
      
    <div className='flex justify-center bg-[#70f46d] w-full items-center text-black p-2 rounded-md'>
      <form className='flex items-center  w-full px-3 py-2 rounded-md' onSubmit={handleSubmit}>
        <CiSearch className='text-2xl text-gray-500' />
        <input
          type='text'
          placeholder='Find a Vehicle'
          value={text}
          onChange={(e) =>setText(e.target.value)}
         
          className='w-full bg-transparent outline-none text-2xl px-2 text-black'
        />
      </form>
    </div>
     
      
    </div>
   
</div>

</div>

    </div> */}
    </>
  )
}

export default Time
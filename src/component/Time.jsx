import React, { useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useDispatch } from 'react-redux';
import { getSearchCar } from '../features/AllCar/carSlice';
import { useNavigate } from 'react-router-dom';



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
 
    <div className='flex justify-center w-[100%] items-center p-10 bg-[#313131]'>
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

    </div>
  )
}

export default Time
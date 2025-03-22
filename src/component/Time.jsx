import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const Time = () => {

    const [pickupDate, setPickupDate] = useState(new Date())
    const [dropDate, setDropDate] = useState(new Date())
  return (
 
    <div className='flex justify-center w-[100%] items-center p-10 bg-[#313131]'>
<div className='w-[90%] md:w-[80%] flex justify-center items-center h-[auto] bg-[#191919] rounded-xl '>
<div className='time-box-inside w-[100%] mx-[30px] flex-col flex justify-center items-center  bg-[#191919]'>
    <div className='time-box-top flex  justify-between px-[20px] py-[30px] items-center  bg-[#191919] w-full'  >
        <div className='flex flex-nowrap sm:flex-wrap '>
            <button className='bg-[#70f46d] rounded-md p-2 px-[15px] font-sm  mx-2 text-10px md:text-[15px] text-black'>ALL Cars</button>
            <button className='rounded-md p-2 px-[15px] font-sm mx-2 text-white hover:bg-[#70f46d] hover:text-black'>New Cars</button>
            <button className='rounded-md p-2 px-[15px] font-sm mx-2 text-white hover:bg-[#70f46d] hover:text-black'>Used Cars</button>
        </div>
        <div className='hidden md:flex  items-center text-white text-[12px]  gap-[10px] '> <FaUserAlt /> Need Help ? </div>
    </div>
    <div className='time-box-bottom my-[25px] py-[20px] border  rounded-xl border-[rgba(255,255,255,0.1)] w-full flex flex-col md:flex-row items-center justify-between  px-3'>
        <div className='text-gray-400 text-[15px]'>Pick Up Date & Time  <div><DatePicker className='text-white border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] ' selected={pickupDate} onChange={(date)=> setPickupDate(date)}/></div></div>
        <div className='flex item-center'><hr className='h-[none] md:h-[40px] border border-[rgba(255,255,255,0.1)]'/></div>
        <div className='text-gray-400 text-[15px]'>DropOff Up Date & Time  <div><DatePicker className='text-white border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] ' selected={dropDate} onChange={(date)=> setDropDate(date)}/></div></div>
       <div> <button className='w-[200px] bg-[#70f46d] px-[10px] rounded-md py-[15px] flex flex-row items-center gap-[5px]'> <CiSearch className='text-2xl' />Find a Vehicle</button></div> 
      
    </div>
   
</div>

</div>

    </div>
  )
}

export default Time
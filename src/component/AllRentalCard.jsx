import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";


const AllRentalCard = ({car}) => {
   
  console.log("car",car);
  
  return (
    <div className="bg-white text-start p-6 rounded-lg shadow-md mt-5 ">
            
    <div class="p-5 bg-[#000000] ">
      <img src={car?.car?.image} />
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
        {car?.car?.name}
        </h5>
      </a>
      <p class="mb-3 font-normal text-[#F2F2F2] flex items-center gap-1">
        <IoLocationSharp />
    {car?.car?.category}
      </p>
      <div className="flex w-full  text-white py-1">
        <div className="w-1/2">
          <span className="flex items-center gap-2 py-1">
            <IoSpeedometerSharp className="text-[#F2F2F2]" />
            <p className="text-[#F2F2F2]">25,100 miles</p>
          </span>
          <span className="flex items-center gap-2 py-1">
            <BsFillFuelPumpFill className="text-[#F2F2F2]" />
            <p className="text-[#F2F2F2]">{car?.car?.fuelType}</p>
          </span>
        </div>
        <div className="w-1/2">
          <span className="flex items-center gap-2 py-1">
            <FaGear className="text-[#F2F2F2]" />
            <p className="text-[#F2F2F2]">Automatic</p>
          </span>
          <span className="flex items-center gap-2 py-1">
            <MdAirlineSeatReclineNormal className="text-[#F2F2F2]" />
            <p className="text-[#F2F2F2]">7 seats</p>
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="flex items-center gap-2 text-[#F2F2F2]">
          <h2 className="text-[#F2F2F2]">From</h2>
          <h1 className="text-xl font-bold text-[#F2F2F2]">₹ {car?.car?.rate}</h1>
        </span>
      </div>
    </div>
  </div>
  )
}

export default AllRentalCard
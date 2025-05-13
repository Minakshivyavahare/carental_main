import React from 'react'
import { useSelector } from 'react-redux'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


const SearchCar = () => {

    const {searchCar,isLoading} = useSelector((state) => state.car)

    
    

   
    
  return (
     <div className='bg-[#171717] grid grid-cols-1 gap-7 w-full h-full p-20 md:grid-cols-2 xl:grid-cols-3'>
      {
        isLoading ? Array.from({length : 6}).map((_,index) => <Skeleton key={index} height={50} baseColor="#202020" highlightColor="#444"/>)
        :
       
         searchCar.map((car) =>
          <>
           <div class="  h-fit border border-gray-500 rounded-lg shadow-sm ">
        <a href="#">
          <img
            class="rounded-t-lg w-full h-50"
            src={car?.image}
          ></img>
        </a>
        <div class="p-5 bg-[#000000] rounded-2xl">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#F2F2F2]">
            {car?.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-[#F2F2F2] flex items-center gap-1">
            <IoLocationSharp />
           {car?.category}
          </p>
          <div className="flex w-full  text-white py-1">
            <div className="w-1/2">
              <span className="flex items-center gap-2 py-1">
                <IoSpeedometerSharp className="text-[#F2F2F2]" />
                <p className="text-[#F2F2F2]">25,100 miles</p>
              </span>
              <span className="flex items-center gap-2 py-1">
                <BsFillFuelPumpFill className="text-[#F2F2F2]"/>
                <p className="text-[#F2F2F2]">{car?.fuelType}</p>
              </span>
            </div>
            <div className="w-1/2">
              <span className="flex items-center gap-2 py-1">
                <FaGear className="text-[#F2F2F2]"/>
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
              <h1 className="text-xl font-bold text-[#F2F2F2]">₹ {car?.rate}</h1>
            </span>
            <Link to={`/cardetail/${car?._id}`} className=" p-2 rounded-md font-bold bg-[#222222] text-white hover:bg-green-400 hover:text-black">
              View Details
            </Link>
          </div>
        </div>
      </div>
         </>)
      
      }
     
     
    </div>
  )
}

export default SearchCar
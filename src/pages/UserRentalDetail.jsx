import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const UserRentalDetail = () => {

const {adminrental, isLoading, isError} = useSelector(state => state.admin)



const location = useLocation();

const user = location.state?.user;


 useEffect(()=>{
    window.scrollTo(0,0)
    },[])



  return (

    <>
    
    {/* my code */}
    <div className="bg-[#171717] min-h-screen pt-30 px-4 flex justify-center items-start">
  <div className="w-full max-w-6xl">
    <h2 className="text-3xl font-bold text-white mb-6">User Rentals</h2>

    <div className="overflow-x-auto bg-[#1f1f1f] rounded-lg shadow-xl">
      <table className="min-w-full text-sm md:text-base text-left text-gray-300">
        <thead className="bg-[#2c2c2c] text-gray-400">
          <tr>
            <th className="py-3 px-4">Pickup Date</th>
            <th className="py-3 px-4">Drop Date</th>
            <th className="py-3 px-4">Car Name</th>
            <th className="py-3 px-4">Car Model</th>
            <th className="py-3 px-4">Brand</th>
            <th className="py-3 px-4">Year</th>
          </tr>
        </thead>
        <tbody>
          {user?.rentals?.length > 0 ? (
            user.rentals.map((rental, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#262626]" : "bg-[#1f1f1f]"
                } border-b border-gray-700 hover:bg-[#333] transition`}
              >
                <td className="py-3 px-4">{new Date(rental.pickupDate).toLocaleDateString('en-IN')}</td>
                <td className="py-3 px-4">{new Date(rental.dropDate).toLocaleDateString('en-IN')}</td>
                <td className="py-3 px-4">{rental.car?.name || "N/A"}</td>
                <td className="py-3 px-4">{rental.car?.model || "N/A"}</td>
                <td className="py-3 px-4">{rental.car?.brand || "N/A"}</td>
                <td className="py-3 px-4">{rental.car?.year || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr className="bg-[#1f1f1f] border-b border-gray-700">
              <td colSpan="6" className="py-6 px-4 text-center text-gray-500">
                No rentals available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

    {/* <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Rentals</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Pickup Date</th>
              <th className="py-2 px-4 text-left">Drop Date</th>
              <th className="py-2 px-4 text-left">Car Name</th>
              <th className="py-2 px-4 text-left">Car Model</th>
              <th className="py-2 px-4 text-left">Brand</th>
              <th className="py-2 px-4 text-left">Year</th>
            </tr>
          </thead>
          <tbody>
            {
               user?.rentals?.length > 0 ? (
              user?.rentals?.map((rental, rentalIndex) => (
                <tr key={`${rentalIndex}`} className="border-b hover:bg-gray-100">
                 
                  <td className="py-2 px-4">{rental.pickupDate}</td>
                  <td className="py-2 px-4">{rental.dropDate}</td>
                  <td className="py-2 px-4">{rental.car?.name || "N/A"}</td>
                  <td className="py-2 px-4">{rental.car?.model || "N/A"}</td>
                  <td className="py-2 px-4">{rental.car?.brand || "N/A"}</td>
                  <td className="py-2 px-4">{rental.car?.year || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr className="border-b hover:bg-gray-100">
            <td colSpan="6" className="py-2 px-4 text-center text-gray-500">
            No rentals available
          </td>
         </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </div> */}

    </>
  
 
  )
}

export default UserRentalDetail
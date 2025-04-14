import React from 'react'
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

console.log("hello user", location);





  return (

    <>
    
    {/* my code */}
    <div className="container mx-auto p-4">
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
    </div>

    </>
  
 
  )
}

export default UserRentalDetail
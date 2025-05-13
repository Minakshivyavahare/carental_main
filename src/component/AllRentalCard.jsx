import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Calendar } from "lucide-react";

const AllRentalCard = ({ car }) => {
  

  return (
    

<div className="bg-[#1E2939] text-start p-6 rounded-xl shadow-lg mt-5 transition-all duration-300 hover:shadow-2xl">
  <div className="space-y-4">
    <img
      src={car?.car?.image}
      alt={car?.car?.name}
      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition duration-300"
    />

    <h5 className="text-2xl font-bold tracking-tight text-white pt-2">
      {car?.car?.name}
    </h5>

    <p className="flex items-center gap-2 text-sm text-gray-300">
      <IoLocationSharp className="text-[#facc15]" />
      {car?.car?.category}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white mt-4">
      {/* Left Column */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <IoSpeedometerSharp className="text-[#F2F2F2]" />
          <p>25,100 miles</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <BsFillFuelPumpFill className="text-[#F2F2F2]" />
          <p>{car?.car?.fuelType}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1 text-sm">
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span className="text-white">Pickup:</span>
          <p className="text-[#F2F2F2] font-medium ml-2">
            {new Date(car?.pickupDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
            })}
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <FaGear className="text-[#F2F2F2]" />
          <p>Automatic</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MdAirlineSeatReclineNormal className="text-[#F2F2F2]" />
          <p>7 seats</p>
        </div>
        <div className="flex flex-wrap items-center gap-1 text-sm">
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span className="text-white">Drop:</span>
          <p className="text-[#F2F2F2] font-medium ml-2">
            {new Date(car?.dropDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>

    {/* Footer Price */}
    <div className="w-full flex justify-between items-center pt-6 border-t border-gray-600 mt-4">
      <span className="flex items-center gap-2 text-[#F2F2F2]">
        <h2 className="text-sm">From</h2>
        <h1 className="text-xl font-bold">₹ {car?.car?.rate}</h1>
      </span>
    </div>
  </div>
</div>
    // <div className="bg-[#1E2939] text-start p-6 rounded-lg shadow-md mt-5 ">
    //   <div class="p-5 ">
    //     <img src={car?.car?.image} />
    //     <a href="#">
    //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-white pt-3">
    //         {car?.car?.name}
    //       </h5>
    //     </a>
    //     <p class="mb-3 font-normal text-[#F2F2F2] flex items-center gap-1">
    //       <IoLocationSharp />
    //       {car?.car?.category}
    //     </p>
    //     <div className="flex w-full  text-white py-1">
    //       <div className="w-1/2">
    //         <span className="flex items-center gap-2 py-1">
    //           <IoSpeedometerSharp className="text-[#F2F2F2]" />
    //           <p className="text-[#F2F2F2]">25,100 miles</p>
    //         </span>
    //         <span className="flex items-center gap-2 py-1">
    //           <BsFillFuelPumpFill className="text-[#F2F2F2]" />
    //           <p className="text-[#F2F2F2]">{car?.car?.fuelType}</p>
    //         </span>
    //         <span className="flex flex-wrap items-center gap-1 py-1 text-sm sm:text-base">
    //           <span className="text-white flex items-center gap-1">
    //             <Calendar className="w-4 h-4 text-yellow-400" />
    //             pickup date:
    //           </span>
    //           <p className="text-[#F2F2F2] font-medium mx-4">
    //             {new Date(car?.pickupDate).toLocaleDateString("en-IN", {
    //               day: "2-digit",
    //               month: "short",
    //               year: "2-digit",
    //             })}
    //           </p>
    //         </span>
             
          
    //       </div>
    //       <div className="w-1/2">
    //         <span className="flex items-center gap-2 py-1">
    //           <FaGear className="text-[#F2F2F2]" />
    //           <p className="text-[#F2F2F2]">Automatic</p>
    //         </span>
    //         <span className="flex items-center gap-2 py-1">
    //           <MdAirlineSeatReclineNormal className="text-[#F2F2F2]" />
    //           <p className="text-[#F2F2F2]">7 seats</p>
    //         </span>
    //         <span className="flex flex-wrap items-center gap-1 py-1 text-sm sm:text-base">
    //           <span className="text-white flex items-center gap-1">
    //             <Calendar className="w-4 h-4 text-yellow-400" />
    //             Drop date:
    //           </span>
    //           <p className="text-[#F2F2F2] font-medium mx-6">
    //             {new Date(car?.dropDate).toLocaleDateString("en-IN", {
    //               day: "2-digit",
    //               month: "short",
    //               year: "2-digit",
    //             })}
    //           </p>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="w-full flex justify-between items-center">
    //       <span className="flex items-center gap-2 text-[#F2F2F2] pt-7">
    //         <h2 className="text-[#F2F2F2]">From</h2>
    //         <h1 className="text-xl font-bold text-[#F2F2F2]">
    //           ₹ {car?.car?.rate}
    //         </h1>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllRentalCard;

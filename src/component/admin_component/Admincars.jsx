
import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Adminedit, Deleterental, Updaterental } from "../../features/admin/AdminSlice";
import { rentalcarremove } from "../../features/AllCar/carSlice";


const AdminCars = ({car}) => {
  const dispatch=useDispatch()
  const  {isSuccess}=useSelector(state=>state.admin)

  const handleedit=(car)=>{

    dispatch(Adminedit(car))
  }

  const handleDelete=(id)=>{
    dispatch(Deleterental(id))
    if(isSuccess){
      dispatch(rentalcarremove(id))
    }
  }



  return (
    <div class="  h-fit border border-gray-500 rounded-lg shadow-sm ">
    <a href="#">
      <img
        class="rounded-t-lg   w-full h-50"
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
       {car.category}
      </p>
      <div className="flex w-full  text-white py-1">
        <div className="w-1/2">
          <span className="flex items-center gap-2 py-1">
            <IoSpeedometerSharp className="text-[#F2F2F2]" />
            <p className="text-[#F2F2F2]">25,100 miles</p>
          </span>
          <span className="flex items-center gap-2 py-1">
            <BsFillFuelPumpFill className="text-[#F2F2F2]"/>
            <p className="text-[#F2F2F2]">{car.fuelType}</p>
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
          <h1 className="text-xl font-bold text-[#F2F2F2]">₹ {car.rate}</h1>
        </span>
        
      </div>
<div className="mt-2 space-x-6">

        <button onClick={()=>handleDelete(car._id)} className=" p-2 rounded-md font-bold bg-[#222222] text-white hover:bg-green-400 hover:text-black">
          Delete
        </button>
        <Link to={`/adminaddnewcar`} state={car}   onClick={()=>handleedit(car) }   className=" p-2 rounded-md font-bold bg-[#222222] text-white hover:bg-green-400 hover:text-black">
        Update
        </Link>
</div>
    </div>
  </div>
  )
}

export default AdminCars


import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react'
import AdminDsh from "../component/admin_component/AdminDsh";
import {  useSelector } from "react-redux";




const AdminDashboard = () => {


const {adminrental , isLoading} = useSelector(state => state.admin)

useEffect(() => {
 window.scrollTo(0,0)
},[])

let totaluser =  adminrental?.totalUsers
let totalrental =  adminrental?.totalRentals

  
//console.log("rental" ,selectedUser.rentals[0].pickupDate);
  return (
 
 <div className="w-full  sm:w-full md:flex h-full bg-[#313131] pt-30">
      {/* Sidebar */}
      <div className="w-full flex p-4 shadow-md items-center justify-between md:justify-start md:flex-col md:w-1/4 md:p-4 sm:flex sm:flex-row sm:w-full">
        <div className=" text-centers sm:text-center md:text-center md:mb-3 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png "
            alt="Profile"
            className="w-10 sm:w-15 md:w-30  "
          />
          <div className="">
            <h2 className="text-[8px] md:text-lg text-white font-semibold sm:text-[10px]">
              Imran
            </h2>

            <p className="text-[7px]  text-white text-center md:text-sm text-gray-500  md:block">
              CEO, Oxish
            </p>
          </div>
        </div>

        {/* menu button for sm size */}
         <AdminDsh/>
       
        <nav className="md:mt-5 md:justify-evenly hidden md:block  w-full flex-row sm:items-center sm:w-full">
          <a
            href="#"
            className="sm:w-auto  block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold bg-blue-600 text-white md:text-lg md:bg-white md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            Dashboad
          </a>
          <Link
            to={"/adminaddnewcar"}
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:mb-3 font-semibold bg-blue-600 text-white  text-[13px] md:text-lg md:bg-white md:pl-2 shadow-lg md:shadow-lg rounded-lg md:rounded-ss-none"
          >
            Add Cars for Rental
          </Link>
            <Link
            to="/adminusertable"
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold bg-blue-600 text-white md:text-lg md:bg-white md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            All Users Data
          </Link>
          <Link
            to={"/Adminallrental5"}
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold  md:text-lg md:bg-white md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            all rental car
          </Link>

          <a
            href="#"
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold bg-blue-600 text-white md:text-lg md:bg-white md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            Car-Brands
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-7 md:w-full">
        <div className="mb-2 md:flex md:justify-between h-auto">
          <h1 className="text-[15px] text-white sm:text-[25px] text-center text-2xl font-bold md:text-start md:text-5xl font-serif">
            ADMIN Dashboard
          </h1>
         
        </div>

        {/* Stats Cards */}
        <div className="flex">
          <div className="grid grid-cols-1 sm:mt-5 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mt-10 md:w-full">
            <div className="bg-[#191919] text-start p-6 rounded-lg shadow-md ">
              <p className="text-white md:text-2xl">Total Users</p>
              {/* {totaluser} */}
              <h2 className=" font-bold md:text-2xl md:mt-2">{totaluser}
              </h2>
              <p className="text-sm text-white md:mt-2 md:text-[18px]">
                All running & completed Cars
              </p>
            </div>

            <div className="bg-[#191919] p-6 rounded-lg shadow-md">
              <p className="text-white md:text-2xl">All Total Rentals</p>
              <h2 className="text-2xl text-white font-bold  md:mt-2">{totalrental}</h2>
            </div>

            <div className="bg-[#191919] p-6 rounded-lg shadow-md ">
              <p className="text-white md:text-2xl">Running Cars</p>
              <h2 className=" text-white text-2xl font-bold md:mt-2">923</h2>
              <p className="text-sm text-blue-500 md:mt-2 md:text-[18px]">
                +8% Running Car
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------new grid------------- */}
        <div className="grid grid-cols-2 gap-4">

        </div>
      </div>
    </div>

  )
}

export default AdminDashboard




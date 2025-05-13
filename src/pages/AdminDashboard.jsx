
import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react'
import AdminDsh from "../component/admin_component/AdminDsh";
import {  useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/auth/AuthSlice";
import Loader from "../component/Loader";




const AdminDashboard = () => {


const {adminrental , isLoading, isError,message} = useSelector(state => state.admin)
const {user} = useSelector((state) => state.auth)
const dispatch = useDispatch()

const handleLogout = () => {
   dispatch(logOut())


 }

useEffect(() => {
 window.scrollTo(0,0)
},[])

let totaluser =  adminrental?.totalUsers
let totalrental =  adminrental?.totalRentals

if(isLoading){
  return(
    <Loader/>
  )
}


  return (
 
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#171717] text-white">
  {/* Sidebar */}
  <aside className="w-full md:w-1/4 bg-[#1f1f1f] shadow-lg p-4 flex flex-col mt-10 items-center">
    {/* Profile */}
    <div className="flex flex-col items-center mb-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Profile"
        className="w-20 h-20 rounded-full mb-2"
      />
      <h2 className="text-lg font-semibold">{user?.name}</h2>
      <p className="text-gray-400 text-sm">{user?.isAdmin ? "Admin" : "CEO"}</p>
    </div>

    {/* Menu Links */}
    <nav className="w-full space-y-4">
      <a
        href="#"
        className="block w-full px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Dashboard
      </a>
      <Link
        to="/adminaddnewcar"
        className="block w-full px-4 py-3 bg-[#262626] text-white rounded hover:bg-blue-600 transition"
      >
        Add Cars for Rental
      </Link>
      <Link
        to="/adminusertable"
        className="block w-full px-4 py-3 bg-[#262626] text-white rounded hover:bg-blue-600 transition"
      >
        All Users Data
      </Link>
      <Link
        to="/Adminallrental5"
        className="block w-full px-4 py-3 bg-[#262626] text-white rounded hover:bg-blue-600 transition"
      >
        All Rental Cars
      </Link>

       <Link
        to="/logout"
        onClick={() => handleLogout()}
        className="block w-full px-4 py-3 bg-[#262626] text-white rounded hover:bg-blue-600 transition"
      >
        Logout
      </Link>
    </nav>
  </aside>

  {/* Main Content */}
  <main className="flex-1 p-6 md:p-10">
    {/* Heading */}
    <div className="mb-8 mt-10">
      <h1 className="text-lg md:text-2xl font-bold font-serif">ADMIN Dashboard</h1>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-[#262626] p-6 rounded-lg shadow-md">
        <p className="text-xl">Total Users</p>
        <h2 className="text-3xl font-bold mt-2">{totaluser}</h2>
        <p className="text-gray-400 mt-1 text-sm">All running & completed Cars</p>
      </div>

      <div className="bg-[#262626] p-6 rounded-lg shadow-md">
        <p className="text-xl">All Total Rentals</p>
        <h2 className="text-3xl font-bold mt-2">{totalrental}</h2>
      </div>

      <div className="bg-[#262626] p-6 rounded-lg shadow-md">
        <p className="text-xl">Running Cars</p>
        <h2 className="text-3xl font-bold mt-2">923</h2>
        <p className="text-blue-500 mt-1 text-sm">+8% Running Car</p>
      </div>
    </div>
  </main>
</div>



  )
}

export default AdminDashboard




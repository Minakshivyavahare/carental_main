import React, { useState } from 'react';
import Sidebar from '../admin_component/Sidebar'
import Header from '../admin_component/Header'
import Dashboard from '../admin_component/Dashboard'

import { FaBars } from 'react-icons/fa';

const AdminMain = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
  return (
    <div className="flex min-h-screen bg-gray-900 py-20 ">
      <div
        className={`fixed inset-y-0 left-0 z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:inset-0 w-64 bg-gray-800 border-r border-gray-700 flex-shrink-0`}
      >
       <Sidebar/>
      </div>
      <div className=" flex-1 flex flex-col">
        <button
          className="md:hidden p-4 text-white focus:outline-none w-full bg-gray-900 md:border-t-0"
          onClick={toggleSidebar}
        >
          <FaBars className="text-xl" />
        </button>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}
        <Header />
        <Dashboard googleMapsApiKey={googleMapsApiKey} />
      </div>
    </div>
  )
}

export default AdminMain
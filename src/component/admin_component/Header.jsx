import React from "react";
import { FaSun } from "react-icons/fa";
import { FiBell, FiUser } from "react-icons/fi"; // Using react-icons for icons

const Header = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-700 space-y-2 md:space-y-0">
      <div className="text-lg font-semibold">Dashboards</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Results..."
            className="bg-gray-800 text-white p-2 pl-8 rounded-lg focus:outline-none w-64"
          />
          <span className="absolute left-2 top-2 text-gray-400">🔍</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <FiBell className="text-gray-400 text-xl hover:text-teal-400" />
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <FaSun className="text-gray-400 text-xl hover:text-teal-400" />
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <FiUser className="text-gray-400 text-xl hover:text-teal-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

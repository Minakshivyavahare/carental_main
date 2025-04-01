import React from "react";
import {
  FaTachometerAlt,
  FaGamepad,
  FaChartLine,
  FaShoppingCart,
  FaBitcoin,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboards", icon: <FaTachometerAlt /> },
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "Sales", icon: <FaChartLine /> },
    { name: "Analytics", icon: <FaChartLine /> },
    { name: "Ecommerce", icon: <FaShoppingCart /> },
    { name: "Crypto", icon: <FaBitcoin /> },
    { name: "NFT", icon: null },
    { name: "CRM", icon: <FaUser /> },
   
  ];

  return (
    <div className=" h-full  bg-gray-900 text-white p-4">
     
      <nav>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`py-2 px-4 rounded-lg mb-2 flex items-center ${
              item.name === "Dashboards" ? "bg-teal-500" : "hover:bg-gray-700"
            } cursor-pointer`}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.name}
          </div>
        ))}
      </nav>
      <div className="flex items-center p-2 hover:bg-gray-700 rounded">
        <FaSignOutAlt className="mr-2" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;

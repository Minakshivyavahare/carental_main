import { TiThMenu } from "react-icons/ti";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import AllCarMain from "../component/AllCarMain";

import AllRentalCard from "../component/AllRentalCard";
import { useSelector } from "react-redux";


const Dashboard = () => {
  const allRentals = useSelector((state) => state.rental);


 
  return (
    <div className="w-full  sm:w-full md:flex h-full bg-[#101828] text-white pt-30">
      {/* Sidebar */}
      <div className="w-full flex p-4 shadow-md items-center justify-between md:justify-start md:flex-col md:w-1/4 md:p-4 sm:flex sm:flex-row sm:w-full">
        <div className=" text-centers sm:text-center md:text-center md:mb-3 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png "
            alt="Profile"
            className="w-10 sm:w-15 md:w-30  "
          />
          <div className="">
            <h2 className="text-[8px] md:text-lg font-semibold sm:text-[10px]">
              John Smith
            </h2>

            <p className="text-[7px] text-center md:text-sm text-white  md:block">
              CEO, Oxish
            </p>
          </div>
        </div>

        {/* menu button for sm size */}

        <Menu as="div" className="relative inline-block text-left md:hidden ">
          <div className="">
            <MenuButton>
              <TiThMenu className=" block md:hidden  w-7 h-full " />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block  px-4 py-2 mb-2 shadow-lg rounded-sm text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Dashboard
              </a>
            </MenuItem>

            

            <MenuItem>
              <Link
                to={"/useraddcar"}
                className="block px-4 py-2 mb-2 shadow-lg rounded-sm text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Add Cars for rentals
              </Link>
            </MenuItem>

           

           

           
            

           

           

            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm shadow-lg rounded-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Logout
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <nav className="md:mt-5 md:justify-evenly hidden md:block w-full flex-row sm:items-center sm:w-full">
          <a
            href="#"
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold bg-[#1E2939] text-white md:text-lg  md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            Dashboard
          </a>
          <Link
            to={"/useraddcar"}
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:mb-3 font-semibold bg-[#1E2939] text-white  text-[13px] md:text-lg  md:pl-2 shadow-lg md:shadow-lg rounded-lg md:rounded-ss-none"
          >
            Add Cars for rentals
          </Link>
          <a
            href="#"
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold bg-[#1E2939]  text-white md:text-lg md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            Transactions
          </a>
          <a
            href="#"
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold text-white md:text-lg bg-[#1E2939] md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            Fuel Type
          </a>

          <a
            href="#"
            className="sm:w-auto block text-center md:text-start md:text-blue-600 md:h-9 md:justify-center md:mb-3 font-semibold  text-white md:text-lg bg-[#1E2939] md:pl-2 shadow-lg md:shadow-lg  md:rounded-sm"
          >
            Car-Brands
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-7 md:w-full">
        <div className="mb-2 md:flex md:justify-between h-auto">
          <h1 className="text-[15px] sm:text-[25px] text-center text-2xl font-bold md:text-start md:text-5xl font-serif">
            Dashboard
          </h1>
        
        </div>

     
        {/* ------------------------new grid------------- */}
        <div className="grid grid-cols-2 gap-4">
          {allRentals?.allRental?.filter((rental) => rental.car)?.length > 0 ? (
            allRentals.allRental
              .filter((rental) => rental.car)
              .map((rental) => <AllRentalCard car={rental} key={rental._id} />)
          ) : (
            <p className="py-10">No Rentals Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

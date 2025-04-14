import React from 'react'
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";


const AdminDsh = () => {
  return (
    <div>
         <Menu as="div" className="relative inline-block text-left md:hidden">
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
                className="block px-4 py-2 mb-2 shadow-lg rounded-sm text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                 Dashboard
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 mb-2 shadow-lg rounded-sm text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                History
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
                className="block px-4 py-2 text-sm mb-2 shadow-lg rounded-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Fuel Type
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm mb-2 shadow-lg rounded-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Transaction
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm mb-2 shadow-lg rounded-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Car Brands
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm mb-2 shadow-lg rounded-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Setting
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm mb-2 shadow-lg rounded-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Report
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 mb-2 shadow-lg rounded-sm text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Help
              </a>
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
    </div>
  )
}

export default AdminDsh
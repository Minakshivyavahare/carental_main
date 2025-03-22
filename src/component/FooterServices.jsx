import React from "react";
import logo from "../assets/car.png";
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
const FooterServices = () => {
  return (
    <>
      <div className="h-auto  w-5/6   grid-cols-1  md:grid grid-cols-4 w-5/6 m-auto md:py-10">
        <div className=" ">
          <ul className=" flex flex-col gap-3 font-semibold mt-10">
            <li className="flex justify-start items-center">
              <img src={logo} className="size-15" alt="" />
              <p className="text-3xl font-semibold">Carento</p>
            </li>
            <li className="flex gap-1">
              <i>
                <SlLocationPin />
              </i>
              <p>2345 Oakwood Drive,Suite 18, San Francisso California US</p>
            </li>
            <li className="flex gap-1 items-center">
              <i>
                <FaRegClock />
              </i>
              <p>Hours: 8:00-17:00, Mon-Sat</p>
            </li>
            <li className="flex gap-1 items-center">
              <i>
                <MdOutlineMailOutline />
              </i>
              <p>support@carento.com</p>
            </li>
            <li className="flex gap-1 items-center">
              <i>
                <BsTelephoneInbound />
              </i>
              <p>Need help? Call us</p>
            </li>
            <li className="text-green-700 text-xl font-semibold">
              +1 222-555-33-99
            </li>
          </ul>
        </div>
        <div className="mt-12 md:flex flex-col justify-center items-center">
          <ul className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">Company</p>
            <li className="hover:text-green-700">
              <a href="">About Us</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Our Awards</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Agencies</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Copyright Notices</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Terms of Use</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Privacy Notice</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Lost & Found</a>
            </li>
          </ul>
        </div>
        <div className=" mt-12 md:flex flex-col justify-center items-center">
          <ul className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">Our Services</p>
            <li className="hover:text-green-700">
              <a href="">Car Rental Services</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Vechicle Leasing Options</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Long-Term Car Rentals</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Car Sales and Trade-Ins</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Luxury Car Rentals</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Rent-to-Own Programs</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Fleet Management solutions</a>
            </li>
          </ul>
        </div>
        <div className="mt-12 md:flex flex-col justify-center items-center ">
          <ul className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">Our Partners</p>
            <li className="hover:text-green-700">
              <a href="">Affiliates</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">AARP members</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Travel Agents</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Points Programs</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Military & Veterans</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Work with us</a>
            </li>
            <li className="hover:text-green-700">
              <a href="">Advertise with us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-5/6 mt-10  border-2 border-gray-900 md:w-5/6  m-auto mt-1"></div>
    </>
  );
};

export default FooterServices;

import React from "react";
import logo from "../assets/car_footer.png";
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
const FooterServices = () => {
  return (
    <>
    <div className="w-11/12 md:w-5/6 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <ul className="flex flex-col gap-4 font-semibold">
            <li className="flex items-center gap-2">
              <img
                src={logo}
                className="w-[140px] h-[75px] "
                alt="Carento logo"
              />
            </li>
            <li className="flex items-start gap-2">
              <SlLocationPin className="mt-1" />
              <p>2345 Oakwood Drive, Suite 18, San Francisco, California US</p>
            </li>
            <li className="flex items-center gap-2">
              <FaRegClock />
              <p>Hours: 8:00–17:00, Mon–Sat</p>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMailOutline />
              <p>support@carento.com</p>
            </li>
            <li className="flex items-center gap-2">
              <BsTelephoneInbound />
              <p>Need help? Call us</p>
            </li>
            <li className="text-green-700 text-lg font-semibold">
              +1 222-555-33-99
            </li>
          </ul>
        </div>
 
        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-2">Company</p>
          <ul className="flex flex-col gap-3">
            {[
              "About Us",
              "Our Awards",
              "Agencies",
              "Copyright Notices",
              "Terms of Use",
              "Privacy Notice",
              "Lost & Found",
            ].map((item) => (
              <li key={item} className="hover:text-green-700">
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Services */}
        <div>
          <p className="text-xl font-semibold mb-2">Our Services</p>
          <ul className="flex flex-col gap-3">
            {[
              "Car Rental Services",
              "Vehicle Leasing Options",
              "Long-Term Car Rentals",
              "Car Sales and Trade-Ins",
              "Luxury Car Rentals",
              "Rent-to-Own Programs",
              "Fleet Management Solutions",
            ].map((item) => (
              <li key={item} className="hover:text-green-700">
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Partners */}
        <div>
          <p className="text-xl font-semibold mb-2">Our Partners</p>
          <ul className="flex flex-col gap-3">
            {[
              "Affiliates",
              "AARP members",
              "Travel Agents",
              "Points Programs",
              "Military & Veterans",
              "Work with us",
              "Advertise with us",
            ].map((item) => (
              <li key={item} className="hover:text-green-700">
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
 
      {/* Bottom Border */}
      <div className="w-11/12 md:w-5/6 border-t-1 border-gray-400 mx-auto mt-6" />
     
    </>
  );
};

export default FooterServices;

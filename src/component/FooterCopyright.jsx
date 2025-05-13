import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const FooterCopyright = () => {
  return (
    <>
      <div className="w-full py-6 flex flex-col items-center text-center">
      <h2 className="text-sm sm:text-base font-medium">
        &copy; 2025 Carento Inc. All rights reserved
      </h2>
 
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <p className="font-semibold text-sm">Follow Us</p>
        <ul className="flex items-center gap-4 text-xl">
          <li className="hover:text-blue-600 cursor-pointer">
            <FaFacebook />
          </li>
          <li className="hover:text-pink-500 cursor-pointer">
            <BsInstagram />
          </li>
          <li className="hover:text-black cursor-pointer">
            <FaSquareXTwitter />
          </li>
          <li className="hover:text-red-600 cursor-pointer text-2xl">
            <FaYoutube />
          </li>
        </ul>
      </div>
    </div>
     
    </>
  );
};

export default FooterCopyright;

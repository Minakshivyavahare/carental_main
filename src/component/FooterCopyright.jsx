import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const FooterCopyright = () => {
  return (
    <>
      <div className="h-32 flex justify-center items-center flex-col md:py-25">
        <h2>&copy; 2025 Carento Inc . All rights reserved</h2>
        <ul className="flex justify-center items-center gap-3 mt-3 ">
          <p className="font-semibold">Follow Us</p>
          <li>
            <FaFacebook />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <FaSquareXTwitter />
          </li>
          <li>
            <FaYoutube className="text-2xl" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterCopyright;

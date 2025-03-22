import React from "react";
import { TfiEmail } from "react-icons/tfi";
const FooterSubscribe = () => {
  return (
    <>
      <div className=" w-full md:w-5/6 m-auto grid grid-cols-1 md:grid-cols-2 py-5 flex justify-center items-center ">
        <div className="flex items-center md:py-6 px-5 sm: py-6">
          <h2 className=" text-3xl text-center font-semibold md:text-start">
            Subscribe to see secret deals prices drop the moment you sign up!
          </h2>
        </div>

        <div className="  px-5 flex   justify-center items-center gap-2 lg:flex justify-center items-center  ">
          <span className="flex justify-center items-center gap-3 border-2 border-gray-900 ">
            <span className="pl-3">
              <TfiEmail />
            </span>
            <input
              className="h-14 w-55  md: text-xl font-semibold focus:outline-hidden"
              type="text"
              placeholder="Enter your email"
            />
          </span>
          <button className="h-14  text-xl  font-semibold w-40 md:w-28 sm:80 rounded-md bg-[rgb(0,254,102)]  ">
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-5/6 mt-8  border-2 border-gray-900 md:w-5/6  m-auto mt-1"></div>
    </>
  );
};

export default FooterSubscribe;

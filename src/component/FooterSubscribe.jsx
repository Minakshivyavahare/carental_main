import React from "react";
import { TfiEmail } from "react-icons/tfi";
const FooterSubscribe = () => {
  return (
    <>
      <div className="w-full px-4 py-6 md:w-5/6 md:m-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-2xl font-bold">
            Subscribe to see secret deals prices drop the moment you sign up!
          </h2>
        </div>
 
        {/* Input & Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center border-2 border-gray-400 rounded-md px-3 w-full sm:w-auto">
            <TfiEmail className="text-xl" />
            <input
              className="h-12 w-full sm:w-60 pl-3 text-base sm:text-lg  font-medium focus:outline-none"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <button className="h-12 w-full sm:w-40 bg-[#82B440] text-base sm:text-lg font-semibold rounded-md">
            Subscribe
          </button>
        </div>
      </div>
 
      <div className="w-11/12 md:w-5/6 border-t-1 border-gray-400 mx-auto mt-6" />
  
    </>
  );
};

export default FooterSubscribe;

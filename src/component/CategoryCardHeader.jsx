import React from "react";
import {
    FaArrowRight,
    FaCircleArrowLeft,
    FaCircleArrowRight,
  } from "react-icons/fa6";


const CategoryCardHeader = () => {
 
  
  return (
    <>
      <div className="mb-10">
        <span className="flex justify-between items-center p-5 w-full">
          <span className="flex flex-col space-y-2  w-md">
            <h3 className="text-4xl font-bold text-white">Browse by Type</h3>
            <p className="text-gray-500">
              Find the perfect ride for any occasion
            </p>
          </span>
          <button className=" bg-emerald-500 w-30 h-12 rounded-md  flex  justify-center  p-2  text-black hover:bg-gray-700">
            <span className="flex justify-center items-center  gap-2">
              View More
              <FaArrowRight />
            </span>
          </button>
        </span>
      </div>
    </>
  );
};

export default CategoryCardHeader;

import React from "react";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";


const CardHeader = () => {
  return (
    <>
      <div className="mb-10">
        <span className="flex justify-between items-center p-5 w-full">
          <span className="flex flex-col space-y-2  w-md">
            <h3 className="text-4xl font-bold text-white">
              Most Searched Vehicles
            </h3>
            <p className="text-gray-500">The world's leading car brands</p>
          </span>
          <span className=" invisible md:visible lg:visible xl:visible flex space-x-2 text-3xl text-gray-500">
            <FaCircleArrowLeft />
            <FaCircleArrowRight />
          </span>
        </span>
      </div>
    </>
  );
};

export default CardHeader;

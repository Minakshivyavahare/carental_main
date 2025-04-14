import React from "react";
import { FaCar } from "react-icons/fa";
import BrandsCarousel from "./BrandsIcon";
import { Link } from "react-router-dom";

const BrandsName = () => {
  return (
    <div className="p-5 bg-[#313131] h-auto text-center">
      <h6 className="flex md:text-3xl text-xl font-bold items-center text-white">
        Premium
        Brands
      </h6>

      <div className="left-text flex justify-between text-center w-full mt-2">
        <p className="text-gray-300 text-start md:text-xl font-semibold">
          Unveil the Finest Selection of High-End Vehicles
        </p>

        <Link className="w-35 md:mt-0 mt-6 md:text-[16px] text-white md:w-40 text-[13px] flex justify-evenly font-semibold items-center">
          Show All Brands
        
        </Link>
      </div>
      <BrandsCarousel />
    </div>
  );
};

export default BrandsName;

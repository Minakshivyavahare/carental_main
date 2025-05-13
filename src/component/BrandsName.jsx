import React from "react";
import { FaCar } from "react-icons/fa";
import BrandsCarousel from "./BrandsIcon";
import { Link } from "react-router-dom";

const BrandsName = () => {
  return (
    <div className="p-5 md:p-20 bg-[#313131] h-auto text-center">
      <h6 className="flex md:text-3xl text-xl font-bold items-center text-white">
        Premium
        Brands
      </h6>

      <div className="left-text flex justify-between text-center w-full mt-2">
        <p className="text-gray-300 text-start md:text-xl font-semibold">
          Unveil the Finest Selection of High-End Vehicles
        </p>

      
      </div>
      <BrandsCarousel />
    </div>
  );
};

export default BrandsName;

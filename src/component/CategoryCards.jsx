import React from "react";
import {
    FaArrowRight,
    FaCircleArrowLeft,
    FaCircleArrowRight,
  } from "react-icons/fa6";


const CategoryCards = ({suvCar,sedanCar}) => {

  
  
  
  return (
    <>
      <div className="  w-auto">
        <div className="bg-gray-900 p-5 rounded-2xl">
          <img
            className=" rounded-2xl  aspect-auto w-full "
            src="https://carento-demo.vercel.app/assets/imgs/categories/categories-1/car-1.png"
          ></img>
          <h2 className="text-2xl text-white font-medium title-font py-2 hover:text-emerald-800 ">
          SUV
          </h2>
          <span className=" w-full flex items-center justify-between">
            <button className="bg-white text-sm text-gray-500 px-2 py-0.5 flex items-center align-middle text-center rounded-2xl hover:text-green-800">
          {suvCar?.length} Vehicle
            </button>
            <button className="bg-white text-sm text-gray-500 px-2 py-0.5 flex items-center align-middle text-center rounded-2xl hover:text-green-800">
          {sedanCar?.length} Vehicle
            </button>
            <button className="bg-gray-800 text-sm p-2.5 rounded-4xl text-gray-300 hover:bg-emerald-400 hover:text-black">
              <FaArrowRight />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default CategoryCards;

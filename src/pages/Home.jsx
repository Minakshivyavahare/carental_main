import React from "react";
// import backgroundimg from '../assets/images (1).jpg'
import backgroundImage from "../assets/darker_theme_image.png"; // Import if the image is in src

import { GrStatusGood } from "react-icons/gr";
import AllOverIndia from "../component/AllOverIndia";
import Time from "../component/Time";
import BrandsName from '../component/BrandsName'
import AllCarMain from "../component/AllCarMain";
import CategoryMain from '../component/CategoryMain'


const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className=" relative  top-0 z-0 bg-no-repeat  bg-cover  bg-center    object-cover   px-6 sm:px-10 pt-40 pb-60   "
      >
        <div className=" flex flex-col py-13  px-2  ">
          <h1 className=" font-bold text-lg text-green-600 duration-100">
            Find Your Perfect Car
          </h1>
          <p className=" font-semibold text-2xl w-60 md:w-140  md:text-5xl  xl:font-extrabold lg:font-bold lg:text-5xl xl:text-6xl xl:w-200 lg:w-170   xl:leading-18 lg:leading-15 text-white ">
            Looking for a vehicle? You’re in the perfect spot.
          </p>

          <div className=" flex flex-wrap md:flex md:flex-row md:mt-3">
            <h1 className=" flex flex-row space-x-2 ml-2 font-semibold">
              <span className="text-green-400 text-2xl  ">
                <GrStatusGood />
              </span>
              <span className="text-white">High quality at a low cost.</span>
            </h1>
            <h1 className="flex flex-row space-x-2 ml-2 font-semibold">
              <span className="text-green-400 text-2xl  ">
                <GrStatusGood />
              </span>
              <span className="text-white"> Premium services</span>
            </h1>

            <h1 className="flex flex-row space-x-2 ml-2 font-semibold">
              <span className="text-green-400  text-2xl ">
                {" "}
                <GrStatusGood />
              </span>
              <span className="text-white">24/7 roadside support.</span>
            </h1>
          </div>
        </div>
      </div>
     
      <Time/>
    
     <AllCarMain/>
      <AllOverIndia/>
      <BrandsName/>
      <CategoryMain/>
    
      
    
     
   
      
     
  
    </div>
  );
};

export default Home;

import React from "react";

import backgroundImage from "../assets/home_video.mp4"; // Import if the image is in src


import AllOverIndia from "../component/AllOverIndia";
import Time from "../component/Time";
import BrandsName from '../component/BrandsName'
import AllCarMain from "../component/AllCarMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import TwoComponent from "../component/TwoComponent";
import VehicleSellAd from "../component/VehicleSellAd";


const Home = () => {
  return (
    <div>

<div className="relative w-full h-[700px] overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={backgroundImage} type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

  {/* Overlay Content */}
  <div className="relative z-20 px-6 sm:px-10 pt-40 pb-60 text-white">
    <div className="flex flex-col py-13 px-2">
      <h1 className="font-bold text-lg text-green-400 duration-100">
        Find Your Perfect Car
      </h1>
      <p className="font-semibold text-2xl w-60 md:w-140 md:text-5xl xl:font-extrabold lg:font-bold lg:text-5xl xl:text-6xl xl:w-200 lg:w-170 xl:leading-18 lg:leading-15">
        Looking for a vehicle? You’re in the perfect spot.
      </p>

      <div className="flex flex-wrap md:flex-row md:mt-3 text-white">
        <h1 className="flex flex-row items-center space-x-2 ml-2 font-semibold">
          <span className="text-[#05DF72] text-2xl">
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          <span>High quality at a low cost.</span>
        </h1>
        <h1 className="flex flex-row items-center space-x-2 ml-2 font-semibold">
          <span className="text-[#05DF72] text-2xl">
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          <span>Premium services</span>
        </h1>
        <h1 className="flex flex-row items-center space-x-2 ml-2 font-semibold">
          <span className="text-[#05DF72] text-2xl">
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          <span>24/7 roadside support.</span>
        </h1>
      </div>
    </div>
  </div>
</div>


     {/* <div className="relative w-full h-[700px] overflow-hidden">
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover  "
        >
          <source src={backgroundImage}  className='' type="video/mp4" />
        </video>
 
       
        <div className="relative  px-6 sm:px-10 pt-40 pb-60 text-black ">
          <div className="flex flex-col py-13 px-2">
            <h1 className="font-bold text-lg text-green-800 duration-100">
              Find Your Perfect Car
            </h1>
            <p className="font-semibold text-2xl w-60 md:w-140 md:text-5xl xl:font-extrabold lg:font-bold lg:text-5xl xl:text-6xl xl:w-200 lg:w-170 xl:leading-18 lg:leading-15 text-white">
              Looking for a vehicle? You’re in the perfect spot.
            </p>
 
            <div className="flex flex-wrap md:flex-row md:mt-3  text-black">
              <h1 className="flex flex-row space-x-2 ml-2 font-semibold  text-black">
                <span className="text-[#5C7E31] text-2xl">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span className="text-white">High quality at a low cost.</span>
              </h1>
              <h1 className="flex flex-row space-x-2 ml-2 font-semibold">
                <span className="text-[#5C7E31] text-2xl">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span className="text-white">Premium services</span>
              </h1>
              <h1 className="flex flex-row space-x-2 ml-2 font-semibold">
                <span className="text-[#5C7E31] text-2xl">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span className="text-white">24/7 roadside support.</span>
              </h1>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
       
        // style={{ backgroundImage: `url(${backgroundImage})` }}
        className=" relative  top-0 z-0 bg-no-repeat  bg-cover  bg-center    object-cover   px-6 sm:px-10 pt-40 pb-60   "
      >
        <div className=" flex flex-col py-13  px-2  ">
          <h1 className=" font-bold text-lg text-[#82B440] duration-100">
            Find Your Perfect Car
          </h1>
          <p className=" font-semibold text-2xl w-60 md:w-140  md:text-5xl  xl:font-extrabold lg:font-bold lg:text-5xl xl:text-6xl xl:w-200 lg:w-170   xl:leading-18 lg:leading-15 text-white ">
            Looking for a vehicle? You’re in the perfect spot.
          </p>

          <div className=" flex flex-wrap md:flex md:flex-row md:mt-3">
            <h1 className=" flex flex-row space-x-2 ml-2 font-semibold">
              <span className="text-[#5C7E31] text-2xl  ">
              <FontAwesomeIcon icon={faCircleCheck}/>
              </span>
              <span className="text-white">High quality at a low cost.</span>
            </h1>
            <h1 className="flex flex-row space-x-2 ml-2 font-semibold">
              <span className="text-[#5C7E31] text-2xl  ">
              <FontAwesomeIcon icon={faCircleCheck}/>
              </span>
              <span className="text-white"> Premium services</span>
            </h1>

            <h1 className="flex flex-row space-x-2 ml-2 font-semibold">
              <span className="text-[#5C7E31]  text-2xl ">
                {" "}
                <FontAwesomeIcon icon={faCircleCheck}/>
              </span>
              <span className="text-white">24/7 roadside support.</span>
            </h1>
          </div>
        </div>
      </div> */}
     
      <Time/>
    
     <AllCarMain/>
    
      <AllOverIndia/>
      <TwoComponent/>
      <VehicleSellAd/>
      <BrandsName/>
    
    
      
    
     
   
      
     
  
    </div>
  );
};

export default Home;

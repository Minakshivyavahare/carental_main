import { GoMilestone } from "react-icons/go";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getSingleCar } from "../features/AllCar/carSlice";
import { BsFillFuelPumpFill, BsFuelPumpDiesel } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import {createRentalCar, getAllRentalCar} from '../features/rental/RentalSlice'
import ReviewSectionUI from "../component/Review";


const CarDetails = () => {
  let [pickupDate, setPickupDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());
  const disptach = useDispatch()

  let pickupDate1 = pickupDate.toLocaleDateString('en-US');
  let dropDate1 = dropDate.toLocaleDateString('en-US');
  const {carid} = useParams()
  
  
  useEffect(()=>{
    window.scrollTo(0,0)
    },[])
  
 
  


  const handleSubmit = (e) => {
    e.preventDefault();
    
    
     disptach(createRentalCar({dropDate1, pickupDate1,carid}))
   

  }
  
  

  
 
  const {singleCar} = useSelector((state)=> state.car)

 
  useEffect(()=>{
   disptach(getSingleCar(carid))

  },[carid])
  
  
  return (
    <div className="bg-[#171717] min-h-screen pt-40">
      <div className="img-section px-30 pt-7 my-15 flex justify-center">
        <img
          className="w-[900px] h-100 rounded-md"
          src={singleCar?.image}
        />
      </div>

      <div className="car_name text-white px-30">
        <h2 className="text-xl font-bold">{singleCar?.name}</h2>
        <p>369 Mante Walks, France</p>
      </div>

      <div className="time_diesel_main grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="diesel_description flex flex-col">
          <div className="diesel text-white px-30 mt-5  md:flex justify-center">
            <div className="bg-[#191919] grid place-items-center w-full shadow-[0 2px 7px 0 rgba(0,0,0,.07)]  px-5 md:px-30 grid-cols-1  gap-y-10 md:grid-cols-1 xl:grid-cols-2 xl:gap-x-40 2xl:grid-cols-3  2xl:gap-x-30 py-15 rounded-md shadow:bg-white">
              <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold ">
                <div className="text-black px-2">
                  <IoSpeedometerSharp/>
                </div>
                <div>17825 miles</div>
              </div>

              <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold">
                <div className="text-black px-2">
                 <BsFuelPumpDiesel/>
                </div>
                <div>{singleCar.fuelType}</div>
              </div>

              <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold">
                <div className="text-black px-2">
                 From
                </div>
                <div>₹ {singleCar.rate}</div>
              </div>

              <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold">
                <div className="text-black px-2">
                <FaGear/>
                </div>
                <div>Automatic</div>
              </div>
            </div>
          </div>

          {/* ------------------------------------- */}
          <div className="description text-white bg-[#191919]  shadow-[0 2px 7px 0 rgba(0,0,0,.07)] md:my-10 rounded-md mx-20 px-10 py-10 my-10">
            <h2>Overview</h2>
            <p>
              Introducing the epitome of modern sophistication in the realm of
              compact SUVs – the Seltos K3. Dressed in a captivating blue hue
              that exudes elegance and flair, this dynamic vehicle stands as a
              testament to innovation and style. With its sleek design
              accentuated by striking dark wheels, the Seltos K3 is not merely a
              mode of transportation but a statement of refined taste and
              contemporary living. Prepare to embark on a journey where
              cutting-edge technology meets unparalleled comfort, all wrapped in
              a package of unparalleled aesthetics. Join us as we delve into the
              world of the Seltos K3, where every detail is crafted to elevate
              your driving experience to new heights.
            </p>
          </div>
          {/* ------------------------------------- */}
        </div>

        {/* ------------------------------------------- */}
        <div className=" p-4 mt-3">
          <div className="bg-[#191919] px-4 py-4 rounded-md shadow-[0 2px 7px 0 rgba(0,0,0,.07)]">
            <div>
              <h3 className="text-white font-bold text-xl">Rent This Vehicle</h3>
            </div>
            {/* --------------------------------------- */}
           <form onSubmit={(e) =>handleSubmit(e)}>
            <div className="text-gray-400 text-[15px]  mt-10 px-4 w-full">
                <h5 className="text-xl">DropOff Up Date & Time</h5>
                <div className="">
                  <DatePicker
                    className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
                    selected={dropDate}
                    onChange={(date) => setDropDate(date)}
                  />
                </div>
            </div>

            <div className="text-gray-400 text-[15px]  mt-10 px-4 w-full">
                <h5 className="text-xl">Pick Up Date & Time </h5>
                <div className="">
                  <DatePicker
                    className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
                    selected={pickupDate}
                    onChange={(date) => setPickupDate(date)}
                  />
                </div>
            </div>

            <div className="text-white  text-xl font-bold mt-10  ">
        
           <button type="submit" className=" rounded-md  bg-[#82B440] py-3 px-10 hover:bg-green-600">
            <Link to={'/user'}>
            Book now
            </Link>
         
           </button>
        
          </div>
           </form> 

           

              {/* ------------------------------------------- */}
             

              {/* ----subtotal----------------------------------- */}

          
          
     
          </div>

          
        </div>

       
      </div>
        <ReviewSectionUI/>
   
    </div>


    


  );
};

export default CarDetails;



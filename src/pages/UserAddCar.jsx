import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const UserAddCar = () => {
   const [pickupDate, setPickupDate] = useState(new Date());
  // const [dropDate, setDropDate] = useState(new Date());

  const allRental = useSelector((state) => state.rental);

     console.log("user", allRental.allRental[0].totalBill);

  return (
    <div className="bg-black py-20">
      <div className="bg-[#191919] py-5 px-10 rounded-md shadow-[0 2px 7px 0 rgba(0,0,0,.07)] mx-30 my-5">
        <div className="py-5">
          <h3 className="text-white font-bold text-xl">Rental Cars</h3>
        </div>

        <div className="bg-[#1E2939] text-white p-4 rounded-xl shadow-lg flex gap-6 items-center mt-5">
      <img src={allRental?.allRental[0]?.car?.image} alt="Car" className="w-32 h-20 object-cover rounded-md" />
      <div className="flex-1">
        <h2 className="text-xl font-bold">{allRental?.allRental[0]?.car?.name}</h2>
        <p className="text-sm text-gray-300">{allRental?.allRental[0]?.car?.category}</p>
        <p className="text-sm text-gray-300">Fuel: {allRental?.allRental[0]?.car?.fuelType}</p>
        <p className="text-sm text-gray-300">dropDate: 04/12/2025</p>
        <p className="text-sm text-gray-300">Pick Up Date & Time</p>
          <div className="">
            <DatePicker
              className="text- my-1  border rounded-md p-[3px] border-[rgba(255,255,255,0.1)] "
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
            />
          </div>
      
        <p className="text-sm text-gray-300">
          Quantity: <input type="number" value=""  className="w-12 bg-transparent border-b border-white focus:outline-none" />
        </p>
        <p className="text-sm text-gray-300">Total Bill: ₹ {allRental?.allRental[0]?.totalBill}</p>
      </div>
      <div className="text-right">
        <h3 className="text-xl font-bold text-white">₹ 400</h3>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Update</button>
      </div>
    </div>
       
       {/* ---------------------- */}

       

        {/* <div className="text-gray-400 text-[15px] mt-5 px-4 w-full">
          
          <h5 className="text-xl">Pick Up Date & Time</h5>
          <div className="">
            <DatePicker
              className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
            />
          </div>
        </div> */}

        {/* <div className="text-gray-400 text-[15px]  mt-10 px-4 w-full">
          <h5 className="text-xl"> DropOff Up Date & Time</h5>
          <div className="">
            <DatePicker
              className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
            />
          </div>
        </div> */}

        <div className="flex justify-center my-8">
          <hr className="bg-gray-400 h-0.5 w-203" />
        </div>
        <div className="text-white flex justify-between px-4">
          <p>Subtotal</p>
          <p>$39</p>
        </div>

        <div className="text-white  flex justify-between px-4">
          <p>Taxes</p>
          <p>$0</p>
        </div>

        <div className="text-white flex justify-between px-4">
          <p>Sale Discount</p>
          <p>$0</p>
        </div>

        <div className="text-white  flex justify-between px-4">
          <p>Total</p>
          <p>$39</p>
        </div>

        <div className="text-white  text-xl font-bold mt-10 text-center  ">
          <button className=" rounded-md  bg-[#82B440] py-3 px-10 ">
            Book now
          </button>
          <button className=" rounded-md  bg-[#82B440] py-3 mx-3 px-10">
            update rental car
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAddCar;

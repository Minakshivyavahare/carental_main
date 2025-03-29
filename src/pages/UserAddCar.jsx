import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import DatePicker from "react-datepicker";

const UserAddCar = () => {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());
  return (
    <div className="bg-black py-20">
      <div className="bg-[#191919] py-5 px-10 rounded-md shadow-[0 2px 7px 0 rgba(0,0,0,.07)] mx-60">
        <div className="text-gray-400 text-[15px] mt-5 px-4 w-full">
          <div className="py-5">
            <h3 className="text-white font-bold text-xl">Rent This Vehicle</h3>
          </div>
          <h5 className="text-xl">Pick Up Date & Time</h5>
          <div className="">
            <DatePicker
              className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
            />
          </div>
        </div>

        <div className="text-gray-400 text-[15px]  mt-10 px-4 w-full">
          <h5 className="text-xl"> DropOff Up Date & Time</h5>
          <div className="">
            <DatePicker
              className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
            />
          </div>
        </div>

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

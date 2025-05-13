import React, {useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";


import Modal from "../component/Modal";
import { editData } from "../features/rental/RentalSlice";


const UserAddCar = () => {
  
   const [showModal,setShowModal] = useState(false)
  const dispatch = useDispatch()

  const allRental = useSelector((state) => state.rental);
  const filtered = allRental?.allRental?.filter((rental) => rental.car !== null)?.map((rental) =>({
    totalBill: rental.totalBill
  }))

 const total = filtered?.reduce((p,c) => p + c.totalBill,0)

 
 
  

const handleCloseModal = () => {
  setShowModal(false);
};

const handleUpdate = (rental) => {
 
   const {_id,pickupDate, dropDate } = rental;
//  const pickupDate1 = `${new Date(pickupDate).getDate()}/${new Date(pickupDate).getMonth() + 1}/${new Date(pickupDate).getFullYear()}`;
//  const dropDate1 = `${new Date(dropDate).getDate()}/${new Date(dropDate).getMonth() + 1}/${new Date(dropDate).getFullYear()}`;

  setShowModal(true)
  dispatch(editData({ id:_id,pickupDate, dropDate}))
 
}


  return (
    
    <div className="bg-black py-20">
      <div className="bg-[#191919] py-5 px-10 rounded-md shadow-[0 2px 7px 0 rgba(0,0,0,.07)] mx-30 my-5">
        <div className="py-5">
          <h3 className="text-white font-bold text-xl">Rental Cars</h3>
        </div>
        
        
          {
            showModal && <><Modal onClose={handleCloseModal}/></>
          }
       
        
           

        {
          allRental?.allRental?.filter((rental) => rental.car)?.length > 0 ? (
             allRental?.allRental
             .filter((rental) => rental.car)
             .map((rental) =>
              <div className="bg-[#1E2939] text-white p-4 rounded-xl shadow-lg flex gap-6 items-center mt-5">
              <img src={rental?.car?.image} alt="Car" className="w-32 h-20 object-cover rounded-md" />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{rental?.car?.name}</h2>
                <p className="text-sm text-gray-300">{rental?.car?.category}</p>
                <p className="text-sm text-gray-300">Fuel: {rental?.car?.fuelType}</p>
              
                
              
              
                <p className="text-sm text-gray-300">Total Bill: ₹ {rental?.totalBill}</p>
              </div>
              <div className="text-right">
              <p className="text-sm text-gray-300">drop Date</p>
                <p className="text-sm text-gray-300">{new Date(rental?.dropDate)?.toLocaleDateString('en-IN')}</p>
                <p className="text-sm text-gray-300">pickup Date</p>
                <p className="text-sm text-gray-300">{new Date(rental?.pickupDate)?.toLocaleDateString('en-IN')}</p>
                <h3 className="text-xl font-bold text-white">₹ {rental?.car?.rate}</h3>
                <button onClick={() => handleUpdate(rental)} className="mt-2 px-4 py-1 bg-[#82B440] text-white rounded-lg hover:bg-green-700">Update</button>
              </div>
                </div>
      
            )
          ) :(
            <p className="py-4 text-white">No Rentals Found</p>
          )

        

        }   


       
       {/* ---------------------- */}


        <div className="flex justify-center my-8">
          <hr className="bg-gray-400 h-0.5 w-203" />
        </div>
        <div className="text-white flex justify-between px-4">
          <p>Subtotal</p>
          <p>{total}</p>
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
          <p>{total}</p>
        </div>

        <div className="text-white  text-xl font-bold mt-10 text-center  ">
          
         
        </div>
      </div>
    </div>
  );
};

export default UserAddCar;





{/* <p className="text-sm text-gray-300">Pick Up Date & Time</p> */}
          {/* <div className="">
            <DatePicker
              className="text- my-1  border rounded-md p-[3px] border-[rgba(255,255,255,0.1)] "
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
            />
          </div> */}

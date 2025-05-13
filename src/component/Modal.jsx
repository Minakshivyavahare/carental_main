
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { update } from '../features/rental/RentalSlice';

const Modal = ({ onClose }) => {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());

  const edit = useSelector((state) => state.rental);
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit?.edit?.editcar) {
      console.log("Loaded Pickup Date from Redux:", edit.edit.editcar.pickupDate);
      console.log("Loaded Drop Date from Redux:", edit.edit.editcar.dropDate);

      setPickupDate(new Date(edit.edit.editcar.pickupDate));
      setDropDate(new Date(edit.edit.editcar.dropDate));
    }
  }, [edit]);

  const handleUpdateCar = () => {
    const { id } = edit?.edit?.editcar;

    console.log('📅 Final Pickup Date:', pickupDate);
    console.log('📅 Final Drop Date:', dropDate);

    // Uncomment this to dispatch the update
    dispatch(update({ id, pickupDate, dropDate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E2939] bg-opacity-40">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg mx-4 relative animate-fade-in transform transition-all duration-300">
        <h2 className="text-2xl font-bold text-center mb-6 border-b-2 border-gray-300 pb-3">
          Update Your Booking
        </h2>

        <form onSubmit={handleSubmit}>
          {/* DropOff Date */}
          <div className="text-gray-800 text-lg mt-6 w-full">
            <h5 className="text-lg mb-3">DropOff Date & Time</h5>
            <DatePicker
              selected={dropDate}
              onChange={(date) => {
                setDropDate(date);
                console.log("Drop date selected:", date);
              }}
              className="w-full bg-white text-gray-800 border border-gray-400 rounded-lg p-2 focus:outline-none transition duration-300 ease-in-out hover:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* PickUp Date */}
          <div className="text-gray-800 text-lg mt-6 w-full">
            <h5 className="text-lg mb-3">Pick Up Date & Time</h5>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => {
                setPickupDate(date);
                console.log("Pickup date selected:", date);
              }}
              className="w-full bg-white text-gray-800 border border-gray-400 rounded-lg p-2 focus:outline-none transition duration-300 ease-in-out hover:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-between">
            <button
              type="submit"
              onClick={handleUpdateCar}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold hover:from-green-500 hover:via-green-600 hover:to-green-700 focus:outline-none transition-all duration-300 ease-in-out"
            >
              Update
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 focus:outline-none transition-all duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight, FaGear } from "react-icons/fa6";
import { IoLocationSharp, IoSpeedometerSharp } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getReview} from '../features/reviews/ReviewSlice'
import { MapPin, Check, X, Fuel, Users, ArrowRight, Gauge } from "lucide-react";
import { MdCheckCircle, MdCancel } from "react-icons/md";



const Cards = ({car}) => {
 

  const dispatch = useDispatch()

  const handleReview = (id) => {
    dispatch(getReview(id))
  }
 
 

  return (
    <>

      <div className="overflow-hidden rounded-xl border border-gray-800 bg-black shadow-lg transition-all hover:shadow-xl">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        {car.isBooked && (
          <div className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
            BOOKED
          </div>
        )}
      </div>

      <div className="p-5 space-y-4 bg-black">
        {/* Header Section */}
        <div>
          <h3 className="text-2xl font-bold text-white">{car.name}</h3>
          <div className="flex items-center mt-1 text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{car.category.toUpperCase()}</span>
          </div>
        </div>

        {/* Availability Status */}
        <div className="flex items-center">
          {car.isBooked ? (
            <div className="flex items-center text-red-500">
              <X className="w-5 h-5 mr-1.5" />
              <span className="font-medium">Booked</span>
            </div>
          ) : (
            <div className="flex items-center text-green-500">
              <Check className="w-5 h-5 mr-1.5" />
              <span className="font-medium">Available</span>
            </div>
          )}
        </div>

        {/* Car Specs */}
        <div className="grid grid-cols-2 gap-3 text-gray-300">
          <div className="flex items-center">
            <Gauge className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-lg">{car.mileage}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-lg">{car.seats}</span>
          </div>
          <div className="flex items-center">
            <Fuel className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-lg">{car.fuelType.toUpperCase()}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12h8M12 16V8"/>
            </svg>
            <span className="text-lg">{car.transmission}</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-800">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">From</span>
            <span className="text-xl font-bold text-white">₹ {car.rate}</span>
          </div>
          
          <Link 
            to={`/cardetail/${car._id}`} onClick={() =>handleReview(car._id)}
            className="flex items-center px-3 py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cards;


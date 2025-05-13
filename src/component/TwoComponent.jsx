import React from 'react'
import imge1 from '../assets/image1.png';
import imge2 from '../assets/image2.png';

const TwoComponent = () => {
  return (
    <div className="bg-[#171717] px-4 sm:px-6 md:px-8 lg:px-16 py-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Blue Card */}
      <div className="bg-sky-200 rounded-3xl px-6 sm:px-8 py-10 sm:py-12 relative overflow-hidden flex flex-col justify-between">
        <div className="max-w-full sm:max-w-[70%] space-y-4 ">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Looking for a rental car?
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Discover your ideal rental car for every adventure, whether it's a road trip or business travel
          </p>
          <button className="bg-[rgb(130,180,64)] hover:bg-green-600 text-white px-6 py-3.5 rounded-full inline-flex items-center group transition-all sm:mt-3 md:mt-7 ">
            Get Started Now
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <img
          src={imge1}
          alt="Black SUV"
          className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-1/2 object-contain"
        />
      </div>

      {/* Yellow Card */}
      <div className="bg-yellow-200 rounded-3xl px-6 sm:px-8 py-10 sm:py-12 relative overflow-hidden flex flex-col justify-between">
        <div className="max-w-full sm:max-w-[70%] space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Looking to rent out or sell your car?
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Maximize your vehicle's potential: seamlessly rent or sell with confidence
          </p>
          <button className="bg-[rgb(130,180,64)] hover:bg-green-600 text-white px-6 py-3.5 rounded-full inline-flex items-center group transition-all ">
            Get Started Now
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <img
          src={imge2}
          alt="Luxury Sedan"
          className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-1/2 object-contain"
        />
      </div>
    </div>
  </div>
  )
}

export default TwoComponent
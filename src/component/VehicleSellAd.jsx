import React from 'react'
import imge3 from '../assets/image25.png'
import imge4 from '../assets/image21.png'
import imge5 from '../assets/image22.png'
import imge6 from '../assets/image23.png'
import imge7 from '../assets/image24.png'

const VehicleSellAd = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#313131] py-10">
    <div className="flex flex-col md:flex-row w-full max-w-6xl p-6 bg-[#313131] shadow-2xl rounded-lg">
      <div className="md:w-1/2 p-6 text-white">
        <button className="text-sm bg-white text-black px-5 py-2 rounded-md font-semibold text-lg">Trusted Expertise</button>
        <h2 className="text-3xl font-bold mt-2">Get a great deal for your vehicle sell to us now</h2>
        <p className="text-[#737373] text-lg mt-4">
          Get the best value for your vehicle with our transparent and straightforward selling process
        </p>
        <ul className="mt-4 text-[#82B440] space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Experienced Professionals You Can Trust
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Clear and Transparent Pricing, No Hidden Fees
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Genuine Spares Parts
          </li>
        </ul>
        <button className="mt-6 bg-[#82B440] text-white px-6 py-2 rounded-lg">
          Get Started Now →
        </button>
      </div>
      <div className="md: p-10 flex flex-wrap  justify-center   items-center bg-[#416240] rounded-lg ">
        <img src={imge3} alt="Car Deal 1" className="rounded-lg m-2 w-35" />
        <img src={imge4} alt="Car Deal 2" className="rounded-lg m-2 w-35" />
        <img src={imge5} alt="Car Deal 3" className="rounded-lg m-2 w-35" />
        <img src={imge6} alt="Car Deal 4" className="rounded-lg m-2 w-35" />
        <img src={imge7} alt="Car Deal 5" className="rounded-lg m-2 w-35" />
      </div>
    </div>
  </div>
  )
}

export default VehicleSellAd
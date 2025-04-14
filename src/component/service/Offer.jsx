import image_105 from "../../assets/service/image_105.jpg";
import { FaCheck } from "react-icons/fa";

const Offer = () => {
  return (
    <section className="bg-[#303030] py-12 px-5 md:px-20 lg:px-55 flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image_105}
          alt="Offer"
          className="   object-cover rounded-lg"
        />
      </div>
      {/* Content Section */}
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <div className="bg-white py-3 px-2 w-fit rounded-xl mb-6 hover:bg-green-500 hover:text-white">
          <h6 className="text-black text-center font-bold text-sm font-family-urbanist hover:text-white">
            Best Car Rental System
          </h6>
        </div>
        <h2 className="text-white font-bold text-3xl sm:text-4xl font-family-urbanist leading-snug">
          Receive a Competitive Offer Sell Your Car to Us Today.
        </h2>
        <p className="text-[#737373] mt-4 font-medium text-base sm:text-lg font-family-urbanist">
          We are committed to delivering exceptional service, competitive
          pricing, and a diverse selection of options for our customers.
        </p>
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-[#83b541] rounded-full text-[#303030] mr-2 w-6 h-6 flex items-center justify-center">
                <FaCheck className="text-xs" />
              </span>
              <p className="text-sm sm:text-base font-bold text-white font-family-urbanist">
                Expert Certified Mechanics
              </p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#83b541] rounded-full text-[#303030] mr-2 w-6 h-6 flex items-center justify-center">
                <FaCheck className="text-xs" />
              </span>
              <p className="text-sm sm:text-base font-bold text-white font-family-urbanist">
                First Class Services
              </p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#83b541] rounded-full text-[#303030] mr-2 w-6 h-6 flex items-center justify-center">
                <FaCheck className="text-xs" />
              </span>
              <p className="text-sm sm:text-base font-bold text-white font-family-urbanist">
                Get Reasonable Price
              </p>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-[#83b541] rounded-full text-[#303030] mr-2 w-6 h-6 flex items-center justify-center">
                <FaCheck className="text-xs" />
              </span>
              <p className="text-sm sm:text-base font-bold text-white font-family-urbanist">
                24/7 Road Assistance
              </p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#83b541] rounded-full text-[#303030] mr-2 w-6 h-6 flex items-center justify-center">
                <FaCheck className="text-xs" />
              </span>
              <p className="text-sm sm:text-base font-bold text-white font-family-urbanist">
                Genuine Spare Parts
              </p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#83b541] rounded-full text-[#303030] mr-2 w-6 h-6 flex items-center justify-center">
                <FaCheck className="text-xs" />
              </span>
              <p className="text-sm sm:text-base font-bold text-white font-family-urbanist">
                Free Pick-Up & Drop-Offs
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Offer;

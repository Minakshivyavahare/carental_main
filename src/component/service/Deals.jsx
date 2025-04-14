import { HiArrowRight } from "react-icons/hi";
 import deals_1 from "../../assets/service/Deals_1.png";

const Deals = () => {
  return (
    <section className="relative py-12 w-full">
      <img
        src={deals_1}
        alt="Deals Background"
        className="w-full h-90 object-cover rounded-xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-family-urbanist md:text-[52px]">
          Best Car Rent Deals
        </h2>
        <p className="mt-2 font-family-urbanist font-bold text-2xl sm:text-lg lg:text-xl">
          Save 15% or more when you book and ride before 1 April 2025
        </p>
        <button className=" mt-4 bg-[#7fba31] text-xs sm:text-sm lg:text-base font-bold font-family-urbanist text-black px-4 sm:px-6 py-2 sm:py-4 rounded-full hover:bg-green-600 flex items-center justify-between">
          Find Early 2025 Deals
          <HiArrowRight className="text-lg sm:text-xl ml-2"/>
        </button>
      </div>
    </section>
  );
};

export default Deals;

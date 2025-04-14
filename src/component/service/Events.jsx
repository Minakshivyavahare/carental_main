import { useState } from "react";
import image_114 from "../../assets/service/image_114.jpg";
import image_116 from "../../assets/service/image_116.jpg";
import image_118 from "../../assets/service/image_118.jpg";
import image_107 from "../../assets/service/image_107.jpg";
import image_132 from "../../assets/service/image_132.jpg";
import image_130 from "../../assets/service/image_130.jpg";
import image_128 from "../../assets/service/image_128.jpg";
import image_126 from "../../assets/service/image_126.jpg";
import image_124 from "../../assets/service/image_124.jpg";
import image_122 from "../../assets/service/image_122.jpg";
import image_120 from "../../assets/service/image_120.jpg";
import { LuCalendarDays } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Events = () => {
  const events = [
    {
      title: "The Ultimate Guide to Renting a Car",
      img: image_114,
      type: "Hybrid Cars",
    },
    {
      title: "Car Rent Innovations: What to Expect in 2025",
      img: image_116,
      type: "Road Trips",
    },
    {
      title: "How to Get the Best Deals on Car Rent",
      img: image_118,
      type: "Luxury Cars",
    },
    {
      title: "How to Get the Best Deals on Car",
      img: image_120,
      type: "Car Rentals",
    },
    {
      title: "The Future of Car Sharing: Convenient",
      img: image_122,
      type: "New Cars",
    },
    {
      title: "The Rise of Car Subscription Services",
      img: image_124,
      type: "Electric Vehicles",
    },
    {
      title: "The Best Cars for Off-Road Adventures",
      img: image_126,
      type: "Car Rentals",
    },
    {
      title: "How Self-Driving Cars Changing",
      img: image_128,
      type: "New Cars",
    },
    {
      title: "Top Safety Features to Look for in a Car",
      img: image_130,
      type: "Hybrid Cars",
    },
    {
      title: "What You Need to Know About Cars",
      img: image_132,
      type: "Electric Vehicles",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= events.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 px-2 md:px-16 lg:px-24 text-white">
      <h2 className="text-4xl md:text-5xl font-bold font-family-urbanist mb-6 text-center">
        Upcoming Cars & Events
      </h2>
      <p className="text-[#737373] font-family-urbanist text-base md:text-lg font-medium mb-8 text-center">
        Stay ahead with the latest car releases and upcoming events
      </p>

      <div className="relative md:px-10">
        <button
          onClick={handlePrevious}
          className="absolute md:left-30 md:top-1/2 left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 hover:text-black z-10"
        >
          <FaChevronLeft />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events
            .slice(currentIndex, currentIndex + 3)
            .concat(
              events.slice(0, Math.max(0, currentIndex + 3 - events.length))
            )
            .map((event, index) => (
              <div
                key={index}
                className=" rounded-lg shadow-lg overflow-hidden border border-gray-700 transition duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-[-20px] right-4 bg-[#739494] text-white text-xs md:text-sm font-bold px-3 py-2 rounded-xl font-family-urbanist hover:text-green-500">
                    {event.type}
                  </div>
                </div>
                <div className="p-6 bg-black text-white">
                  <div className="flex items-center font-medium text-sm mb-2">
                    <LuCalendarDays className="text-gray-400" />
                    <span className="mx-2 font-family-urbanist">
                      30 Dec 2024
                    </span>
                    <CiClock2 className="ml-3 text-lg text-white font-black" />
                    <span className="mx-1 font-medium text-sm font-family-urbanist">
                      3 mins
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mt-3 mb-8 font-family-urbanist hover:text-[#83b541] truncate">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={image_107}
                        alt="Author"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3"
                      />
                      <span className="text-sm font-bold font-family-urbanist">
                        Timmothy
                      </span>
                    </div>
                    <button className="bg-[#212121] border border-gray-700 text-xs md:text-sm font-bold px-3 py-2 md:px-4 md:py-2 rounded-lg font-family-urbanist hover:text-black hover:bg-[#83b541]">
                      Keep Reading
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute md:right-[8rem] right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 hover:text-black z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Events;

import React from "react";
import { Link } from "react-router-dom";

const BrandsCarousel = () => {
  const brands = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];

  return (
    <div className="carouselTicker  carouselTicker-left box-list-brand-car justify-center relative overflow-hidden">
      <div className="carouselTicker__wrap relative p-20 ">
        <ul className="carouselTicker__list flex whitespace-nowrap animate-slide  ">
          {[...brands, ...brands].map((brand, index) => (
            <li
              key={index}
              className=" text-center justify-center mx-4 md:mx-6 flex-shrink-0 snap-start "
            >
              <Link to=" " className=" ">
                <img
                  className=" bg-[#000000] w-auto h-25 md:w-auto md:h-35  justify-center p-8  rounded-t-3xl rounded-b-3xl "
                  src={`brandimages/${brand}.png`}
                  alt="Carento"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }


        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandsCarousel;

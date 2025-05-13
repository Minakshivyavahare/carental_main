import React from 'react'
import image_30 from "../assets/image_30.png";
import image_31 from "../assets/image_31.png";
import image_32 from "../assets/image_32.png";
import image_33 from "../assets/image_33.png";

const AboutTestimonials = () => {
    const testimonials = [
        {
          name: "Albert Flores",
          occuptionn: "CEO, Bank of America",
          desc: "Exceptional service! Gerow’s attention to detail and reliability have been instrumental in our supply chain success.",
          img: image_30,
          rating: 5,
        },
        {
          name: "Guy Hawkins",
          occuptionn: "CEO, JAKS Shans",
          desc: "Gerow's attention to detail and professionalism have made them our preferred logistics partner. Highly recommended!",
          img: image_31,
          rating: 5,
        },
        {
          name: "Eleanor Pena",
          occuptionn: "CEO, ChenTech Solutions",
          desc: "Gerow has consistently met and exceeded our logistics needs. Their dedication to excellence is truly commendable.",
          img: image_32,
          rating: 5,
        },
        {
          name: "Cody Fisher",
          occuptionn: "Developer, Male Agency",
          desc: "Their team is a valuable asset to our business operations. Gerow's efficient service has saved us time and money.",
          rating: 5,
          img: image_33,
        },
      ];
  return (
    <section className="py-20 px-6">
    <div className="flex items-center justify-center mb-5">
      <div className="flex items-center justify-center  bg-black text-white border border-gray-700 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex -space-x-4">
          <img
            src={image_33}
            alt="Profile 1"
            className="w-8 h-8 rounded-full border-1 border-black"
          />
          <img
            src={image_30}
            alt="Profile 2"
            className="w-8 h-8 rounded-full border-1 border-black"
          />
          <img
            src={image_31}
            alt="Profile 3"
            className="w-8 h-8 rounded-full border-1 border-black"
          />
          <img
            src={image_32}
            alt="Profile 3"
            className="w-8 h-8 rounded-full border-1 border-black"
          />
        </div>
        <span className="ml-3 text-sm font-bold font-family-urbanist">
          Testimonials
        </span>
      </div>
    </div>

    <h2 className="text-3xl sm:text-2xl lg:text-5xl font-bold text-center mb-8 text-white font-family-urbanist">
      What they say about us?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] border border-gray-700 shadow-md rounded-lg px-4 py-6 sm:py-8 font-family-urbanist text-center"
        >
          <p className="text-[#737373] font-medium text-sm sm:text-base text-start mb-4">
            {testimonial.desc}
          </p>
          <div className="flex items-center justify-between py-7">
            <img
              className="object-cover w-16 sm:w-30 rounded-full"
              src={testimonial.img}
              alt={testimonial.name}
            />
            <div className="flex flex-col items-start justify-items-start pr-11">
              <h3 className="text-lg sm:text-sm font-bold text-white font-family-urbanist mb-1">
                {testimonial.name}
              </h3>
              <h4 className="text-sm sm:text-sm font-medium  text-white font-family-urbanist">
                {testimonial.occuptionn}
              </h4>
            </div>
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span
                  key={i}
                  className="text-black bg-[#83b541] ml-1 w-4 h-4 sm:w-5 sm:h-5 text-center font-black flex items-center justify-center"
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default AboutTestimonials
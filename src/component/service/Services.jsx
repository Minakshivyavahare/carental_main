 import image_19 from "../../assets/service/image_19.jpg";
import image_20 from "../../assets/service/image_20.jpg";
import image_21 from "../../assets/service/image_21.jpg";
import image_22 from "../../assets/service/image_22.jpg";
import image_23 from "../../assets/service/image_23.jpg";
import image_24 from "../../assets/service/image_24.jpg";
import image_25 from "../../assets/service/image_25.jpg";
import image_26 from "../../assets/service/image_26.jpg";
import image_27 from "../../assets/service/image_27.jpg";
import image_28 from "../../assets/service/image_28.jpg";

const Services = () => {
  const services = [
    {
      title: "Driver Rental Service",
      img: image_19,
      desc: "In addition to our car rental service, we offer professional drivers for hire. Enjoy a stress-free journey with our experienced drivers",
    },
    {
      title: "Oil Change Service",
      img:image_20,
      desc: "Keep your engine in top condition with our oil change service. Available as an add-on to any of our maintenance or repair services.",
    },
    {
      title: "Car Wash & Detailing Packages",
      img: image_21,
      desc: "Maintain the shine of your vehicle with our thorough car wash and detailing packages tailored to your needs.",
    },
    {
      title: "Roadside Assistance",
      img:image_22,
      desc: "Our roadside assistance service ensures peace of mind while you rent or drive. Get help with breakdowns, flat tires, or towing",
    },
    {
      title: "Temporary Car Replacement",
      img:image_23,
      desc: "If your car is in for repairs or maintenance, we offer a temporary car replacement service so you’re never without transportation.",
    },
    {
      title: "Tire Replacement & Balancing",
      img: image_24,
      desc: "We provide tire replacement and wheel balancing services, ensuring your car is safe and smooth on the road, available as an add-on to any maintenance package.",
    },
    {
      title: "Vehicle Inspection Service",
      img: image_25,
      desc: "For those looking to sell or rent a car, we offer thorough vehicle inspection services to certify your car’s condition and increase its market value.",
    },
    {
      title: "Car Insurance Assistance",
      img: image_26,
      desc: "Our experts can help you find the right car insurance policy, available as an add-on when purchasing or renting a vehicle from us.",
    },
    {
      title: "Pick-Up & Drop-Off Service",
      img: image_27,
      desc: "We offer a convenient pick-up and drop-off service when you rent a car, have your car serviced, or use our detailing services.",
    },
    {
      title: "Premium Fuel Service",
      img:image_28,
      desc: "Refuel your rental or serviced vehicle with high-quality premium fuel before hitting the road, ensuring optimal performance and mileage.",
    },
  ];

  return (
    <section className="py-12 px-3 lg:px-40">
      <div className="md:flex items-center justify-between mb-10">
        <h2 className="md:w-1/2 w-full font-family-urbanist md:text-[44px]/15 text-4xl font-bold text-center mb-4 text-white md:text-start">
          Comprehensive <span className="text-[#6df26b]">Car Rental</span>{" "}
          Services to Meet Your Needs
        </h2>
        <p className="md:w-1/2 w-full text-start text-lg/7 md:px-18 font-medium text-[#737373] font-family-urbanist">
          From daily rentals to long-term solutions, we offer a comprehensive
          range of vehicles and services to suit every need and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-white shadow-lg rounded-xl overflow-hidden transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-8 bg-black">
              <h3 className="text-xl font-bold text-white font-family-urbanist mb-2 hover:text-[#83b541] line-clamp-1">
                {service.title}
              </h3>
              <p className="text-[#737373] text-base/7 font-medium font-family-urbanist mt-2 line-clamp-3">
                {service.desc}
              </p>
              <button className="bg-[#739494] font-bold text-sm mt-4 border border-green-500 px-5 py-4 rounded-xl hover:bg-green-500 transition duration-300 hover:text-black font-family-urbanist">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCar } from "../features/AllCar/carSlice";
import { createRentalCar } from '../features/rental/RentalSlice'
import AddReviewSectionUI from "../component/reviewComponent/AddReviewSectionUI";
import { Fuel, Gauge, MapPin, Milestone, Settings, Users } from "lucide-react";


const CarDetails = () => {
  let [pickupDate, setPickupDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());
  const disptach = useDispatch()
  const navigate = useNavigate()

  let pickupDate1 = pickupDate.toLocaleDateString('en-US');
  let dropDate1 = dropDate.toLocaleDateString('en-US');

  const { carid } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hello")

    disptach(createRentalCar({ dropDate1, pickupDate1, carid }))
    navigate("/user")
  }

  const { singleCar } = useSelector((state) => state.car)

  useEffect(() => {
    disptach(getSingleCar(carid))

  }, [carid])


  // return (
  //   <div className="bg-[#171717] min-h-screen pt-40">
  //     <div className="img-section px-30 pt-7 my-15 flex justify-center">
  //       <img
  //         className="w-[900px] h-100 rounded-md"
  //         src={singleCar?.image}
  //       />
  //     </div>

  //     <div className="car_name text-white px-30">
  //       <h2 className="text-xl font-bold">{singleCar?.name}</h2>
  //       <p>369 Mante Walks, France</p>
  //     </div>

  //     <div className="time_diesel_main grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
  //       <div className="diesel_description flex flex-col">
  //         <div className="diesel text-white px-30 mt-5  md:flex justify-center">
  //           <div className="bg-[#191919] grid place-items-center w-full shadow-[0 2px 7px 0 rgba(0,0,0,.07)]  px-5 md:px-30 grid-cols-1  gap-y-10 md:grid-cols-1 xl:grid-cols-2 xl:gap-x-40 2xl:grid-cols-3  2xl:gap-x-30 py-15 rounded-md shadow:bg-white">
  //             <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold ">
  //               <div className="text-black px-2">
  //                 <IoSpeedometerSharp/>
  //               </div>
  //               <div>17825 miles</div>
  //             </div>

  //             <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold">
  //               <div className="text-black px-2">
  //                <BsFuelPumpDiesel/>
  //               </div>
  //               <div>{singleCar.fuelType}</div>
  //             </div>

  //             <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold">
  //               <div className="text-black px-2">
  //                From
  //               </div>
  //               <div>₹ {singleCar.rate}</div>
  //             </div>

  //             <div className="bg-[#739393] flex items-center justify-center py-2 w-35 rounded-sm font-semibold">
  //               <div className="text-black px-2">
  //               <FaGear/>
  //               </div>
  //               <div>Automatic</div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* ------------------------------------- */}
  //         <div className="description text-white bg-[#191919]  shadow-[0 2px 7px 0 rgba(0,0,0,.07)] md:my-10 rounded-md mx-20 px-10 py-10 my-10">
  //           <h2>Overview</h2>
  //           <p>
  //             Introducing the epitome of modern sophistication in the realm of
  //             compact SUVs – the Seltos K3. Dressed in a captivating blue hue
  //             that exudes elegance and flair, this dynamic vehicle stands as a
  //             testament to innovation and style. With its sleek design
  //             accentuated by striking dark wheels, the Seltos K3 is not merely a
  //             mode of transportation but a statement of refined taste and
  //             contemporary living. Prepare to embark on a journey where
  //             cutting-edge technology meets unparalleled comfort, all wrapped in
  //             a package of unparalleled aesthetics. Join us as we delve into the
  //             world of the Seltos K3, where every detail is crafted to elevate
  //             your driving experience to new heights.
  //           </p>
  //         </div>
  //         {/* ------------------------------------- */}
  //       </div>

  //       {/* ------------------------------------------- */}
  //       <div className=" p-4 mt-3">
  //         <div className="bg-[#191919] px-4 py-4 rounded-md shadow-[0 2px 7px 0 rgba(0,0,0,.07)]">
  //           <div>
  //             <h3 className="text-white font-bold text-xl">Rent This Vehicle</h3>
  //           </div>
  //           {/* --------------------------------------- */}
  //          <form onSubmit={handleSubmit}>
  //           <div className="text-gray-400 text-[15px]  mt-10 px-4 w-full">
  //               <h5 className="text-xl">DropOff Up Date & Time</h5>
  //               <div className="">
  //                 <DatePicker
  //                   className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
  //                   selected={dropDate}
  //                   onChange={(date) => setDropDate(date)}
  //                 />
  //               </div>
  //           </div>

  //           <div className="text-gray-400 text-[15px]  mt-10 px-4 w-full">
  //               <h5 className="text-xl">Pick Up Date & Time </h5>
  //               <div className="">
  //                 <DatePicker
  //                   className="text-white  border rounded-md p-[5px] border-[rgba(255,255,255,0.1)] "
  //                   selected={pickupDate}
  //                   onChange={(date) => setPickupDate(date)}
  //                 />
  //               </div>
  //           </div>

  //           <div className="text-white  text-xl font-bold mt-10  ">

  //          <button type="submit" className=" rounded-md  bg-[#82B440] py-3 px-10 hover:bg-green-600">

  //           Book now


  //          </button>

  //         </div>
  //          </form> 



  //             {/* ------------------------------------------- */}


  //             {/* ----subtotal----------------------------------- */}




  //         </div>


  //       </div>


  //     </div>
  //       <ReviewSectionUI/>

  //   </div>





  // );

  const handleDateChange = (date, setDate) => {
    setDate(date);
  };
  const SimpleDatePicker = ({
    selected,
    onChange,
    label
  }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
        <input
          type="date"
          className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selected.toISOString().split('T')[0]}
          onChange={(e) => {
            const date = new Date(e.target.value);
            if (!isNaN(date.getTime())) {
              onChange(date);
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Car Image */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <img
            src={singleCar.image}
            alt={singleCar.name}
            className="w-full h-[400px] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <h1 className="text-4xl font-bold text-white mb-2">{singleCar.name}</h1>
            <div className="flex items-center text-gray-300">
              <MapPin className="mr-2" />
              <span>369 Mante Walks, France</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Details & Overview Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Features */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Key Features</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg">
                    <div className="bg-blue-600 p-3 rounded-full mb-3">
                      <Gauge className="text-white text-xl" />
                    </div>
                    <span className="text-gray-200 text-sm font-medium">{singleCar.mileage}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg">
                    <div className="bg-green-600 p-3 rounded-full mb-3">
                      <Fuel className="text-white text-xl" />
                    </div>
                    <span className="text-gray-200 text-sm font-medium">{singleCar.fuelType}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg">
                    <div className="bg-purple-600 p-3 rounded-full mb-3">
                      <Settings className="text-white text-xl" />
                    </div>
                    <span className="text-gray-200 text-sm font-medium">{singleCar.transmission}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg">
                    <div className="bg-amber-600 p-3 rounded-full mb-3">
                      <Users className="text-white text-xl" />
                    </div>
                    <span className="text-gray-200 text-sm font-medium">{singleCar.seats}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Overview</h2>
              </div>
              <div className="p-6 text-gray-300">
                <p className="leading-relaxed">
                  Introducing the epitome of modern sophistication in the realm of
                  compact SUVs – the {singleCar.name}. Dressed in a captivating design
                  that exudes elegance and flair, this dynamic vehicle stands as a
                  testament to innovation and style. With its sleek design
                  accentuated by striking wheels, the {singleCar.name} is not merely a
                  mode of transportation but a statement of refined taste and
                  contemporary living.
                </p>
                <p className="mt-4 leading-relaxed">
                  Prepare to embark on a journey where
                  cutting-edge technology meets unparalleled comfort, all wrapped in
                  a package of unparalleled aesthetics. Join us as we delve into the
                  world of the {singleCar.name}, where every detail is crafted to elevate
                  your driving experience to new heights.
                </p>
              </div>
            </div>

            {/* Car History & Performance (Additional Section) */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Performance Metrics</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg text-white mb-4 font-medium">Key Performance</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between text-gray-300">
                        <span>Top Speed</span>
                        <span className="font-medium text-white">220 km/h</span>
                      </li>
                      <li className="flex justify-between text-gray-300">
                        <span>Acceleration (0-100 km/h)</span>
                        <span className="font-medium text-white">7.1s</span>
                      </li>
                      <li className="flex justify-between text-gray-300">
                        <span>Engine</span>
                        <span className="font-medium text-white">2.0L TwinPower Turbo</span>
                      </li>
                      <li className="flex justify-between text-gray-300">
                        <span>Horsepower</span>
                        <span className="font-medium text-white">228 hp</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-4 font-medium">Vehicle History</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Milestone className="mr-2 text-blue-400" />
                        <span>Regular maintenance records available</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Milestone className="mr-2 text-blue-400" />
                        <span>No accidents reported</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Milestone className="mr-2 text-blue-400" />
                        <span>Original paint in excellent condition</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Milestone className="mr-2 text-blue-400" />                  
                        <span>Interior in pristine condition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden sticky top-4">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Rent This Vehicle</h2>
                <p className="text-gray-400 text-sm mt-1">Complete the information to book your ride</p>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <SimpleDatePicker
                      selected={pickupDate}
                      onChange={(date) => handleDateChange(date, setPickupDate)}
                      label="Pick Up Date"
                    />

                    <SimpleDatePicker
                      selected={dropDate}
                      onChange={(date) => handleDateChange(date, setDropDate)}
                      label="Drop Off Date"
                    />
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-400">Daily Rate</span>
                      <span className="text-white font-medium">₹{singleCar.rate}/day</span>
                    </div>

                    <div className="flex justify-between mb-6">
                      <span className="text-gray-400">Estimated Total</span>
                      <span className="text-white text-xl font-bold">₹{singleCar.rate}</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section Placeholder */}
        <div className="mt-12 p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Customer Reviews</h2>
          <AddReviewSectionUI carid={carid} />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;







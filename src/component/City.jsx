import React from 'react'

import Goa from '../assets/Goa.jpg'
import Banglore from '../assets/Bangalore.webp'
import delhi from '../assets/delhi.webp'
import kolkata from '../assets/kolkata.webp'
import chennai from '../assets/chennai.webp'
import hyderabad from '../assets/Hyderabad.webp'
import mumbai from '../assets/Mumbai.webp'
import vizag from '../assets/Vizag.webp'
import pune from '../assets/Pune.webp'




// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const City = () => {
  return (
    <div className='bg-[#191919] rounded-md flex items-center justify-center py-30 px-10 gap-3 '>
   

    
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        Pagination={{
          clickable: true, 
        }}
        breakpoints={{
          600:{
            slidesPerView: 1,
           
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         
        <SwiperSlide className='mx-15 h-full sm:mx-0 inline-block overflow-hidden rounded-lg relative '>
       
        <img src={Banglore} alt='banglore' className=' w-[300px] h-[250px] bg-gradient-to-t from black/70 to-transparent hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-2 text-white left-10 font-bold translate-x-1/2 text-lg '>Banglore</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={kolkata} alt='kolkata' className='bg-gradient-to-t from black/70 to-transparent w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-10 font-bold translate-x-1/2 text-lg'>Kolkata</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={chennai} alt='chennai' className='bg-gradient-to-t from black/70 to-transparent w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-4 font-bold translate-x-1/2 text-lg'>Chennai</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={delhi} alt='delhi' className='bg-gradient-to-t from black/70 to-transparent border-2 w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-4 font-bold translate-x-1/2 text-lg'>Delhi</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={Goa} alt='gao' className=' bg-gradient-to-t from black/70 to-transparent  w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-4 font-bold translate-x-1/2 text-lg'>Goa</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={hyderabad} alt='hyderabad' className='bg-gradient-to-t from black/70 to-transparent  w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-4 font-bold translate-x-1/2 text-lg'>Hyderabad</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={mumbai} alt='mumbai' className='bg-gradient-to-t from black/70 to-transparent  w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-4 font-bold translate-x-1/2 text-lg'>Mumbai</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={vizag} alt='viyaz' className='bg-gradient-to-t from black/70 to-transparent  w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-4 font-bold translate-x-1/2 text-lg'>Viyaz</p>
        </SwiperSlide>

        <SwiperSlide className='inline-block overflow-hidden rounded-lg'>
        <img src={pune} alt='pune' className='bg-gradient-to-t from black/70 to-transparent  w-[300px] h-[250px] hover:scale-130 duration-700 transition-transform'/>
        <p className='absolute bottom-1 text-white left-4 font-bold translate-x-1/2 text-lg'>Pune</p>
        </SwiperSlide>

      </Swiper>
      
      
      
     
       
       
      
    </div>
  )
}

export default City
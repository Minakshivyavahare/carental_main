import React from 'react'
import {
    FaArrowRight,
    FaCircleArrowLeft,
    FaCircleArrowRight,
  } from "react-icons/fa6";
import CategoryCardHeader from './CategoryCardHeader';
import CategoryCards from './CategoryCards';
import { useSelector } from "react-redux";
import { all } from 'axios';


const CategoryMain = () => {

  const allCar = useSelector((state) => state.car)
 
 
 const getCategoryByCar = (category) =>{

  return allCar?.allCar?.filter((car) => car.category.toLowerCase() === category.toLowerCase())
 }
 
 const suvCar = getCategoryByCar('suv')
 const sedanCar = getCategoryByCar('sedan')
 const jeepCar = getCategoryByCar('jeep')

 
 


 
  return (
    <>
      <div className="bg-black h-screen w-full p-10 pb-0 sm:p-28">
   <CategoryCardHeader />
    
            <div className="grid grid-cols-1 w-full h-fit gap-3 sm:grid-cols-1   md:grid-cols-3 lg:grid-4 xl:grid-cols-4">
         {/* <h2 className='text-white'>SUV:{suvCar?.length}</h2>
         <h2 className='text-white'>Sedans: {sedanCar?.length}</h2>
         <h2 className='text-white'>Hatchbacks: {jeepCar?.length}</h2> */}

        
         <CategoryCards suvCar={suvCar} />
         <CategoryCards sedanCar={sedanCar} />
        
            </div>
          </div>
    </>
  )
}

export default CategoryMain
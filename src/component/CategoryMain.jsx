import React, { useEffect, useState } from 'react'
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
  const [categories, setCategories] = useState([]);

  console.log(allCar.allCar);
  
  

  useEffect(() => {
   
      const uniqueCategory = [...new Set(allCar?.allCar?.map((car) => car.category))]
      setCategories(uniqueCategory);    
    
  }, [allCar]);

  
  

  
 
 
 const getCategoryByCar = (category) =>{

  return allCar?.allCar?.filter((car) => car.category.toLowerCase() === category.toLowerCase())
 }
 
 const suvCar = getCategoryByCar('suv')
 const sedanCar = getCategoryByCar('sedan')
 const jeepCar = getCategoryByCar('jeep')

 
 

 
 


 
  return (
    <>
      <div className="bg-black min-h-screen w-full p-10 pb-0 sm:p-28">
   <CategoryCardHeader />
  
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 mx-auto max-w-[1200px]  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
    

        {
           categories?.map((category) => <CategoryCards category={category} count={getCategoryByCar(category)?.length}/>)
        }
    
       
        
            </div>
         
          </div>
    </>
  )
}

export default CategoryMain
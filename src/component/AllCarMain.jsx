import React, { useEffect, useState } from 'react'
import CardHeader from "../component/CardHeader";
import Cards from "../component/Cards";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCar } from '../features/AllCar/carSlice';
import Skeleton from 'react-loading-skeleton'
import { BookCheck } from 'lucide-react';

const AllCarMain = () => {
  const dispatch = useDispatch();
  const {isLoading, isError,allCar} = useSelector((state) => state.car)


  const [currentPage, setCurrentPage] = useState(1);

 
  useEffect(() =>{
    dispatch(getAllCar(currentPage))

  },[dispatch,currentPage])

 


  if(isError){
    return(
      <>
      <h2>Data not found.......</h2>
      </>
    )
  }
  return (
    <>
    <div className="bg-[#171717] h-full w-full p-10 sm:p-28 ">
    
      <CardHeader />
      <div className="cardContainer gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => <Skeleton key={index} height={50} baseColor="#202020" highlightColor="#444" />)
        
          :allCar?.cars?.map((car) => <Cards car={car} key={car._id} />)}

         
      </div>

      <button 
          disabled={currentPage === 1} 
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 my-2 mx-3 bg-gray-700 hover:bg-[#00A63E] text-white rounded disabled:bg-gray-500"
        >
          Previous
        </button>

        <button 
          disabled={currentPage === allCar.pagination?.pages} 
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-gray-700 hover:bg-[#00A63E] text-white rounded disabled:bg-gray-500"
        >
          Next
        </button>

     
    </div>
  </>
  )
}

export default AllCarMain

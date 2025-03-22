import React, { useEffect } from 'react'
import CardHeader from "../component/CardHeader";
import Cards from "../component/Cards";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCar } from '../features/AllCar/carSlice';
import Skeleton from 'react-loading-skeleton'

const AllCarMain = () => {
  const dispatch = useDispatch();
  const {isLoading, isError,allCar} = useSelector((state) => state.car)


  
  
  useEffect(() =>{
    dispatch(getAllCar())

  },[])

 

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
          : allCar?.map((car) => <Cards car={car} key={car._id} />)}
      </div>
    </div>
  </>
  )
}

export default AllCarMain

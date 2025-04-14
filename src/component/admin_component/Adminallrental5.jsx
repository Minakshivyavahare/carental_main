import React, { useEffect, useState } from 'react'
// import React, { useEffect, useState } from 'react'
// import CardHeader from "../component/CardHeader";

import { useDispatch, useSelector } from 'react-redux';
// import { getAllCar } from '../features/AllCar/carSlice';
import Skeleton from 'react-loading-skeleton'
import Admincars5 from './Admincars5';
import CardHeader from '../CardHeader';
import { getAllCar } from '../../features/AllCar/carSlice';





const Adminallrental5 = () => {




   const dispatch = useDispatch();
    const {isLoading, isError,allCar} = useSelector((state) => state.car)
  
    const [currentPage, setCurrentPage] = useState(1)
  // console.log(allCar);
  
  
     useEffect(()=> {
         dispatch(getAllCar(currentPage))
     }, [currentPage])
    
    
    useEffect(() =>{
      dispatch(getAllCar())
  
    },[])
  return (
    <div className="bg-[#171717] h-full w-full p-10 sm:p-28 ">
    <CardHeader />
    <div className="cardContainer gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {isLoading
        ? Array.from({ length: 9 }).map((_, index) => <Skeleton key={index} height={50} baseColor="#202020" highlightColor="#444" />)
        : allCar?.cars?.map((car) => <Admincars5 car={car} key={car._id} />)}
    </div>
    <button
    disabled= {currentPage ===1}
    onClick={()=> setCurrentPage(currentPage-1)}
    className='bg-white text-black border-amber-900 mx-2 my-2 p-3 rounded-xl'>Previous</button>
    <button
    disabled = {currentPage === allCar.paginations?.pages}
    onClick={()=> setCurrentPage(currentPage+1)}
    className='bg-white text-black border-amber-900 mx-2 my-2 p-3 rounded-xl'>Next</button>
  </div>
  )
}

export default Adminallrental5

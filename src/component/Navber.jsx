import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import logoimge from '../assets/logo-w1.svg';
import menuimge from '../assets/menu.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { logOut } from '../features/auth/AuthSlice';
import {getAllRentalCar} from '../features/rental/RentalSlice'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
 

  const [view,setview]=useState(false)

  const handleLogout = () => {
    dispatch(logOut())
    navigate("/")
  }

  const handleRental = () => {
   dispatch(getAllRentalCar())
   
  }
 

  return (
    <nav className='   flex justify-between lg:flex  items-center py-2 px-4 sm:px-6  text-white'>
      {/* Logo */}
      <div>
       <Link to={'/'}><img className='  h-10    lg:h-15 sm:h-12  object-cover' src={logoimge} alt="Logo" /></Link> 
      </div>
      
      {/* Desktop Menu */}
      {/* <ul className='hidden md:hidden  lg:flex  space-x-4  sm:space-x-0 md:space-x-0  lg:space-x-4 xl:space-x-6'>
        {['Home', 'Vehicles', 'Dealers', 'Shop', 'Contact', 'Dashboard', 'News'].map((item, index) => (
          <li key={index} className='flex items-center space-x-1 cursor-pointer hover:text-green-400 text-sm sm:text-base'>
            <span>{item}</span>
            <IoIosArrowDown />
          </li>
        ))}
      </ul> */}

{
 view &&  <ul className='hidden  md:flex  space-x-4  sm:space-x-0 md:space-x-0  lg:space-x-4 xl:space-x-6'>
   {['Home', 'Vehicles', 'Dealers', 'Shop', 'Contact', 'Dashboard', 'News'].map((item, index) => (
     <li key={index} className='flex items-center space-x-1 cursor-pointer hover:text-green-400 text-sm sm:text-base'>
       <span>{item}</span>
       <IoIosArrowDown />
     </li>
   ))}
 </ul>
}

      <div>
        
      </div>
      
      {/* Desktop Buttons */}
      <div className='hidden md:flex space-x-2 sm:space-x-4 items-center'>
        {
          !user ?    (<Link to={'/login'} className='px-3 sm:px-4 py-2 rounded-lg hover:bg-green-400 text-sm sm:text-base'>Login</Link>) 
          : ( <>
              <div>
              <button onClick={handleRental}> <Link to={"/user"}><FaRegUserCircle className='text-3xl hover:text-green-400'/></Link></button>
              </div>
              <Link  onClick={handleLogout} className='px-3  sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400 text-sm sm:text-base'>Logout</Link>
            
              </>
          
           )
        }
      {/* <Link to={'/register'} className='px-3 sm:px-4 py-2 rounded-lg hover:bg-green-400 text-sm sm:text-base'>Register</Link> */}
      
        <Link to={'/login'} className='px-3 sm:px-4 py-2 rounded-lg hover:bg-green-400 w-full text-sm sm:text-base'>theme</Link>
        {/* <Link to={'/user'} className='px-3  sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400 text-sm sm:text-base'>User</Link> */}
       
        {/* <Link to={'/admin'} className='px-3  sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400 text-sm sm:text-base'>Admin</Link> */}
        <button onClick={()=>setview(view ? false : true)} className=' bg-green-400 lg:hidden rounded-xl ' ><img className='   py-3 bg-green-400  rounded-xl px-3 hover:bg-white  transition-all duration-300' src={menuimge} alt="" /></button>

        
      </div>
      
      {/* Mobile Menu Icon */}
      <button className='md:hidden' onClick={() => setIsOpen(true)}>
        <CgMenuGridR size={24} sm:size={30} />
      </button>
      
      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className='fixed top-0 right-0  w-50  sm:w-70 md:w-100 h-120 bg-black text-white p-4 sm:p-6 flex flex-col items-start space-y-4 sm:space-y-6 shadow-lg z-50'>
          <button className='self-end' onClick={() => setIsOpen(false)}>
            <IoMdClose size={24} sm:size={30} />
          </button>
          <ul className='flex flex-col space-y-3 sm:space-y-4'>
            {['Home', 'Vehicles', 'Dealers', 'Shop', 'Contact', 'Dashboard', 'News'].map((item, index) => (
              <li key={index} className='flex items-center space-x-2 cursor-pointer hover:text-green-400 text-sm sm:text-base'>
                <span>{item}</span>
                <IoIosArrowDown />
              </li>
            ))}
          </ul>
          <div className=' w-full'>
          {
          !user ?    (<Link to={'/login'} className='px-3 sm:px-4 py-2 rounded-lg hover:bg-green-400 text-sm sm:text-base'>Login</Link>) 
          : ( <>
              <div>
              <button onClick={handleRental}> <Link to={"/user"}><FaRegUserCircle className='text-3xl'/></Link></button>
              </div>
              <Link onClick={handleLogout} className='px-3  sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400 text-sm sm:text-base'>Logout</Link>
            
              </>
          
           )
        }
          {/* <Link to={'/register'} className='px-3 sm:px-4 py-2 rounded-lg hover:bg-green-400 text-sm sm:text-base'>Register</Link> */}
         
          <Link to={'/login'} className='px-3 sm:px-4 py-2 rounded-lg hover:bg-green-400 w-full text-sm sm:text-base'>theme</Link>
          {/* <Link to={'/user'} className='px-3  sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400 text-sm sm:text-base'>User</Link> */}
       
          {/* <Link to={'/admin'} className='px-3  sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400 text-sm sm:text-base'>Admin</Link> */}

          <button className='px-3 mt-1 sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400 w-full text-sm sm:text-base'>theme</button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




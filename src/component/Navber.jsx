import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import logoimge from '../assets/logo-w1.svg';
import menuimge from '../assets/menu.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/AuthSlice';
import {getAllRentalCar} from '../features/rental/RentalSlice'
import { getAdminRental } from '../features/admin/AdminSlice';
import { FaUser } from "react-icons/fa";

import { User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()




  const [view,setview]=useState(false)

  const handleLogout = () => {
    dispatch(logOut())

 
  }
  useEffect(() =>{
    if(!user){
      navigate("/")
    }
  
  },[user])

  const handleRental = () => {
    dispatch(getAllRentalCar())
  
    
   }
   const handleRentalAdmin = () => {
    dispatch(getAdminRental())
    
   }
 
 
  return (
    <nav className='   flex justify-between lg:flex  items-center py-2 px-4 sm:px-6  text-white '>
      {/* Logo */}
      <div>
        {/* <h1>WanderCar</h1> */}
       <Link to={'/'}><img className='  h-10    lg:h-15 sm:h-12  object-cover' src={logoimge} alt="Logo" /></Link> 
      </div>
      
      {/* Desktop Menu */}
      <ul className='hidden md:hidden  lg:flex  space-x-4  sm:space-x-0 md:space-x-0  lg:space-x-4 xl:space-x-6'>
        {[
          {name:"Home", path: '/'},
          {name:"About", path: '/about'},
          {name:"Services", path: '/service'},
         
          {name:"Terms & Conditions", path: '/term'},
         
        ].map((item, index) => (
          <li key={index} className='flex items-center space-x-1 cursor-pointer hover:text-green-400 text-white font-bold text-sm sm:text-base'>
            <Link to={item.path}>{item.name}</Link>
           
          </li>
        ))}
      </ul>

{
 view &&  <ul className='hidden  md:flex  space-x-4  sm:space-x-0 md:space-x-0  lg:space-x-4 xl:space-x-6 gap-4' >
   {[{ name: 'Home', path: '/' },
     {name: 'About', path: '/about'},
     {name: "Service", path: '/service'},
     {name:"Terms & Conditions", path: '/term'},
    
     ].map((item, index) => (
     <li key={index} className='flex items-center space-x-1 cursor-pointer hover:text-green-400 text-sm sm:text-base'>
       <Link to={item.path}>{item.name}</Link>
       
     </li>
   ))}
 </ul>
}

      <div>
        
      </div>
      
      {/* Desktop Buttons */}
      <div className='hidden md:flex space-x-2 sm:space-x-4 items-center'>
        {
          !user ?    (<Link to={'/login'} className='px-1 flex gap-1 sm:px-4 py-2 rounded-lg hover:bg-green-400 text-sm sm:text-base'><User className='m-0 p-0' />Login</Link>) 
          : ( <>
              <div>
              {
                  user.isAdmin ? <button className='px-3  sm:px-4 py-2  rounded-lg hover:bg-green-400 text-sm sm:text-base gap-1' onClick={handleRentalAdmin}> <Link to={"/admin"}  className='flex items-center gap-1 text-white font-bold'><User className='font-bold text-2xl ' />Welcome Admin</Link></button> 
                  :  (<button className='px-3   sm:px-4 py-2  rounded-lg hover:bg-green-400 text-sm sm:text-base' onClick={handleRental}> <Link to={"/user"} className='flex items-center gap-1'><User className='text-2xl'/>Welcome {user.name}</Link></button>)
                }
           
              </div>
              <Link  onClick={handleLogout} className='px-3  sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-green-400  font-semibold text-sm sm:text-base'>Logout</Link>
            
              </>
          
           )
        }
     
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
            {[
              {name:'Home', path:"/"},
              {name:'About', path:"/about"},
              {name:'Service', path:"/service"},
              {name:"Terms & Conditions", path: '/term'},
             ].map((item, index) => (
              <li key={index} className='flex items-center space-x-2 cursor-pointer hover:text-green-400 text-sm sm:text-base'>
                 <Link to={item.path}>{item.name}</Link>
              
              </li>
            ))}
          </ul>
          <div className=' w-full'>
          {
          !user ?    (<Link to={'/login'} className='px-1 flex gap-1 sm:px-4 py-2 rounded-lg hover:bg-green-400 text-sm sm:text-base'><User className='m-0 p-0' />Login</Link>) 
          : ( <>
              <div>
              {
                  user.isAdmin ? <button className='px-3  sm:px-4 py-1  rounded-lg hover:bg-green-400 text-sm sm:text-base gap-1' onClick={handleRentalAdmin}> <Link to={"/admin"}  className='flex items-center  gap-1'><User className=' text-2xl' />Admin</Link></button> 
                  :  (<button className='px-3   sm:px-1 py-2  rounded-lg hover:bg-green-400 text-sm sm:text-base' onClick={handleRental}> <Link to={"/user"} className=' gap-1'><User className='text-2xl'/> {user.name}</Link></button>)
                }
           
              </div>
              <Link  onClick={handleLogout} className='px-3  sm:px-1 py-2  rounded-lg hover:bg-green-400 text-sm sm:text-base'>Logout</Link>
            
              </>
          
           )
        }
      
         
          
         
        

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




import React, { useEffect, useState } from "react";

import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/AuthSlice";
import Skeleton from 'react-loading-skeleton'


const Register = () => {

  const {user, isLoading, isError , message} = useSelector(state => state.auth)
  // console.log(user);
  

  const dispatch = useDispatch()
  const navigate = useNavigate()




  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
    phone : ""
  })

  const {name, email, password, phone} = formData

  const handleChange =(e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value

    })
  }

  const handleSubmit = (e) =>{
     e.preventDefault()
     dispatch(registerUser(formData))


  }

  useEffect(()=> {
if(user){
  navigate("/")
}
if(isError && message) {
  console.log("Error is found in Register");
  
}
   

  }, [isError, message, user])

  if(isLoading){
    return Array.from({ length: 1 }).map((_, index) => <Skeleton key={index} height={300} baseColor="#202020" highlightColor="#444" />)
  }
 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 py-30">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-white">
      <div className="flex justify-center">
          <button className="bg-green-500 text-white px-4 py-1 rounded-full text-base  mb-4">
            Register
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Create an Account
        </h2>
        <form  onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="text"
              placeholder=" Username"
              name="name"
              onChange={handleChange}
              value = {name}
              
              required
            />
          </div>
          <div className="relative mb-4">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value = {email}
              
              required
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value = {password}
             
              required
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="number"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
              value = {phone}
             
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" required />
            <label>I agree to terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 p-2 rounded text-white font-bold hover:bg-green-600"
          >
            Sign up →
          </button>
        </form>
        <div className="text-center mt-4">
          Or connect with your social account
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-gray-700 px-3 py-2 rounded-md flex items-center gap-2 ">
            <FcGoogle />
            Sign up with Google
          </button>
          <button className="bg-gray-700 px-3 py-2 rounded-md ">
            <IoLogoFacebook />
          </button>
          <button className="bg-gray-700 px-3 py-2 rounded-md ">
            <BsApple />
          </button>
        </div>
        <div className="text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to={'/login'} className="text-green-400">
            Login Here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/AuthSlice";
import Skeleton from 'react-loading-skeleton'


const Login = () => {

  const {user, isLoading, isError, message} = useSelector(state => state.auth)
 
  

const dispatch = useDispatch()
const navigate = useNavigate()


  const [loginData, setLoginData] = useState({
     email : "",
     password : ""
  })

  const {email, password} = loginData

  const handleChange = (e) => {
    
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }
 
  const handleSubmit = (e) => {
     e.preventDefault()
     dispatch(loginUser(loginData))

  }

  useEffect(()=> {
if(user){
  navigate('/')
}
if(isError && message){
  console.log("Erro message is Found  in login");
  
}


  }, [user, isError, message])

  if(isLoading){
    return  Array.from({ length: 1 }).map((_, index) => <Skeleton key={index} height={300} baseColor="#202020" highlightColor="#444" />)
  }

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="bg-gray-800  p-8 rounded-2xl shadow-lg w-96 text-white">
        <div className="flex justify-center">
          <button className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
            Sign in
          </button>
        </div>
        <h1 className="text-center text-white text-2xl font-bold mt-4">
          Welcome back
        </h1>

        <form  className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="border border-gray-400 p-3 rounded-md my-2 bg-gray-700 text-gray-400 outline-none w-full pl-10"
              type="email"
              placeholder="Email"
              required
              name="email"
              onChange={handleChange}
              autocomplete=""
              value={email}
              
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaUser />
            </span>
          </div>
          <div className="relative">
            <input
              className="border border-gray-400 p-3 rounded-md my-2 bg-gray-700 text-white outline-none w-full pl-10"
              type="password"
              placeholder="Password"
              required
              autocomplete="current-password"
              name="password"
              onChange={handleChange}
              value={password}
              
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔒
            </span>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-green-400 py-3 rounded-md my-3 text-white font-bold hover:bg-green-600 w-full flex items-center justify-center gap-2"
          >
            Sign in →
          </button>
        </form>

        <p className="text-center mt-3 text-sm text-gray-400">
          Or connect with your social account
        </p>
        <div className="flex justify-center mt-3 gap-3">
          <button className="bg-gray-700 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-600 w-full text-sm">
            <FcGoogle />
            Sign up with Google
          </button>
          <button className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
            <IoLogoFacebook />
          </button>
          <button className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600">
            <BsApple />
          </button>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          {/* <a to={"/register"}  className="text-white font-bold">
            Register Here!
          </a> */}
          <Link to={'/register'} className="text-white font-bold">
            Register Here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

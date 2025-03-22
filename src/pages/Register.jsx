import React from "react";

import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";


const Register = () => {
 

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
        <form>
          <div className="relative mb-4">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="text"
              placeholder="Email / Username"
              name="name"
              
              required
            />
          </div>
          <div className="relative mb-4">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="email"
              placeholder="Email / Username"
              name="email"
              
              required
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="password"
              placeholder="********"
              name="password"
             
              required
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              className="pl-10 w-full p-2 rounded bg-gray-700 text-white border border-gray-700-1 focus:outline-none"
              type="password"
              placeholder="********"
              name="password2"
             
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

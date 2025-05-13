import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col items-center justify-center text-white px-4'>
    <h1 className='text-6xl font-bold mb-4 text-blue-500'>404</h1>
    <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
    <p className='mb-6 text-gray-300'>Sorry, the page you're looking for doesn't exist.</p>
    <Link
      to='/' 
      className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition'
    >
      Go Back Home
    </Link>
  </div>
  )
}

export default PageNotFound
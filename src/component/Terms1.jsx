import React from 'react'
import termsimge from '../assets/termsimage.png'

const Terms1 = () => {
  return (
    <div className=" h-100  sm:flex  sm:items-center   bg-right-bottom  bg-cover sm:bg-center  object-cover " style={{ backgroundImage: `url(${termsimge})`, backgroundSize: 'cover' }}>
 
<div className='sm:px-20 px-10 py-10  '>
   
<h1 className='font-bold  text-4xl sm:text-6xl  text-black'>
Terms of Use</h1>
</div>
 
    </div>
  )
}

export default Terms1
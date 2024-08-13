import React from 'react'

import { FaArrowRight } from "react-icons/fa";

import gallery_1 from '../assets/gallery_1.jpeg'
import gallery_2 from '../assets/gallery_2.jpeg'
import gallery_3 from '../assets/gallery_3.jpeg'
import gallery_4 from '../assets/gallery_4.jpeg'

export default function Campus() {
  return (
    <div className='w-[90%] mx-auto my-[80px]'>
        <div className='flex flex-col justify-center items-center mb-8'>
            <h3 className='text-orange-600 font-medium'>GALLERY</h3>
            <h1 className='text-3xl mt-1 font-medium'>Campus Photos</h1>
        </div>
      <div className='flex justify-between px-10'>
        <img className='w-[23%] rounded-md opacity-85 hover:opacity-100 transition duration-150' src={gallery_1} alt="" />
        <img className='w-[23%] rounded-md opacity-85 hover:opacity-100 transition duration-150' src={gallery_2} alt="" />
        <img className='w-[23%] rounded-md opacity-85 hover:opacity-100 transition duration-150' src={gallery_3} alt="" />
        <img className='w-[23%] rounded-md opacity-85 hover:opacity-100 transition duration-150' src={gallery_4} alt="" /> 
      </div>
      <button className='flex items-center bg-orange-500 text-white font-medium text-lg px-6 py-2 mt-6 gap-2 rounded-md mx-auto cursor-pointer hover:bg-orange-600 transition duration-100'>
        <span>See more here</span>
        <span><FaArrowRight /></span>
      </button>
    </div>
  )
}

import React from 'react'

import program_1 from '../assets/p1_doctors.jpeg'
import program_2 from '../assets/p2_architect.jpeg'
import program_3 from '../assets/p2_enguneers.jpeg'

import { FaUserDoctor } from "react-icons/fa6";


export default function Programs() {
  return (
    <div className='w-[80%] flex items-center justify-between mx-auto my-[80px]'>
      <div className='basis-[31%] relative'>
        <img className='w-[100%] rounded-lg' src={program_1} alt="" />
        <div className='text-black absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center opacity-0 transition duration-150 bg-black hover:opacity-85 rounded-lg'>
            <FaUserDoctor className='text-white text-4xl'/>
            <p className='text-white'>Doctor Degree</p>
        </div>
      </div>
      <div className=' basis-[31%] relative'>
        <img className='w-[100%] rounded-lg' src={program_2} alt="" />
        <div className='text-black absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center opacity-0 transition duration-150 bg-black hover:opacity-85 rounded-lg'>
            <FaUserDoctor className='text-white text-4xl'/>
            <p className='text-white'>Architect Degree</p>
        </div>
      </div>
      <div className='basis-[31%] relative'>
        <img className='w-[100%] rounded-lg' src={program_3} alt="" />
        <div className='text-black absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center opacity-0 transition duration-150 bg-black hover:opacity-85 rounded-lg'>
            <FaUserDoctor className='text-white text-4xl'/>
            <p className='text-white'>Engineer Degree</p>
        </div>
      </div>
    </div>
  )
}

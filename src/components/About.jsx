import React from 'react'

import graduation from '../assets/graduation.jpg'

import { FaCirclePlay } from "react-icons/fa6";

export default function About() {
  return (
    <div className='w-[80%] m-auto flex justify-between items-center mb-10'>
        <div className='basis-[40%] relative'>
          <img src={graduation} alt="" className='w-[100%] rounded-md'/>
          <FaCirclePlay className='text-white text-5xl absolute top-[50%] left-[50%] opacity-55 hover:opacity-100 cursor-pointer transition duration-100 '/>
        </div>
        <div className='basis-[55%]'>
          <h1 className='text-2xl text-orange-500 font-bold'>ABOUT UNIVERSITY</h1>
          <h2 className='text-2xl mb-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, modi debitis a voluptas, dolorum quas dicta totam ut esse eos harum rem. Ea asperiores, odit ipsa vero eaque delectus distinctio quisquam maxime nihil dolorum qui odio repellat </p>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, modi debitis a voluptas, dolorum quas dicta totam ut esse eos harum rem. Ea asperiores, odit ipsa vero eaque delectus distinctio quisquam maxime nihil dolorum qui odio repellat </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, modi debitis a voluptas, dolorum quas dicta totam ut esse eos harum rem. Ea asperiores, odit ipsa vero eaque delectus distinctio quisquam maxime nihil dolorum qui odio repellat </p>
        </div>
    </div>
  )
}

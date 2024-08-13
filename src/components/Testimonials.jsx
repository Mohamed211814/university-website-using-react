import React from 'react'

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import reviews from './reviews';

export default function Testimonials() {
  return (
    <div className='mb-10 w-[80%] mx-auto relative'>
        <FaArrowAltCircleRight className='text-4xl absolute right-0 cursor-pointer top-[50%] translate-y-[-50%]'/>
        <FaArrowAltCircleLeft className='text-4xl absolute left-0 cursor-pointer top-[50%] translate-y-[-50%]'/>
        <div className='overflow-hidden mr-12'>
            <ul className='flex gap-10 w-[200%] px-16 overflow-x-hidden'>
                    {
                        reviews.map((review , index) => (
                        <li className='p-6 shadow-sm shadow-gray-500'>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <img className='w-[55px] h-[55px] rounded-full' src={review.image} alt="" />
                                    <div> 
                                        <h3 className='text-lg font-medium'>{review.name}</h3>
                                        <span className='text-sm font-medium'>{review.adrs}</span>
                                    </div>
                                </div>
                                
                                <p className='mt-4 text-sm'>{review.description}</p>
                            </div>
                        </li>
                    ))
                    }
            </ul>
        </div>
    </div>
  )
}
 
import { MdSchool } from "react-icons/md";

import list from "./list";

import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const [dark , setDark] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll' , () => {
      window.scrollY > 50 ? setDark(true) : setDark(false);
    })
  },[])

  return (
    <nav className={`flex justify-between items-center w-[100%] px-24 m-auto my-4 sticky top-0 
    ${dark ? 'bg-black text-white w-[100%] py-4 transition duration-75 z-50' : ''}`}> 
        <h1 className='flex items-center font-medium text-2xl'> 
            <MdSchool className="text-5xl"/>
            <span className="pl-2">SchoolCity</span>
        </h1>

        <ul className='flex w-[45%] justify-evenly'>
            {
                list.map((item,index) => (<li className="cursor-pointer hover:text-orange-400 transition-all du" key={item.id}>
                    {item.name}</li>))
            }
        </ul>
    </nav>
  )
}
  
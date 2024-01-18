import React from 'react'
import { SiVercel } from "react-icons/si";
const Footer = () => {
  return (
    <>
    <div className='w-full'>
      <hr className='border border-dashed border-1 ' />
        <div className='lg:max-w-7xl mx-auto px-5 py-2'>
          <p className='text-center'>Ervin Blog © 2024 </p>
          <div className='flex justify-center items-center gap-2'>
          <p className='text-center '>Diterbitkan dengan </p>
          <span className='bg-black p-1.5 rounded-md flex items-center gap-2 text-[#fff] '><SiVercel size={15} />Vercel</span>
          </div>
            <div></div>
        </div>
    </div>
    </>
  )
}

export default Footer
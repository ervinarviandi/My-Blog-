import React from 'react'
import { MdStar } from "react-icons/md";

const star = () => {
  return (
    <>
   <span className='flex items-center justify-center gap-2 rounded-full py-1.5 px-4 bg-[#fff]'>
    <span className='text-[#000] text-sm'>Unggulan</span>
    <MdStar size={20} className='text-amber-500'/>
    </span>  
    </>
  )
}

export default star
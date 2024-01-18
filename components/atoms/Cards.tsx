
"use client"
import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import Logo from "@/app/assets/ervinarviandi.jpg"
import Logo1 from "@/app/assets/thumbnails/uitools.jpg"
import Sliders from "@/components/atoms/sliders/Sliders"


import Link from 'next/link'

export default function Cards() {

  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className='lg:flex items-center flex-between  gap-5 my-5'>
        <div className='lg:w-8/12'>
          <div className='w-full h-80 overflow-hidden '>
          <Sliders/>
          </div>
        </div>
        <div className='lg:w-4/12'>
          <div className='relative  overflow-hidden  rounded-lg shadow-md hover:scale-105 transition duration-700 ease-in-out group lg:mt-0 md:mt-0 mt-5'>
            <Link href="">
              <div>
              <Image src={Logo} width={35} height={35} alt='profile' 
          className={`
          duration-700 ease-in-out  rounded-full border-2 dark:border-gray-700 border-gray-300 absolute
          left-5 top-5 z-10 group-hover:shadow-lg
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
        onLoad={() => setLoading(false)} priority={true}/>
              </div>
              <div className='overflow-hidden'> 
                <Image src={Logo1} width={500} height={500} alt='card2'  className={`
          rounded-t-lg object-cover group-hover:brightness-50
            
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
        onLoad={() => setLoading(false)} priority={true}/>
              </div>
              <div className='p-4'>
              <span className="text-tailwind text-sm">Senin, 15 jan 2024</span>
              <h1 className='font-semibold capitalize  text-base sm:text-lg mt-5'>
              <span className="bg-gradient-to-r from-tailwind to-purple-400 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">Step by step belajar front-end untuk pemula</span>
              </h1>
              </div>
            </Link>
          </div>
        </div>
    </div>
    </>
  )
}

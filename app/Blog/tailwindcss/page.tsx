"use client"
import React from 'react'
import Image from "next/image"
import ContentSlug from "@/app/Blog/tailwindcss/components/Content"
import Navigation from '@/components/atoms/slug/Navigation'
import { useState } from 'react'
import Footer from '@/components/commons/Footer'



const Page = () => {
    const [isLoading, setLoading] = useState(true);

//    pendiri tailwindcss "https://twitter.com/adamwathan"

  return (
    <>
    <Navigation/>
    <div className='w-full  h-[200vh]'>
        <div className='lg:max-w-6xl mx-auto pt-20  '>
            <div className='flex justify-center items-center w-full h-60  overflow-hidden'>
            <Image src="https://live.staticflickr.com/65535/53457268116_d836bf1fac_k.jpg" width={1500} height={100} alt='tailwindsthumbnails' className={`
                  bg-cover fill
                    ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                  onLoad={() => setLoading(false)} priority={true}/>
            </div>
            <div className='px-2'>
            <h1 className='lg:w-7/12 mx-auto font-bold lg:text-4xl text-2xl text-center mt-5'>Mengenal Apa itu <br /> Tailwind CSS</h1>

            <hr className=' border-dashed  dark:border-[#525252] border-1 border-white-100 my-5' />
            <div className='flex justify-between relative  gap-5'>
              <div className='lg:w-9/12'>
            <div className='max-w-5xl mx-auto px-5 my-7'>
                <ContentSlug/>
            </div>
            </div>
            <div className='lg:w-3/12 lg:block hidden  border border-tailwind absolute right-0 top-52 '>
              <div className='overflow-y-scroll myScroll h-72 bg-gray-500 '>
                <div className=' h-52 w-full bg-gray-300 p-2 '>

                </div>
                <div className=' h-52 w-full bg-rose-300 p-2 '>

                </div>
                <div className=' h-52 w-full bg-purple-300 p-2 '>

                </div>
                <div className=' h-52 w-full bg-purple-300 p-2 '>

                </div>
                <div className=' h-52 w-full bg-purple-300 p-2 '>

                </div>
              </div>
            </div>
            </div>
            <Footer/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Page
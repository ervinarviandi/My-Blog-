import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LinkCards from "@/app/Blog/toolsui/components/data"



const Card = () => {
  return (
    <>
    <div className="  ">
              {
                LinkCards.map((card, index) =>  (
                  <div key={index}  className="relative  lg:w-9/12 border-2 border-tailwind my-5 rounded-lg shadow-md overflow-hidden transition duration-700 ease-in-out group  " >
                    <Link href={card.link}>
                    <div className='flex lg:justify-between md:justify-between gap-5 '>
                        <div className='lg:w-8/12 p-4 '>
                        <h1 className='lg:text-lg text-md group-hover:font-bold'>
                        <span className="bg-gradient-to-r from-tailwind to-purple-400 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">{card.title}</span> 
                    </h1>
                    <p className='lg:text-md text-sm dark:text-gray-400 text-gray-600 pt-2 '>{card.description}</p>
                    <span className='bg-purple-400/70 flex  backdrop-blur rounded-br-md p-1.5 text-sm absolute  group-hover:bottom-0 -bottom-20 duration-700 ease-in-out transition group-hover:right-0 text-[#fff] z-10'>{card.items}</span>
                      </div>
                    <div className='lg:w-4/12 lg:block md:block hidden  overflow-hidden '>
                        <Image src={card.img} width={600} height={300} className=' rounded-r-lg object-cover scale-125 group-hover:scale-150 duration-700 transition' alt='logo1'/>
                    </div>
                    </div>
                    </Link>
                  </div>
                ))
              }
    </div>
    </>
  )
}

export default Card
"use client"  
import Image from "next/image"
import Cards from "../atoms/Cards"
import cardlist from "@/app/data"
import Link from "next/link"
import { useState } from "react"

const Hero = () => {


  const [isLoading, setLoading] = useState(true);

  return (
    <>
    <div className='w-full py-10'>
        <div className='lg:max-w-6xl mx-auto px-5'>
            <Cards/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 ">
              {
                cardlist.map((card, index) =>  (
                  <div key={index}  className="relative  overflow-hidden  rounded-lg shadow-md hover:scale-105 transition duration-700 ease-in-out group" >
                    <Link href={card.link}>
                    <Image src={card.profile} width={35} height={35} alt="profile" className="absolute rounded-full border-2 dark:border-gray-700 border-gray-200 top-5 left-5 z-10 hover:scale-125 duration-300 "/>
                    
                    <Image src={card.img} width={500} height={500} alt="card1" className={`
                    rounded-t-lg object-cover group-hover:brightness-50
                    ${
                      isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                  onLoad={() => setLoading(false)} priority={true}/>
                    <div className="p-4"> 
                      <span className="text-tailwind text-sm">{card.date}</span>
                    <h3 className="font-semibold capitalize  text-base sm:text-lg mt-5"><span className="bg-gradient-to-r from-tailwind to-purple-400 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">{card.title}</span> </h3>
                    <p className="lg:text-md text-sm mt-3 dark:text-gray-400 text-gray-600">{card.description}</p>

                    {/* <div className="mt-5 flex items-center gap-2">
                    <span className="mt-5 text-xs p-1.5 rounded-md bg-teal-400 text-white ">{card.tags1}</span>
                    </div> */}
                    </div>
                  </Link>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
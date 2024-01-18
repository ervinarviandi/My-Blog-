"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import React  from 'react'
import { useState } from 'react'
import { ModeToggle }from "@/components/ui/toggle-theme"
import Image from 'next/image'
import Logo from "@/app/assets/ervinarviandi.jpg"




const Navbar = () => {

  const [isLoading, setLoading] = useState(true);
  return (
    <>
    <div className='w-full mx-auto fixed myNavigation z-20 p-5   '>
        <div className='lg:max-w-xl mx-auto  flex items-center justify-center gap-5 p-4 rounded-full  backdrop-blur   lg:dark:bg-black/70 lg:bg-white/70 border dark:border-gray-700 border-gray-300  '>
        <div className='w-3/12 flex items-center justify-center'>
          <Image src={Logo} width={40} height={40} alt='profile' 
           className={`
           duration-700 ease-in-out group-hover:opacity-75 rounded-full border-2 dark:border-gray-700 border-gray-300 z-10
           ${
             isLoading
               ? "scale-110 blur-2xl grayscale"
               : "scale-100 blur-0 grayscale-0"
           })`}
       onLoad={() => setLoading(false)} priority={true}/>
      


        </div>

        <div className="w-6/12  ">
        <ul className='lg:flex md:flex hidden justify-center items-center gap-2 mx-auto'>
          <li className='dark:text-gray-300 text-gray-700'>Home</li>
          <li className='dark:text-gray-300 text-gray-700'>Portfolio</li>
          <li className='dark:text-gray-300 text-gray-700'>Support</li>
        </ul>
        <div className=" lg:hidden md:hidden flex justify-center items-center ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="rounded-full">
              <NavigationMenuTrigger className="rounded-full">Home</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col p-4  gap-3 rounded-full">
                <NavigationMenuLink href="https://ervinarviandi.vercel.app" target="blank">
                  Portfolio
                </NavigationMenuLink>
                <NavigationMenuLink>
                  Support
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>
       </div>
       
          <div className="w-3/12 flex justify-center items-center">
              <ModeToggle/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
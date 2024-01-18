"use client"
import React from 'react'
import Image from "next/image"
import ContentSlug from "@/app/Blog/toolsui/components/Content"
import Navigation from '@/components/atoms/slug/Navigation'
import { useState } from 'react'
import Footer from '@/components/commons/Footer'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
  
const Page = () => {
    const [isLoading, setLoading] = useState(true);



  return (
    <>
    <Navigation/>
    <div className='w-full  h-[200vh]'>
        <div className='lg:max-w-6xl mx-auto pt-20  '>
            <div className='flex justify-center items-center w-full h-60 overflow-hidden'>
            <Image src="https://live.staticflickr.com/65535/53465025219_11012e06a8_k.jpg" width={1500} height={100} alt='tailwindsuithumbnails' className={`
                  object-cover
                    ${
                    isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    })`}
                  onLoad={() => setLoading(false)} priority={true}/>
            </div>
            <div className='px-2'>
            <h1 className='lg:w-7/12 mx-auto font-bold lg:text-4xl text-2xl text-center mt-5'>List Kumpulan Tailwind UI Kit dan Tailwind UI Block</h1>
            <hr className=' border-dashed  dark:border-[#525252] border-1 border-white-100 my-5 ' />
            <div className='flex justify-between relative  gap-5'>
              <div className='lg:w-9/12'>
            <div className='max-w-5xl mx-auto px-5 my-7'>
                <ContentSlug/>
            </div>
            </div>
            <div className='lg:w-3/12 lg:block hidden  border  right-0 top-52 rounded-md absolute'>
              <div className='overflow-y-scroll myScroll h-72 rounded-md '>
              <Command>
                  <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                        <CommandItem>Profile</CommandItem>
                        <CommandItem>Billing</CommandItem>
                        <CommandItem>Settings</CommandItem>
                        <CommandItem>Profile</CommandItem>
                        <CommandItem>Billing</CommandItem>
                        <CommandItem>Settings</CommandItem>
                        </CommandGroup>
                    </CommandList>
                    </Command>
               
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
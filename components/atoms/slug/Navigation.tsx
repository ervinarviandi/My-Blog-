import React from 'react'
import ItemsSlug from "@/components/atoms/slug/elements/Item"
import Link from "next/link"
import { FaHandPointLeft } from "react-icons/fa";
const Navigation = () => {
  return (
    <> 
    <div className='w-full fixed backdrop-blur z-20'>
        <div className='lg:max-w-7xl mx-auto px-5 p-4'>
            <div className='flex justify-between items-center '>
                <Link href="/" className='flex items-center gap-2'> <FaHandPointLeft size={20}/>Back</Link>
                <ItemsSlug/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navigation
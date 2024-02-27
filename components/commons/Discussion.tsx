
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Comments from '../atoms/discussion/Comments'
import { FaRegCommentDots } from "react-icons/fa";

const Discussion = () => {
  return (
   <div className='fixed bottom-10 right-5 z-50'>
    <Dialog>
  <DialogTrigger className='rounded-full p-4 items-center flex backdrop-blur bg-gray-700/60 border-1 border dark:border-gray-400 text-gray-700'><FaRegCommentDots size={20} className='dark:text-[#fff] text-[#fff] '/></DialogTrigger>
  <DialogContent className='w-full h-full'>
    <DialogHeader>
   <Comments/>
    </DialogHeader>
  </DialogContent>
</Dialog>
   </div>
  )
}

export default Discussion
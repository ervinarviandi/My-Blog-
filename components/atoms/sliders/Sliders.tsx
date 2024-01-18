"use client"
import React, { useRef, useState } from 'react';
import SwiperCore from 'swiper'
SwiperCore.use([Navigation])
import { HiMiniArrowLongRight, HiMiniArrowLongLeft  } from "react-icons/hi2";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '@/app/globals.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import Star from "@/components/atoms/slug/elements/star"


export default function sliders() {
  const swiperRef = useRef<SwiperType>();

  return (

    <>
        <Swiper   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
         grabCursor={true}
          keyboard={true} 
          loop={true}
          modules={[Navigation, Autoplay]}   

        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}

        className="mySwiper relative"
        >
        <SwiperSlide className=" image rounded-lg relative">
          <div className="absolute right-10 top-5 ">
            <Star/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-2 rounded-lg">
        </SwiperSlide>
        <SwiperSlide className="slider-3 rounded-lg">
        </SwiperSlide>
        <SwiperSlide className="slider-4 rounded-lg"></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="absolute bottom-10 right-5 z-10 flex flex-end  justify-end items-center gap-2">
         <button className=" py-2 px-6 text-[#fff] hover:border-tailwind hover:border border duration-700 ease-in-out transition p-2 rounded-lg  " onClick={() => swiperRef.current?.slidePrev()}><HiMiniArrowLongLeft size={20} /></button>
        <button className=" py-2 px-6 text-[#fff] hover:border-tailwind hover:border border duration-700 ease-in-out transition p-2 rounded-lg  "  onClick={() => swiperRef.current?.slideNext()}><HiMiniArrowLongRight size={20} /></button>
        </div>
      </Swiper>
    </>
  )
}

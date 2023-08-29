import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Image from 'next/image'
import { slideData } from "@/constants/data";
import {  BiChevronsLeft } from 'react-icons/bi'

const HeroSlider = () => {
    return (
      <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto bg-orange-200'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler) => (
            <div
              onClick={clickHandler}
              className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
            >
              <BiChevronsLeft className='text-sm md:text-lg text-black' />
            </div>
          )}
          renderArrowNext={(clickHandler) => (
            <div
              onClick={clickHandler}
              className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90'
            >
              <BiChevronsLeft className='rotate-180 text-sm md:text-lg text-black' />
            </div>
          )}
        >
          {slideData.map(({ id, title, image }) => {
            return (
              <div key={id}>
                <Image
                  src={image}
                  className='aspect-[16/10] md:aspect-auto object-contain h-[400px] md:h-[500px] w-full md:w-[1000px] mx-auto'
                  alt={title}
                  width={400}
                  height={400}
                />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[10px] bg-white absolute bottom-0 left-0 text-black/[0.9] text-[15px] md:text-[15x] font-medium cursor-pointer hover:opacity-90'>
                  Read More
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    )
};

export default HeroSlider;

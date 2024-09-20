import React, { useState } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const prevSlide = () => {
    setcurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const nextSlide = () => {
    setcurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-full h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex"
        >
          <img src={banner1} alt="" className="w-screen h-full object-cover" />
          <img src={banner2} alt="" className="w-screen h-full object-cover" />
          <img src={banner3} alt="" className="w-screen h-full object-cover" />

          <img src={banner4} alt="" className="w-screen h-full object-cover" />
        </div>

        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-500 duration-300"
            onClick={prevSlide}
          >
            <HiArrowLeft />
          </div>
          <div
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-500 duration-300"
            onClick={nextSlide}
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

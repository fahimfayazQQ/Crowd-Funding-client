"use client";
import Image from "next/image";
import React, {useRef} from "react";
import Coke from "../../public/assets/images/cocacola.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Articles = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: '0',
  };
  return (
    <div className="max-w-screen-xl py-20 mx-auto">
      <div className="text-zinc-700 tracking-widest text-sm mb-3">
        - ARTICLES
      </div>
      <div className="w-1/3 text-2xl">
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length
      </div>
      <div className="my-5">
        <Slider ref={sliderRef} {...settings} arrows={false}>
            <div className="w-full h-full relative">
              <Image src={Coke} alt="" className="w-11/12 shrink-0" />
              <div className="absolute bottom-5 px-10 text-white font-semibold">
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length{" "}
                <span className="text-indigo-600">View More</span>
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image src={Coke} alt="" className="w-11/12 shrink-0" />
              <div className="absolute bottom-5 px-10 text-white font-semibold">
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length{" "}
                <span className="text-indigo-600">View More</span>
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image src={Coke} alt="" className="w-11/12 shrink-0" />
              <div className="absolute bottom-5 px-10 text-white font-semibold">
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length{" "}
                <span className="text-indigo-600">View More</span>
              </div>
            </div>
        </Slider>
      </div>

      <div className="flex items-center">
        <div className="w-2/12 bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4 mr-20">
          See More
        </div>
        <div onClick={() => sliderRef.current.slickNext()} className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4 mr-3">
          {"<"}
        </div>
        <div onClick={() => sliderRef.current.slickPrev()} className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4">
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Articles;

"use client";
import Image from "next/image";
import React from "react";
import Coke from "../../public/assets/images/photo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-screen-xl py-20 mx-auto">
      <div className="text-3xl mb-3">Our Team</div>
      <div className="w-1/3">
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length
      </div>
      <div className="my-5">
        <Slider {...settings} arrows={false}>
          <div className="w-full h-full">
            <Image src={Coke} alt="" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
          <div className="w-full h-full">
            <Image src={Coke} alt="" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
          <div className="w-full h-full">
            <Image src={Coke} alt="" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
          <div className="w-full h-full">
            <Image src={Coke} alt="" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
        </Slider>
      </div>

      <div className="flex items-center">
        <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4 mr-3">
          {"<"}
        </div>
        <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4">
          {">"}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

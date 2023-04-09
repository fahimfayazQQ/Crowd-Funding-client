'use client';
import Image from "next/image";
import React, {useRef} from "react";
import Coke from "../../public/assets/images/Photo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-xl px-5 my-10 lg:my-20 mx-auto">
      <div className="text-3xl mb-3">Our Team</div>
      <div className="lg:w-1/3">
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length
      </div>
      <div className="my-5">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          <div className="w-full h-full">
            <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
          <div className="w-full h-full">
            <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
          <div className="w-full h-full">
            <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
          <div className="w-full h-full">
            <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
          <div className="w-full h-full">
            <Image src={Coke} alt="img" className="w-[95%] rounded-lg" />
            <div className="text-center text-black font-semibold mt-3">
              HM Alvi
            </div>
            <div className="text-center text-black text-sm">Ceo & Founder </div>
          </div>
        </Slider>
      </div>

      <div className="flex justify-center items-center">
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 mr-3"
        >
          {"<"}
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4"
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

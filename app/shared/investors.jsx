"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LandingLayout/style.css";
import Image from "next/image";
import Image1 from "../../public/assets/images/image2.png";
import { ArrowWhite } from "./Icons";

const Investors = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-xl investor_shine bg-home-color my-20 p-20 mx-auto rounded-3xl text-white relative">
      <div className="text-3xl font-semibold text-center pb-10">
        Our Happy Investors
      </div>
      <div
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute left-5 top-[40%] cursor-pointer"
      >
        <ArrowWhite className="text-5xl" />
      </div>
      <div
        onClick={() => sliderRef.current.slickNext()}
        className="absolute right-5 top-[40%] cursor-pointer"
      >
        <ArrowWhite className="text-5xl rotate-180" />
      </div>

      <div className="text-center">
        <div>
          <Slider ref={sliderRef} {...settings} arrows={false}>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Investors;

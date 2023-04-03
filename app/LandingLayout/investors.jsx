"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LandingLayout/style.css";
import Image from "next/image";
import Image1 from "../../public/assets/images/image2.png";
import { ArrowWhite } from "../shared/Icons";

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
    <div className="max-w-screen-xl px-5 investor_shine bg-home-color lg:my-20 p-20 mx-auto lg:rounded-3xl text-white relative">
      <div className="whitespace-nowrap text-2xl lg:text-3xl font-semibold text-center pb-10">
        Our Happy Investors
      </div>
      <div
        onClick={() => sliderRef.current.slickNext()}
        className="absolute left-5 top-[50%] lg:top-[40%] cursor-pointer"
      >
        <ArrowWhite className="text-5xl" />
      </div>
      <div
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute right-5 top-[50%] lg:top-[40%] cursor-pointer"
      >
        <ArrowWhite className="text-5xl rotate-180" />
      </div>

      <div className="text-center">
        <div>
          <Slider ref={sliderRef} {...settings} arrows={false}>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-full lg:w-9/12 text-white mx-auto">
                awfawfawfLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-full lg:w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-full lg:w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-full lg:w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
            <div>
              <Image src={Image1} alt="img" className="mx-auto rounded-full" />
              <div className="text-white py-5">Pakku, Head of Okla</div>
              <div className="w-full lg:w-9/12 text-white mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Investors;

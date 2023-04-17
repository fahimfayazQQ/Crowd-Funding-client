"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LandingLayout/style.css";
import Image from "next/image";
import CommaDecor from "../../public/assets/images/comma.png";
import Image1 from "../../public/assets/images/image2.png";
import { ArrowWhite, Star } from "./Icons";
import { Zoom } from "react-awesome-reveal";
import Testimonials from "../shared/jsondata/testimonials.json"

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
    <div className="lg:px-5">
      <div className="max-w-screen-xl px-3 investor_shine bg-home-color my-10 lg:my-20 p-20 mx-auto lg:rounded-3xl text-white relative">
        <Zoom triggerOnce>
          <div className="text-2xl lg:text-3xl font-semibold text-center pb-10">
            Our Happy Investors
          </div>
        </Zoom>
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="hidden lg:block absolute left-5 top-[60%] lg:top-[45%] cursor-pointer z-50"
        >
          <ArrowWhite className="text-5xl" />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="hidden lg:block absolute right-5 top-[60%] lg:top-[45%] cursor-pointer z-50"
        >
          <ArrowWhite className="text-5xl rotate-180" />
        </div>

        <div className="text-center">
          <Zoom triggerOnce>
            <div className="lg:w-10/12 mx-auto">
              <Slider ref={sliderRef} {...settings} arrows={false}>
                {Testimonials?.map((post) => (
                  <div>
                    <div className="lg:w-1/3 mx-auto relative">
                      <Image
                        src={Image1}
                        alt="img"
                        className="w-[10rem] mx-auto rounded-full"
                      />
                      <Image
                        src={CommaDecor}
                        alt="img"
                        className="absolute -bottom-2 left-22"
                      />
                    </div>
                    <div className="text-white pt-5 pb-2">
                      <span className="font-semibold">{post?.name}</span>,{" "}
                      {post?.designation}
                    </div>
                    <div className="w-[10rem] mx-auto flex justify-evenly pb-5">
                      {[...Array(post?.stars)].map((_,i)=>
                      <Star key={i} className="text-[#FFA722]" />
                      )}
                    </div>
                    <div className="w-11/12 lg:w-9/12 text-white mx-auto text-sm lg:text-base">
                      {post?.testimonial}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Investors;

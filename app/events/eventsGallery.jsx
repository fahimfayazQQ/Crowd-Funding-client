'use client';
import React, { useRef } from "react";
import Image from "next/image";
import Blog1 from "../../public/assets/images/blog1.png";
import Blog2 from "../../public/assets/images/event2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogs from "../shared/jsondata/blogs.json";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const EventsGallery = () => {
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    dots: false,
    // centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    focusOnSelect: false,
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
    <div className="max-w-screen-xl px-5 mx-auto mt-10 lg:mt-20 overflow-hidden">
      <div className="hidden lg:block ">
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center">
            <div
              onClick={() => sliderRef.current.slickPrev()}
              className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 mr-3 cursor-pointer"
            >
              {"<"}
            </div>
            <div
              onClick={() => sliderRef.current.slickNext()}
              className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 cursor-pointer"
            >
              {">"}
            </div>
          </div>
        </div>
      </div>

      <Fade direction="right" triggerOnce>
        <div className="">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Blogs?.map((product, i) => (
              <div key={i} className="p-2 mb-5">
                <div className="bg-white rounded-2xl shadow-lg pb-5 border p-2">
                  <Image src={Blog2} alt="img" className="w-full" />
                  <div className="text-xl my-5">{product?.title}</div>
                  <div className="text-sm pb-8">{product?.description}</div>
                  <Link href={"./learn/gallery/details"}>
                    <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Fade>

      <div className="flex justify-center items-center mt-4 lg:hidden">
        <div className="flex items-center justify-end">
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 mr-3 cursor-pointer"
          >
            {"<"}
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 cursor-pointer"
          >
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;

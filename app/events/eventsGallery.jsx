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
import { Fade } from "react-reveal";

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
    <div className="max-w-screen-3lg mx-auto mt-20">
      <div className="mt-10 lg:mt-20">
        <Fade right>
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Blogs?.map((blog, i) => (
              <Link key={i} href={"./events/event"}>
                <div>
                  <div className="w-[calc(100%-20px)] bg-white rounded-2xl shadow-lg pb-5 mx-2.5 mb-5">
                    <Image
                      src={Blog2}
                      alt="img"
                      className="w-11/12 mx-auto pt-5"
                    />
                    <div className="px-10">
                      <div className="text-zinc-500 my-5">{blog?.time}</div>
                      <div className="border w-10/12 mx-auto mb-5"></div>
                      <div className="text-xl mb-5 px-2">{blog?.title}</div>
                      <div className="text-sm pb-8 px-2">
                        {blog?.description}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </Fade>
        <div className="flex justify-center items-center">
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4 mr-3"
          >
            {"<"}
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4"
          >
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;

'use client';
import React, { useRef } from "react";
import "./blogStyle.css";
import Image from "next/image";
import Blog1 from "../../public/assets/images/blog1.png";
import Blog3 from "../../public/assets/images/event2.png";
import Blog2 from "../../public/assets/images/blog2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogs from "../shared/jsondata/blogs.json";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";

const BlogGallery = () => {
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
    <div className="max-w-screen-3lg px-2 lg:px-5 mx-auto mt-20 mb-10 lg:mb-20">
      <Zoom triggerOnce>
        <div className="w-full bg-home-color rounded-2xl p-8 lg:p-16 blog_shine">
          <div className="w-9/12 lg:w-full">
            <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
              Latest News
            </div>
            <div className="text-white w-2/3 lg:w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </div>
          </div>
        </div>
      </Zoom>

      <div className="mt-10 lg:mt-20">
        <Zoom triggerOnce>
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Blogs?.map((blog, i) => (
              <div key={i}>
                <div className="w-[calc(100%-20px)] mx-auto pb-10">
                  <Image src={Blog3} alt="img" className="w-full" />
                  <div className="lg:px-10">
                    <div className="text-zinc-500 my-5">{blog?.time}</div>
                    <div className="border w-10/12 mx-auto mb-5"></div>
                    <div className="text-xl mb-5">{blog?.title}</div>
                    <div className="text-sm pb-8">{blog?.description}</div>
                  </div>
                  <Link href={"./blogs/blog"}>
                    <div className="inline-block bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                      View More
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </Zoom>
        <div className="flex justify-center items-center">
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[40px] bg-home-color rounded-md shadow-md cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4 mr-3"
          >
            {"<"}
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="w-[40px] bg-home-color rounded-md shadow-md cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4"
          >
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;

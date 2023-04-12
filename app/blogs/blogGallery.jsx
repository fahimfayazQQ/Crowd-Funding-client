'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Blog3 from "../../public/assets/images/event2.png";
import Blogs from "../shared/jsondata/blogs.json";
import "./blogStyle.css";

const BlogGallery = () => {
  const sliderRef = useRef();
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
    <div className="max-w-screen-3lg px-2 lg:px-5 mx-auto mt-20 mb-10 lg:mb-20 overflow-hidden">
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
                <Link key={i} href={"./learn/gallery/details"}>
                  <div className="p-2 mb-5">
                    <div className="bg-white rounded-2xl shadow-lg pb-5 border p-2">
                      <Image src={Blog3} alt="img" className="w-full" />
                      <div className="text-sm pt-5">{product?.time}</div>
                      <div className="text-xl mb-5">{product?.title}</div>
                      <div className="text-sm pb-8">{product?.description}</div>
                    </div>
                  </div>
                </Link>
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
    </div>
  );
};

export default BlogGallery;

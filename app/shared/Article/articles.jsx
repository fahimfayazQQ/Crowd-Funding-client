'use client';
import Image from "next/image";
import {useRef} from "react";
import Article1 from "../../../public/assets/images/cocacola.png";
import Article2 from "../../../public/assets/images/article2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Zoom } from "react-awesome-reveal";
import "./article.css"

const Articles = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="max-w-screen-xl px-2 py-10 lg:py-20 mx-auto">
      <Fade direction="up" triggerOnce>
        <div className="text-zinc-700 tracking-[.5em] text-sm mb-3 pl-5 lg:pl-0">
          -ARTICLES
        </div>
        <div className="w-11/12 lg:w-5/12 text-xl lg:text-3xl font-semibold mx-auto lg:m-0">
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length
        </div>
      </Fade>
      <Zoom triggerOnce>
        <div className="my-5">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            <div className="content">
              <div className="content-overlay"></div>
              <Image src={Article1} alt="img" className="content-image" />
              <div className="content-details fadeIn-bottom text-white text-xs lg:text-xl">
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length{" "}
                <span className="text-indigo-500 cursor-pointer">View More</span>
              </div>
            </div>
            <div className="content">
              <div className="content-overlay"></div>
              <Image src={Article2} alt="img" className="content-image" />
              <div className="content-details fadeIn-bottom text-white text-xs lg:text-xl">
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length{" "}
                <span className="text-indigo-500 cursor-pointer">View More</span>
              </div>
            </div>
            <div className="content">
              <div className="content-overlay"></div>
              <Image src={Article1} alt="img" className="content-image" />
              <div className="content-details fadeIn-bottom text-white text-xs lg:text-xl">
                Paragraphs are the building blocks of papers. Many students
                define paragraphs in terms of length{" "}
                <span className="text-indigo-500 cursor-pointer">View More</span>
              </div>
            </div>
          </Slider>
        </div>
      </Zoom>

      <div className="w-11/12 lg:w-full mx-auto flex items-center">
        <div className="inline-block bg-[#5143F6] rounded-md shadow-md cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4 mr-20">
          See More
        </div>
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4 mr-3"
          >
            {"<"}
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="w-[40px] bg-white rounded-md shadow-md cursor-pointer text-[#5143F6] font-semibold border border-[#5143F6] tracking-widest text-sm text-center py-4 px-4"
          >
            {">"}
          </div>
      </div>
    </div>
  );
};

export default Articles;

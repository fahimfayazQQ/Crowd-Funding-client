'use client'
import React, {useRef} from 'react'
import "./storyStyle.css"
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Blogs from "../shared/jsondata/blogs.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { Zoom, Fade } from "react-awesome-reveal";

const StoriesGallery = () => {
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    dots: false,
    // centerPadding: "60px",
    slidesToShow: 4,
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
    <div className="max-w-screen-xl px-2 lg:px-5 mx-auto mt-20 overflow-hidden">
      <Zoom triggerOnce>
        <div className="w-full bg-home-color rounded-2xl p-8 lg:p-16 story_shine">
          <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
            Success Stories
          </div>
          <div className="text-white w-2/3 lg:w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </div>
        </div>
      </Zoom>

      <div className="max-w-screen-xl px-5 mx-auto mt-10 lg:mt-20 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl">Trending Items</div>
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

        <Fade direction="right" triggerOnce>
          <div className="">
            <Slider ref={sliderRef} {...settings} arrows={false}>
              {Blogs?.map((product, i) => (
                <div key={i} className="p-2 mb-5">
                  <div className="bg-white rounded-2xl shadow-lg pb-5 border p-2">
                    <Image src={Card1} alt="img" className="w-full" />
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
      </div>
    </div>
  );
};

export default StoriesGallery
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
    <div className="max-w-screen-xl px-2 lg:px-5 mx-auto mt-20">
      <div className="w-full bg-home-color rounded-2xl p-8 lg:p-16 story_shine">
        <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
          Success Stories
        </div>
        <div className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>

      <div className="my-10 lg:my-20">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {Blogs?.map((story, i) => (
            <Link key={i} href={"./stories/story"}>
              <div className="m-2 mb-5">
                <div className="w-[20rem] mx-auto bg-white rounded-2xl shadow-lg pb-5 border">
                  <Image src={Card1} alt="img" className="" />
                  <div className="px-4">
                    <div className="text-xl my-5">{story?.title}</div>
                    <div className="text-sm pb-8">{story?.description}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
        <div className="flex justify-center items-center mt-5">
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center cursor-pointer py-4 px-4 mr-3"
          >
            {"<"}
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center cursor-pointer py-4 px-4"
          >
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesGallery
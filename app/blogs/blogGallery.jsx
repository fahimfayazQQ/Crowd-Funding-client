"use client";
import React, { useRef } from "react";
import "./blogStyle.css";
import Image from "next/image";
import Blog1 from "../../public/assets/images/blog1.png";
import Blog2 from "../../public/assets/images/blog2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogs from "../shared/jsondata/blogs.json";
import Link from "next/link";

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
  };
  return (
    <div className="w-9/12 mx-auto my-20">
      <div className="w-full bg-home-color rounded-2xl p-16 blog_shine">
        <div className="text-white text-4xl font-semibold pb-5">
          Latest News
        </div>
        <div className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>

      <div className="mt-20">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {Blogs?.map((blog, i) => (
            <div>
              <div key={i} className="w-[calc(100%-20px)] pb-10">
                <Image src={Blog1} alt="" className="w-full" />
                <div className="text-zinc-500 my-5">{blog?.time}</div>
                <div className="border w-10/12 mx-auto mb-5"></div>
                <div className="text-xl mb-5 px-2">{blog?.title}</div>
                <div className="text-sm pb-8 px-2">{blog?.description}</div>
                <Link href={"./blogs/blog"}>
                <div className="inline-block bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                  View More
                </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center">
        <div onClick={() => sliderRef.current.slickPrev()} className="w-[40px] bg-home-color  cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4 mr-3">
          {"<"}
        </div>
        <div onClick={() => sliderRef.current.slickNext()} className="w-[40px] bg-home-color  cursor-pointer text-white tracking-widest text-sm text-center py-4 px-4">
          {">"}
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogGallery;

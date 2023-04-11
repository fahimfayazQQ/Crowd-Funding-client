'use client';
import React, {useRef} from "react"
import Image from "next/image"
import Link from "next/link"
import Card1 from "../../../public/assets/images/card1.png"
import Card2 from "../../../public/assets/images/card2.png"
import Products from "../../shared/jsondata/products.json"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Fade } from "react-reveal"

const LearnGallery = () => {
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
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">Trending Items</div>
        <div className="flex items-center">
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4 mr-3"
          >
            {"<"}
          </div>
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="w-[40px] bg-[#5143F6] rounded-md shadow-md text-white tracking-widest text-sm text-center py-4 px-4"
          >
            {">"}
          </div>
        </div>
      </div>
      
      <Fade right>
        <div className="">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Products?.map((product, i) => (
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
  );
};

export default LearnGallery;

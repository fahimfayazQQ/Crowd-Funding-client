"use client";
import React, {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import Card1 from "../../public/assets/images/card1.png"
import Card2 from "../../public/assets/images/card2.png"
import Products from "../shared/jsondata/products.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreGallery = () => {
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
  };
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">Trending Items</div>
        <div className="flex items-center">
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

      <div className="">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {Products?.map((product, i) => (
            <div key={i} className="m-2 mb-5">
              <div className="w-[20rem] bg-white rounded-2xl shadow-lg pb-5 border p-2">
                <Image src={Card1} alt="img" className="" />
                <div className="text-xl my-5">{product?.title}</div>
                <div className="text-sm pb-8">{product?.description}</div>
                <Link href={"./explore/product"}>
                  <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                    Learn More
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreGallery;

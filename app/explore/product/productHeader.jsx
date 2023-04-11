'use client';
import Image from "next/image";
import Product1 from "../../../public/assets/images/product.png";
import Link from "next/link";
import { Heart } from "../../shared/Icons";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, JackInTheBox } from "react-awesome-reveal";

const ProductHeader = () => {
  const [isReacted, setIsReacted] = useState(false);
    const sliderRef = useRef(null);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  return (
    <div className="rounded-2xl max-w-screen-xl px-5 mx-auto mt-20">
      <div className="flex flex-col lg:flex-row rounded-xl shadow-md bg-white">
        <JackInTheBox direction="left" triggerOnce>
          <div className="relative lg:p-5">
            <Slider
              ref={sliderRef}
              {...settings}
              arrows={false}
              className="w-full lg:w-[32rem] mx-auto"
            >
              <Image src={Product1} class="img-fluid" alt="" />
              <Image src={Product1} class="img-fluid" alt="" />
            </Slider>
            {/* <Image src={Product1} alt="img" className="mx-auto" /> */}
            <div className="flex justify-center items-center pt-5">
              <div
                onClick={() => sliderRef.current.slickPrev()}
                className="w-[40px] bg-[#5143F6] cursor-pointer text-white tracking-widest text-sm text-center rounded-md py-4 px-4 mr-3"
              >
                {"<"}
              </div>
              <div
                onClick={() => sliderRef.current.slickNext()}
                className="w-[40px] bg-[#5143F6] cursor-pointer text-white tracking-widest text-sm text-center rounded-md py-4 px-4"
              >
                {">"}
              </div>
            </div>
          </div>
        </JackInTheBox>
        <Fade direction="down" triggerOnce>
          <div className="w-full h-full text-black p-5 lg:p-10">
            <div className="text-2xl lg:text-4xl font-semibold mb-5 lg:mt-10">
              Pasta Bolognese
            </div>
            <div className="mb-10">
              Below, we answer the questions people most often have about
              crowdfunding when they’re trying to decide if they want to start
              an online fundraiser.
            </div>
            <div className="grid grid-cols-2 mb-10 gap-10">
              <div className="flex">
                <div className="text-zinc-500 pr-4">Raised:</div>
                <div>$5000</div>
              </div>
              <div className="flex">
                <div className="text-zinc-500 pr-4">Target:</div>
                <div>$20000</div>
              </div>
              <div className="flex">
                <div className="text-zinc-500 pr-4">Investors:</div>
                <div>33</div>
              </div>
              <div className="flex">
                <div className="text-zinc-500 pr-4">Share price:</div>
                <div>$1000</div>
              </div>
            </div>

            <div className="flex justify-around gap-3 lg:gap-10">
              <Link href={"../payment"}>
                <div className="inline-block bg-home-color text-white tracking-widest text-sm text-center rounded-full shadow-lg py-3 px-10 cursor-pointer">
                  INVEST
                </div>
              </Link>
              <div
                onClick={() => {
                  setIsReacted(!isReacted);
                }}
                className={`flex items-center text-black border tracking-widest text-sm text-center rounded-full shadow-lg py-3 px-10 cursor-pointer ${
                  isReacted && "border-pink-200 shadow-pink-200"
                }`}
              >
                <Heart
                  className={`text-xl mr-2 ${
                    isReacted ? "text-[#F40B5F]" : "text-gray-200"
                  }`}
                />
                WISH
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProductHeader;

'use client';
import Image from "next/image";
import Product1 from "../../../public/assets/images/product.png";
import Product2 from "../../../public/assets/images/blog1.png";
import Link from "next/link";
import { Heart } from "../../shared/Icons";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import "./product.css"

const ProductHeader = () => {
  const [isReacted, setIsReacted] = useState(false);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const secondarysettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true
    };

  return (
    <div className="rounded-2xl max-w-[1280px] px-5 mx-auto mt-20">
      <div className="flex flex-col lg:flex-row rounded-xl shadow-md bg-white">
        <JackInTheBox direction="left" triggerOnce className="sm:w-6/12">
          <div className="relative lg:p-5">
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              {...settings}
              arrows={false}
              className="w-full lg:w-[32rem] mx-auto"
            >
              <Image src={Product1} class="img-fluid" alt="" />
              <Image src={Product1} class="img-fluid" alt="" />
              <Image src={Product1} class="img-fluid" alt="" />
            </Slider>

            {/* AS FOR NAV */}
            <div className="productSliderSecondary mt-2">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                {...secondarysettings}
                arrows={false}
              >
                <div className="w-[5rem] p-3 sm:p-8">
                  <Image src={Product1} alt="" className="" />
                </div>
                <div className="w-[5rem] p-3 sm:p-8">
                  <Image src={Product1} alt="" className="" />
                </div>
                <div className="w-[5rem] p-3 sm:p-8">
                  <Image src={Product1} alt="" className="" />
                </div>
              </Slider>
            </div>
            {/* <Image src={Product1} alt="img" className="mx-auto" /> */}
            {/* <div className="flex justify-center items-center pt-5">
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
            </div> */}
          </div>
        </JackInTheBox>
        <Fade direction="down" triggerOnce className="sm:w-6/12">
          <div className="w-full h-full text-black p-5 lg:p-10 relative">
            <div className="lg:text-xl text-zinc-500 pb-5">Catagory</div>
            <div className="lg:text-xl text-zinc-500 pb-5">10 Days late</div>
            <div className="lg:text-xl text-zinc-500">Equity</div>
            <div className="text-2xl lg:text-4xl font-semibold mb-5 mt-5">
              Pasta Bolognese
            </div>
            <div className="text-sm lg:text-base mb-10">
              Below, we answer the questions people most often have about
              crowdfunding when they’re trying to decide if they want to start
              an online fundraiser.
            </div>
            <div className="grid grid-cols-2 text-sm lg:text-base mb-10 gap-4 lg:gap-10">
              <div className="flex items-center">
                <div className="text-zinc-500 pr-2 whitespace-nowrap">
                  Raised:
                </div>
                <div className="text-lg lg:text-2xl">$5000</div>
              </div>
              <div className="flex items-center">
                <div className="text-zinc-500 pr-2 whitespace-nowrap">
                  Target:
                </div>
                <div className="text-lg lg:text-2xl">$20000</div>
              </div>
              <div className="flex items-center">
                <div className="text-zinc-500 pr-2 whitespace-nowrap">
                  Investors:
                </div>
                <div className="text-lg lg:text-2xl">33</div>
              </div>
              <div className="flex items-center">
                <div className="text-zinc-500 pr-2 whitespace-nowrap">
                  Share price:
                </div>
                <div className="text-lg lg:text-2xl">$1000</div>
              </div>
            </div>

            <div className="lg:absolute lg:bottom-[8%] flex justify-around gap-3 lg:gap-10">
              <Link href={"../payment"}>
                <div className="inline-block bg-home-color text-white tracking-widest text-sm text-center rounded-lg shadow-lg py-3 px-10 lg:px-20 cursor-pointer">
                  INVEST
                </div>
              </Link>
              <div
                onClick={() => {
                  setIsReacted(!isReacted);
                }}
                className={`flex items-center text-black border tracking-widest text-sm text-center rounded-lg shadow-lg py-3 px-10 cursor-pointer ${
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

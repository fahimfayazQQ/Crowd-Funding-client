"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LandingLayout/style.css";
import Image from "next/image";
import Image1 from "../../public/assets/images/image2.png";
import { ArrowWhite } from "./Icons";
import { Zoom } from "react-awesome-reveal";

const Investors = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:px-5">
      <div className="max-w-screen-xl px-5 investor_shine bg-home-color my-10 lg:my-20 p-20 mx-auto lg:rounded-3xl text-white relative">
        <Zoom triggerOnce>
          <div className="text-3xl font-semibold text-center pb-10">
            Our Happy Investors
          </div>
        </Zoom>
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-5 top-[60%] lg:top-[45%] cursor-pointer z-50"
        >
          <ArrowWhite className="text-5xl" />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-5 top-[60%] lg:top-[45%] cursor-pointer z-50"
        >
          <ArrowWhite className="text-5xl rotate-180" />
        </div>

        <div className="text-center">
          <Zoom triggerOnce>
            <div className="w-10/12 mx-auto">
              <Slider ref={sliderRef} {...settings} arrows={false}>
                <div>
                  <Image
                    src={Image1}
                    alt="img"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-white py-5">Pakku, Head of Okla</div>
                  <div className="lg:w-9/12 text-white mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.{" "}
                  </div>
                </div>
                <div>
                  <Image
                    src={Image1}
                    alt="img"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-white py-5">Pakku, Head of Okla</div>
                  <div className="lg:w-9/12 text-white mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.{" "}
                  </div>
                </div>
                <div>
                  <Image
                    src={Image1}
                    alt="img"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-white py-5">Pakku, Head of Okla</div>
                  <div className="lg:w-9/12 text-white mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.{" "}
                  </div>
                </div>
                <div>
                  <Image
                    src={Image1}
                    alt="img"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-white py-5">Pakku, Head of Okla</div>
                  <div className="lg:w-9/12 text-white mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.{" "}
                  </div>
                </div>
                <div>
                  <Image
                    src={Image1}
                    alt="img"
                    className="mx-auto rounded-full"
                  />
                  <div className="text-white py-5">Pakku, Head of Okla</div>
                  <div className="lg:w-9/12 text-white mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.{" "}
                  </div>
                </div>
              </Slider>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Investors;

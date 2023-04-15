'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Event1 from "../../public/assets/images/event1.png";
import Event2 from "../../public/assets/images/event2.png";
import Event3 from "../../public/assets/images/event3.png";
import Event4 from "../../public/assets/images/event4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Events from "../shared/jsondata/Events.json";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const EventsGallery = () => {
  const [cardImage, setCardImage] = useState()
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    dots: false,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          slidesPerRow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          slidesPerRow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if(EventImages?.find(wtf=>wtf.id===Events.id)){
      setCardImage(EventImages?.find(wtf=>wtf.id===Events.id)?.image)
    } else {
      setCardImage(Event1)
    }
    console.log("imagee", cardImage);
  }, [])
  console.log(Events);

  return (
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
              className="w-[40px] bg-white rounded-md shadow-md text-[#5143F6] font-semibold border border-[#5143F6] tracking-widest text-sm text-center py-4 px-4 cursor-pointer"
            >
              {">"}
            </div>
          </div>
        </div>
      </div>

      <Fade direction="right" triggerOnce>
        <div className="">
          <Slider ref={sliderRef} {...settings} arrows={false}>
            {Events?.map((product, i) => (
              <Link key={i} href={"./learn/gallery/details"}>
                <div className="p-2 mb-5">
                  <div className={`${product?.bgColor} w-full h-[25rem] rounded-xl`}>
                  <div className="px-2 pt-10">
                    <Image {...cardImage} alt="img" width={100} height={100} className="w-10/12 mx-auto" />
                    <div className="w-1/2 mx-auto">
                    <div className="text-xl my-5">{product?.title}</div>
                    <div className="text-sm pb-8">{product?.description}</div>
                    </div>
                  </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </Fade>

      {/* <div className="flex justify-center items-center mt-4 lg:hidden">
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
      </div> */}
    </div>
  );
};

export default EventsGallery;
const EventImages = [
  {id:1, image: Event1, bgColor: "#ffa8b2",},
  {id:2, image: Event2, bgColor: "#fff",},
  {id:3, image: Event3, bgColor: "#fff",},
  {id:4, image: Event4, bgColor: "#fff",},
  {id:5, image: Event1, bgColor: "#fff",},
  {id:6, image: Event2, bgColor: "#fff",},
  {id:7, image: Event3, bgColor: "#fff",},
  {id:8, image: Event4, bgColor: "#fff",},
  {id:9, image: Event1, bgColor: "#fff",},
  {id:10, image: Event2},
]
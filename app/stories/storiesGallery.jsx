'use client'
import React, {useEffect, useRef, useState} from 'react'
import "./storyStyle.css"
import Image from "next/image";
import Story1 from "../../public/assets/images/story1.png";
import Story2 from "../../public/assets/images/story2.png";
import Story3 from "../../public/assets/images/story2.png";
import Blogs from "../shared/jsondata/blogs.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { Zoom, Fade } from "react-awesome-reveal";

const StoriesGallery = () => {
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
    slidesPerRow: 3,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          slidesPerRow: 3,
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
    if(storyImages?.find(wtf=>wtf.id===Blogs.id)){
      setCardImage(storyImages?.find(wtf=>wtf.id===Blogs.id)?.image)
    } else {
      setCardImage(Story1)
    }
    console.log("imagee", storyImages);
  }, [])
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

      <div className="max-w-screen-xl px-0 mx-auto mt-10 lg:mt-20 overflow-hidden">
        <div className='hidden lg:block'>
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
              {Blogs?.map((product, i) => (
                <Link key={i} href={"./learn/gallery/details"} className='mb-5'>
                <div className="p-2">
                  <div className="p-2">
                    <Image src={cardImage} alt="img" className="w-full rounded-xl" />
                    <div className="text-xl my-5">{product?.title}</div>
                    <div className="text-sm">{product?.description}</div>
                  </div>
                </div>
                </Link>
              ))}
            </Slider>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default StoriesGallery
const storyImages = [
  {id:1, image: Story1},
  {id:2, image: Story2},
  {id:3, image: Story3},
  {id:4, image: Story1},
  {id:5, image: Story2},
  {id:6, image: Story3},
  {id:7, image: Story1},
  {id:8, image: Story2},
  {id:9, image: Story3},
  {id:10, image: Story1},
]
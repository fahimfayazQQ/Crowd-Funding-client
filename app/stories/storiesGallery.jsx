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
  };
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="w-full bg-home-color rounded-2xl p-16 story_shine">
        <div className="text-white text-4xl font-semibold pb-5">
          Success Stories
        </div>
        <div className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>

      <div className="my-20">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {Blogs?.map((story, i)=>
            <Link href={"./stories/story"}>
              <div className='m-2 mb-5'>
                <div key={i} className="w-[20rem] rounded-2xl shadow-lg pb-5 border">
                  <Image src={Card1} alt="" className="" />
                  <div className="text-xl my-5 px-2">{story?.title}</div>
                  <div className="text-sm pb-8 px-2">
                    {story?.description}
                  </div>          
                </div>
              </div>
            </Link>
          )}
        </Slider>
        <div className="flex items-center">
        <div onClick={() => sliderRef.current.slickPrev()} className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center cursor-pointer py-4 px-4 mr-3">
          {"<"}
        </div>
        <div onClick={() => sliderRef.current.slickNext()} className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center cursor-pointer py-4 px-4">
          {">"}
        </div>
      </div>
      </div>
    </div>
  );
};

export default StoriesGallery
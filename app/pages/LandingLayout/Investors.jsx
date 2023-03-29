'use client'
import React from 'react'
/* import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../../_slick.css";
import "../../../_slickTheme.css"; */
import "./style.css"
import Image from "next/image";
import Image1 from "../../../public/assets/images/image2.png";

const Investors = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

  return (
    /* <div>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div> */

    <div className="max-w-screen-xl investor_shine bg-home-color my-20 p-20 mx-auto rounded-3xl text-white">
      <div className="text-3xl font-semibold text-center pb-10">
        Our Happy Investors
      </div>

      <div className="text-center">
        <Image src={Image1} alt="" className="mx-auto rounded-full" />
        <div className='py-5'>Pakku, Head of Okla</div>
        <div className='w-9/12 mx-auto'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.{" "}
        </div>
      </div>
    </div>
  );
}

export default Investors
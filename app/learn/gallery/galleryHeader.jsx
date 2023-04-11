import React from 'react'
import "../learnStyles.css"
import { Zoom } from "react-reveal"

const GalleryHeader = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto my-20">
      <Zoom>
        <div className="w-full bg-home-color rounded-2xl py-16 px-5 lg:px-16 learn_shine">
          <div className="text-white text-4xl font-semibold pb-5">Learn</div>
          <div className="text-white w-1/2 lg:w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default GalleryHeader

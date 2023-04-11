import React from 'react'
import "../learnStyles.css"

const GalleryHeader = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto my-20">
      <div className="w-full bg-home-color rounded-2xl py-16 px-5 lg:px-16 learn_shine">
        <div className="text-white text-4xl font-semibold pb-5">
          Learn
        </div>
        <div className="text-white w-1/2 lg:w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>
    </div>
  )
}

export default GalleryHeader

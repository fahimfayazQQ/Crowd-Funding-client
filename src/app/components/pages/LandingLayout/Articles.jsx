import Image from 'next/image';
import React from 'react'
import Coke from "../../../../../public/assets/images/cocacola.png"

const Articles = () => {
  return (
    <div className="max-w-screen-xl py-20 mx-auto">
      <div className="text-zinc-700 tracking-widest text-sm mb-3">- ARTICLES</div>
      <div className="w-1/3 text-2xl">
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length
      </div>
      <div className="flex justify-evenly my-5 gap-5">
        <div className="w-full relative">
          <Image src={Coke} alt="" className="w-full" />
          <div className="absolute bottom-5 px-5 text-white font-semibold">
            Paragraphs are the building blocks of papers. Many students define
            paragraphs in terms of length{" "}
            <span className="text-indigo-600">View More</span>
          </div>
        </div>
        <div className="w-full relative">
          <Image src={Coke} alt="" className="w-full" />
          <div className="absolute bottom-5 px-5 text-white font-semibold">
            Paragraphs are the building blocks of papers. Many students define
            paragraphs in terms of length{" "}
            <span className="text-indigo-600">View More</span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-2/12 bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4 mr-20">
          See More
        </div>
        <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4 mr-3">
          {"<"}
        </div>
        <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4">
          {">"}
        </div>
      </div>
    </div>
  );
}

export default Articles
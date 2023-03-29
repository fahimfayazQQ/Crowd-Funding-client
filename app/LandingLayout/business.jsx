'use client'
import Image from 'next/image';
import React from 'react'
import Image1 from "../../public/assets/images/biznez.png";

const Business = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-evenly items-center">
        <Image src={Image1} alt="" className='mt-20'/>
        <div className='w-1/4 my-auto'>
          <div className='font-semibold text-2xl pb-5'>Lorem Ipsum simply dummy text of the </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business
import Image from 'next/image';
import React from 'react'
import Image1 from "../../../public/assets/images/image2.png";
import Image2 from "../../../public/assets/images/method.png";

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="flex justify-evenly items-center">
        <div className="w-1/4 my-auto">
          <div className="font-semibold text-2xl pb-5">
            About Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </div>
          <div className="pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="w-6/12 bg-gradient-to-tl from-[#5143F6] via-indigo-400 to-[#5143F6] text-white tracking-widest text-sm text-center rounded-md py-4 px-4">
            <span className="font-bold">100%</span> Safe to Use
          </div>
        </div>
        <div className='flex-col shadow-lg p-5 rounded-3xl'>
        <Image src={Image1} alt="" className="pb-5" />
        <Image src={Image2} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default About
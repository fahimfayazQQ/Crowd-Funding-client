"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/image2.png";
import Image2 from "../../public/assets/images/Method.png";
import Dotted from "../../public/assets/images/dotted.png";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="py-14 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center overflow-hidden">
        <div className="w-11/12 lg:w-1/4 my-auto">
          <Fade direction="left" triggerOnce>
            <div className="font-semibold text-xl lg:text-4xl pb-5">
              About <br />Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </div>
            <div className="text-sm lg:text-lg pb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </div>
            <div className="w-11/12 bg-gradient-to-tl from-[#5143F6] via-indigo-400 to-[#5143F6] text-white tracking-widest text-2xl font-semibold text-center shadow-xl rounded-md cursor-pointer py-5 px-4">
              <span className="text-4xl font-bold">100%</span> Safe to Use
            </div>
          </Fade>
        </div>
        <Fade direction="right" triggerOnce>
          <div className="flex-col shadow-lg p-5 rounded-3xl bg-white mb-14 lg:mb-5 mt-5 relative">
            <Image src={Image1} alt="img" className="pb-5 z-[100]" />
            <Image src={Image2} alt="img" className="z-[100]" />
            <Image src={Dotted} alt="img" className="absolute -top-2 -left-5 z-0 " />
            <Image src={Dotted} alt="img" className="absolute -bottom-2 -right-5 z-0 " />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;

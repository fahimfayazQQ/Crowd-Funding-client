"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/biznez.png";
import { Fade } from "react-awesome-reveal";

const Business = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-around items-center overflow-x-hidden">
        <div className="lg:w-1/2">
          <Fade direction="left" triggerOnce>
            <Image src={Image1} alt="img" className="mt-10 lg:mt-20" />
          </Fade>
        </div>
        <div className="w-11/12 lg:w-1/2 m-auto">
          <div className="w-10/12">
            <Fade direction="right" triggerOnce>
              <div className="font-semibold text-2xl lg:text-4xl pb-5">
                Lorem Ipsum simply dummy text of the{" "}
              </div>
              <div className="lg:text-lg ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

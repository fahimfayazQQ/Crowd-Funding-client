"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/biznez.png";
import { Fade } from "react-awesome-reveal";

const Business = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center overflow-hidden">
        <div>
          <Fade direction="left" triggerOnce>
            <Image src={Image1} alt="img" className="mt-10 lg:mt-20" />
          </Fade>
        </div>
        <div className="w-11/12 lg:w-1/4 my-auto">
          <Fade direction="right" triggerOnce>
            <div className="font-semibold text-xl lg:text-2xl pb-5">
              Lorem Ipsum simply dummy text of the{" "}
            </div>
            <div className="text-sm lg:text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Business;

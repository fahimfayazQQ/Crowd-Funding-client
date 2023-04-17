"use client";
import React from "react";
import { List1, List2, List3 } from "../shared/Icons";
import { Fade } from "react-awesome-reveal";

const HowItWorks = () => {
  return (
    <div className="pb-14 lg:pb-20">
      <div className="flex flex-col lg:flex-row justify-evenly items-center overflow-hidden">
        <div className="w-11/12 lg:w-auto flex-col pb-14 lg:pb-0">
          <Fade direction="left" triggerOnce>
            <div className="flex justify-center items-center mb-5">
              <List1 className="text-5xl mr-5" />
              <div className="flex-col">
                <div className="font-semibold text-xl lg:text-2xl">
                  Lorem Ipsum
                </div>
                <div className="text-sm lg:text-base ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mb-5">
              <List2 className="text-5xl mr-5" />
              <div className="flex-col">
                <div className="font-semibold text-xl lg:text-2xl">
                  Lorem Ipsum
                </div>
                <div className="text-sm lg:text-base ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mb-5">
              <List3 className="text-5xl mr-5" />
              <div className="flex-col">
                <div className="font-semibold text-xl lg:text-2xl">
                  Lorem Ipsum
                </div>
                <div className="text-sm lg:text-base ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="w-11/12 lg:w-1/4 my-auto">
          <Fade direction="right" triggerOnce>
            <div className="font-semibold text-xl lg:text-2xl pb-5">
              How It works <br />Lorem Ipsum is simply text of the printing
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

export default HowItWorks;

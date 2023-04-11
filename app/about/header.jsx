"use client";
import React from "react";
import "../LandingLayout/style.css";
import Image1 from "../../public/assets/images/image2.png";
import Image2 from "../../public/assets/images/Method.png";
import Image3 from "../../public/assets/images/footer33.png";
import Image from "next/image";
import {
  List1,
  List2,
  Value1,
  Value2,
  Value3,
  Value4,
  Value5,
  Value6,
  Search,
} from "../shared/Icons";
import { Fade, Zoom } from "react-awesome-reveal";

const AboutHeader = () => {
  return (
    <div className="max-w-screen-xl px-2 lg:px-5 mx-auto mt-20">
      <Zoom triggerOnce>
        <div className="w-full bg-home-color rounded-2xl p-16 investor_shine">
          <div className="text-white text-4xl font-semibold pb-5 text-center">
            About Us
          </div>
          <div className="text-white text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </div>
        </div>
      </Zoom>

      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <Fade direction="right" triggerOnce>
            <div className="flex-col shadow-lg p-5 rounded-3xl bg-white">
              <Image src={Image1} alt="img" className="pb-5" />
              <Image src={Image2} alt="img" className="" />
            </div>
          </Fade>

          <div className="w-11/12 lg:w-1/4 my-auto pt-10 lg:pt-0">
            <Fade direction="left" triggerOnce>
              <div className="font-semibold text-2xl pb-5">
                We&apos;re on a mission to bring ideas to life.
              </div>
              <div className="pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </div>
              <div className="flex">
                <List1 className="text-5xl mr-5" />
                <div>
                  <div className="text-lg font-semibold">
                    How technology started
                  </div>
                  <div>
                    Building an enterprisedoesn&apos;t need your thousands.
                  </div>
                </div>
              </div>
              <div className="flex">
                <List2 className="text-5xl mr-5" />
                <div>
                  <div className="text-lg font-semibold">
                    Endless Possibilities
                  </div>
                  <div>
                    Building an enterprisedoesn&apos;t need your thousands.
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="text-black mx-auto py-10 lg:py-20">
        <div className="text-xl lg:text-4xl text-center pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
        <div className="w-2/3 flex flex-wrap justify-evenly mx-auto">
          <div>
            <Fade>
              <div className="flex-col">
                <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                  1000
                </div>
                <div className="text-center">Investors</div>
              </div>
            </Fade>
          </div>
          <Fade>
            <div className="flex-col">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                1000
              </div>
              <div className="text-center">Investors</div>
            </div>
          </Fade>
          <Fade>
            <div className="flex-col">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                1000
              </div>
              <div className="text-center">Investors</div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          <div className="w-11/12 lg:w-1/4 my-auto pb-10 lg:pb-0">
            <Fade direction="right" triggerOnce>
              <div className="font-semibold text-2xl pb-5">
                We&apos;re on a mission to bring ideas to life.
              </div>
              <div className="pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </div>
              <div className="flex">
                <List1 className="text-5xl mr-5" />
                <div>
                  <div className="text-lg font-semibold">
                    How technology started
                  </div>
                  <div>
                    Building an enterprisedoesn&apos;t need your thousands.
                  </div>
                </div>
              </div>
              <div className="flex">
                <List2 className="text-5xl mr-5" />
                <div>
                  <div className="text-lg font-semibold">
                    Endless Possibilities
                  </div>
                  <div>
                    Building an enterprisedoesn&apos;t need your thousands.
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <Fade direction="left" triggerOnce>
            <div className="flex-col shadow-lg p-5 rounded-3xl bg-white">
              <Image src={Image1} alt="img" className="pb-5" />
              <Image src={Image2} alt="img" className="" />
            </div>
          </Fade>
        </div>
      </div>

      <div className="w-11/12 lg:w-auto mx-auto lg:m-0 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 my-20">
        <Fade>
          <div>
            <Value1 className="text-5xl mx-auto" />
            <div className="text-xl text-center font-semibold my-5 px-2">
              Lorem ipsum dolor
            </div>
            <div className=" text-sm text-center pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value2 className="text-5xl mx-auto" />
            <div className="text-xl text-center font-semibold my-5 px-2">
              Lorem ipsum dolor
            </div>
            <div className=" text-sm text-center pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value3 className="text-5xl mx-auto" />
            <div className="text-xl text-center font-semibold my-5 px-2">
              Lorem ipsum dolor
            </div>
            <div className=" text-sm text-center pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </Fade>
        <Fade>
          <div>
            <Value4 className="text-5xl mx-auto" />
            <div className="text-xl text-center font-semibold my-5 px-2">
              Lorem ipsum dolor
            </div>
            <div className=" text-sm text-center pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value5 className="text-5xl mx-auto" />
            <div className="text-xl text-center font-semibold my-5 px-2">
              Lorem ipsum dolor
            </div>
            <div className=" text-sm text-center pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value6 className="text-5xl mx-auto" />
            <div className="text-xl text-center font-semibold my-5 px-2">
              Lorem ipsum dolor
            </div>
            <div className=" text-sm text-center pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </Fade>
      </div>

      <div className="investor_shine bg-home-color rounded-2xl max-w-screen-xl px-5 mx-auto p-5 lg:p-10 mt-20 shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between">
          <Fade direction="left" triggerOnce>
            <div className="w-full mx-auto lg:m-0 pb-10 lg:pb-0 text-white">
              <div className="text-2xl lg:text-4xl my-4 lg:my-8">
                Lorem ipsum dolor
              </div>
              <div className="text-base pb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="w-full flex justify-center items-center lg:border lg:p-8 lg:rounded-xl lg:bg-white lg:bg-opacity-10 lg:backdrop:filter lg:backdrop-blur-md">
                <div className="w-full mx-auto flex relative">
                  <input
                    type="text"
                    placeholder="Search Campaigns"
                    className="bg-white bg-opacity-30 rounded-md w-full px-2 py-3 placeholder-white outline-none"
                  />
                  <Search className="text-xl mt-3 absolute right-2" />
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div className="mx-auto lg:m-0 relative">
              <Image src={Image3} alt="img" className="w-[300px] mx-auto" />
              <div className="w-full absolute top-[30%] px-4">
                <div className="text-sm lg:text-lg font-semibold text-white text-center pb-5">
                  Paragraphs are the <br /> building blocks of papers
                </div>
                <div className="text-white text-center text-3xl pb-3">
                  Startup <span>$25</span>
                </div>
                <div className="w-[10rem] mx-auto bg-[#5143F6] rounded-lg shadow-md text-white text-center px-5 py-2">
                  {" "}
                  Get Plan
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="text-2xl lg:text-4xl text-center mt-10 lg:mt-20 lg:mb-8">
        Our Investors
      </div>
      <div className="w-11/12 lg:w-full mx-auto lg:m-0 grid lg:grid-cols-2 gap-5 lg:gap-10">
        <Fade>
          <div>
            <div className="text-lg lg:text-2xl font-semibold my-5 px-2">
              Lorem ipsum dolor1
            </div>
            <div className=" text-sm pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              of the printing and typesetting industry Lorem Ipsum is simply
              dummy text. Lorem Ipsum is simply dummy text.
            </div>
          </div>
        </Fade>
        <Fade>
          <div>
            <div className="text-lg lg:text-2xl font-semibold my-5 px-2">
              Lorem ipsum dolor2
            </div>
            <div className=" text-sm pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              of the printing and typesetting industry Lorem Ipsum is simply
              dummy text. Lorem Ipsum is simply dummy text.
            </div>
          </div>
        </Fade>
        <Fade>
          <div>
            <div className="text-lg lg:text-2xl font-semibold my-5 px-2">
              Lorem ipsum dolor3
            </div>
            <div className=" text-sm pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              of the printing and typesetting industry Lorem Ipsum is simply
              dummy text. Lorem Ipsum is simply dummy text.
            </div>
          </div>
        </Fade>
        <Fade>
          <div>
            <div className="text-lg lg:text-2xl font-semibold my-5 px-2">
              Lorem ipsum dolor4
            </div>
            <div className=" text-sm pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              of the printing and typesetting industry Lorem Ipsum is simply
              dummy text. Lorem Ipsum is simply dummy text.
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutHeader;

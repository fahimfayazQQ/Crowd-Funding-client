"use client";
import React from "react";
import "./aboutus.css";
import Image1 from "../../public/assets/images/image2.png";
import Image2 from "../../public/assets/images/Method.png";
import Image3 from "../../public/assets/images/footer33.png";
import Mission from "../../public/assets/images/mission.png";
import Lady1 from "../../public/assets/images/lady1.png";
import Lady2 from "../../public/assets/images/lady2.png";
import Lady3 from "../../public/assets/images/lady3.png";
import Tick from "../../public/assets/images/tick.png";
import Image from "next/image";
import {
  List4,
  List5,
  Value1,
  Value2,
  Value3,
  Value4,
  Value5,
  Value6,
} from "../shared/Icons";
import { Fade, Zoom } from "react-awesome-reveal";

const AboutHeader = () => {
  return (
    <div className="max-w-[1280px] px-2 lg:px-5 mx-auto mt-20">
      <Zoom triggerOnce>
        <div className="w-full lg:h-[400px] flex justify-center items-center bg-home-color rounded-2xl p-16 aboutus_shine">
          <div>
            <div className="text-white text-2xl lg:text-[60px] font-semibold pb-8 text-center">
              About Us
            </div>
            <div className="text-white text-center text-sm lg:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </Zoom>

      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center overflow-hidden">
          <Fade direction="right" triggerOnce>
            <div className="flex-col">
              <Image src={Lady1} alt="img" className="w-full pb-5" />
              <div className="flex gap-5">
                <Image src={Lady2} alt="img" className="" />
                <Image src={Lady3} alt="img" className="" />
              </div>
            </div>
          </Fade>

          <div className="w-11/12 lg:w-5/12 my-auto pt-10 lg:pt-0">
            <Fade direction="left" triggerOnce>
              <div className="font-bold text-xl lg:text-4xl pb-5">
                We&apos;re on a mission to bring ideas to life.
              </div>
              <div className="text-sm lg:text-base pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </div>
              <div className="flex items-center pb-7">
                <List4 className="text-3xl mx-7" />
                <div>
                  <div className="text-sm lg:text-lg font-semibold">
                    How technology started
                  </div>
                  <div className="text-sm lg:text-base">
                    Building an enterprisedoesn&apos;t need your thousands.
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <List5 className="text-3xl mx-7" />
                <div>
                  <div className="text-sm lg:text-lg font-semibold">
                    Endless Possibilities
                  </div>
                  <div className="text-sm lg:text-base">
                    Building an enterprisedoesn&apos;t need your thousands.
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="text-black mx-auto py-10 lg:py-20">
        <div className="text-lg lg:text-4xl font-bold text-center pb-10">
          Businesses all over the world <br /> trust us to build their brand
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly mx-auto">
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
                10 Years
              </div>
              <div className="text-gray-600 text-xl text-center">
                In Business
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
                75000+
              </div>
              <div className="text-gray-600 text-xl text-center">Investors</div>
            </div>
          </Fade>
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
                100K+
              </div>
              <div className="text-gray-600 text-xl text-center">
                Monthly Blog Readers
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="flex-col pb-6 lg:pb-0">
              <div className="text-indigo-600 text-5xl font-semibold text-center pb-5">
                1.2m+
              </div>
              <div className="text-gray-600 text-xl text-center">
                Social Followers
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="mb-10 lg:mb-20 lg:mt-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center overflow-hidden">
          <div className="w-11/12 lg:w-2/4 my-auto pb-10 lg:pb-0">
            <Fade direction="right" triggerOnce>
              <div className="font-bold text-xl lg:text-4xl pb-5">
                Our Mission
              </div>
              <div className="text-gray-600 text-sm lg:text-xl pb-5">
                Building an enterprise level site doesn&apos;t need nightmare or
                cost your thousands. Felix is purpose built for ease of use and
                completxability to create.
              </div>
              <div className="flex items-center pb-3">
                <Image src={Tick} alt="img" className="w-5 h-5 mr-5" />
                <div className="text-sm lg:text-lg">
                  Posting to social media, blogs, and messengers
                </div>
              </div>
              <div className="flex items-center pb-3">
                <Image src={Tick} alt="img" className="w-5 h-5 mr-5" />
                <div className="text-sm lg:text-lg">Endless Possibilities</div>
              </div>
              <div className="flex items-center">
                <Image src={Tick} alt="img" className="w-5 h-5 mr-5" />
                <div className="text-sm lg:text-lg">
                  The Future of Writing Blog Articles
                </div>
              </div>
            </Fade>
          </div>
          <Fade direction="left" triggerOnce>
            <Image src={Mission} alt="img" className="" />
          </Fade>
        </div>
      </div>

      <div className="font-bold text-center text-xl lg:text-4xl pb-10">
        Our Value
      </div>
      <div className="w-11/12 lg:w-auto mx-auto lg:m-0 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 my-20">
        <Fade>
          <div>
            <Value1 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              Innovation
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
              Building an enterprise doesn&apos;t need nightmare or cost your
              thousands Felix is purpose built.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value2 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              Growth
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
              Building an enterprise doesn&apos;t need nightmare or cost your
              thousands Felix is purpose built.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value3 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              Ownership
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
              Building an enterprise doesn&apos;t need nightmare or cost your
              thousands Felix is purpose built.
            </div>
          </div>
        </Fade>
        <Fade>
          <div>
            <Value4 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              Team Work
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
              Building an enterprise doesn&apos;t need nightmare or cost your
              thousands Felix is purpose built.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value5 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              Commitment
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
              Building an enterprise doesn&apos;t need nightmare or cost your
              thousands Felix is purpose built.
            </div>
          </div>
        </Fade>

        <Fade>
          <div>
            <Value6 className="text-[5rem] mx-auto" />
            <div className="text-lg lg:text-2xl text-center font-semibold my-5 px-2">
              Positivity
            </div>
            <div className=" text-sm lg:text-base text-center pb-8 px-2">
              Building an enterprise doesn&apos;t need nightmare or cost your
              thousands Felix is purpose built.
            </div>
          </div>
        </Fade>
      </div>

      <div className="investor_shine bg-[#5174EF] rounded-2xl max-w-screen-xl px-5 mx-auto p-5 lg:p-10 mt-20 shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Fade direction="left" triggerOnce>
            <div className="w-full mx-auto lg:m-0 pb-10 lg:pb-0 text-white">
              <div className="text-2xl lg:text-5xl text-center lg:text-start font-bold my-4 lg:my-8">
                Start Course free trial
              </div>
              <div className="text-sm lg:text-lg text-center lg:text-start pb-8">
                Felix can help bring your dream website to life with ease.
              </div>
              <div className="w-full mx-auto flex relative">
                <input
                  type="text"
                  placeholder="Type your email"
                  className="bg-white rounded-full w-full px-2 py-5 placeholder-gray-500 outline-none pl-3"
                />
                <div className="text-white bg-home-color rounded-full absolute right-1 my-1 py-4 px-10 cursor-pointer">
                  Start
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <div className="mx-auto lg:m-0 relative">
              <Image src={Image3} alt="img" className="w-[300px] mx-auto" />
              <div className="w-full absolute top-[30%] px-4">
                <div className="text-sm lg:text-lg text-white text-center pb-5">
                  Paragraphs are the <br /> building blocks of papers
                </div>
                <div className="text-white text-center text-3xl pb-3">
                  Startup &nbsp; $
                  <span className="text-5xl font-extrabold">25</span>
                </div>
                <div className="w-[10rem] mx-auto bg-[#5143F6] rounded-lg shadow-md text-white text-center px-5 py-2">
                  {" "}
                  Admit Now
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="text-xl lg:text-4xl font-bold text-center mt-10 lg:mt-20 lg:mb-8">
        Our Investors
      </div>
      <div className="w-11/12 lg:w-full mx-auto lg:m-0 grid lg:grid-cols-2 lg:gap-10">
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
              Facebook
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              of the printing and typesetting industry Lorem Ipsum is simply
              dummy text. Lorem Ipsum is simply dummy text.
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
              Amazon
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              of the printing and typesetting industry Lorem Ipsum is simply
              dummy text. Lorem Ipsum is simply dummy text.
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
              Daraz
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              of the printing and typesetting industry Lorem Ipsum is simply
              dummy text. Lorem Ipsum is simply dummy text.
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="lg:w-2/3">
            <div className="text-xl lg:text-4xl text-[#5174EF] font-bold my-5 px-2">
              Google
            </div>
            <div className=" text-sm lg:text-base pb-8 px-2">
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

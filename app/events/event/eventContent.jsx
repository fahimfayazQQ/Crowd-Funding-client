'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Events1 from "../../../public/assets/images/events1.png";
import Events43 from "../../../public/assets/images/event43.png";
import { Zoom, Fade, JackInTheBox } from "react-awesome-reveal";
import "../eventsStyle.css";

const EventContent = () => {
  return (
    <div className="bg-[#ececec]">
      <div className="px-2 lg:px-5">
        <div className="max-w-[1280px] mx-auto pt-20">
          <Zoom triggerOnce>
            <div className="w-full bg-home-color rounded-2xl p-8 lg:p-16 event_shine">
              <div className="bg-white bg-opacity-30 backdrop:filter backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-2xl p-5">
                <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
                  Events
                </div>
                <div className="text-white">
                  Lorem Ipsum is simply dummy text <br />
                  of the printing and typesetting industry. Lorem Ipsum <br />
                  dolor is simply dummy text of the printing and typesetting
                  industry.
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="max-w-[1280px] px-5 mx-auto py-10 lg:py-20">
        <Fade>
          <div className="text-xl lg:text-4xl font-semibold mb-5">
            Lorem Ipsum is simply dummy text{" "}
          </div>
          <div className="lg:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </div>
          <div className="w-11/12 lg:w-1/2 flex flex-wrap justify-between mx-auto gap-5 mb-10">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">Lorem Ipsum is simply dummy</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">Lorem Ipsum is simply dummy</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">Lorem Ipsum is simply dummy</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">Lorem Ipsum is simply dummy</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">Lorem Ipsum is simply dummy</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
              <span className="lg:text-xl">Lorem Ipsum is simply dummy</span>
            </div>
          </div>
          <div className="lg:text-xl mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </div>
        </Fade>

        <div className="flex flex-col lg:flex-row justify-center gap-5 my-10">
          <Zoom triggerOnce>
            <Image src={Events1} alt="img" />
            <Image src={Events43} alt="img" />
          </Zoom>
        </div>

        <Fade>
          <div className="text-xl lg:text-3xl font-semibold mb-5">
            Our Working Proccess
          </div>
          <div className="lg:text-xl mb-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </div>
        </Fade>

        <JackInTheBox triggerOnce>
          <div className="bg-white w-11/12 lg:w-1/2 mx-auto p-10 shadow-lg rounded-xl">
            <div className="text-2xl text-center font-semibold my-2">
              Buy ticket
            </div>
            <div className="text-center">
              Building an enterprise level site doesn&apos;t need nightmare or
              cost your thousands.
            </div>
            <div className="text-3xl text-center font-semibold my-5">
              $14.99
            </div>
            <Link href={"../../learnPayment"} className="flex justify-center">
              <div className="inline-block mx-auto rounded-xl text-center bg-home-color text-white px-5 py-3">
                Payments
              </div>
            </Link>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default EventContent;

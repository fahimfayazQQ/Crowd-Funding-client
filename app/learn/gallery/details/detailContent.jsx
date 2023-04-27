'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Events1 from "../../../../public/assets/images/events1.png";
import Learn1 from "../../../../public/assets/images/learn1.png";
import { Zoom, Fade, JackInTheBox } from "react-awesome-reveal";

const DetailContent = () => {
  return (
    <div className="max-w-[1280px] px-5 mx-auto mt-20 lg:mb-20 overflow-hidden">
      <Zoom triggerOnce>
        <Image src={Learn1} alt="img" className="w-full pb-10" />
      </Zoom>
      <Fade>
        <div className="text-2xl lg:text-4xl font-semibold mb-5">
          Lorem Ipsum is simply dummy text{" "}
        </div>
        <div className="lg:text-xl mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br />
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
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br />
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
          <Image src={Events1} alt="img" />
        </Zoom>
      </div>
      <Fade>
        <div className="text-lg lg:text-3xl font-semibold mb-5">
          Our Working Proccess
        </div>
        <div className="lg:text-xl mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br />
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
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. <br />
          <br />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.{" "}
        </div>
      </Fade>

      <JackInTheBox triggerOnce>
        <div className="bg-white w-11/12 lg:w-1/2 mx-auto p-10 shadow-lg rounded-xl mb-5">
          <div className="text-2xl font-semibold text-center my-2">
            Admission Fee
          </div>
          <div className="text-center lg:text-xl">
            Building an enterprise level site doesn&apos;t need nightmare or
            cost your thousands.
          </div>
          <div className="text-3xl font-semibold text-center my-5">$14.99</div>
          <Link href={"../../learnPayment"} className="flex justify-center">
            <div className="inliine-block mx-auto rounded-xl text-center bg-home-color text-white px-5 py-3">
              Payments
            </div>
          </Link>
        </div>
      </JackInTheBox>
    </div>
  );
};

export default DetailContent;

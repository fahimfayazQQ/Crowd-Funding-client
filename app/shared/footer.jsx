'use client'
import React from "react";
import { FB, Insta, Twitter } from "./Icons";
import image1 from "../../public/assets/images/footer33.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="max-w-screen-xl px-5 pt-14 lg:pt-20 mx-auto overflow-hidden">
      <div className="border-t pb-5"></div>
      <div className="w-11/12 lg:w-full flex justify-between items-center mx-auto lg:m-0">
        <Fade direction="left" triggerOnce>
          <div className="text-xl lg:text-3xl font-semibold">QUADQUE</div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="bg-white text-xs lg:text-sm font-semibold rounded-full shadow-md px-6 py-3 cursor-pointer">
            Create Campaign
          </div>
        </Fade>
      </div>
      <div className="border-b pt-5"></div>

      <div className="w-11/12 mx-auto lg:w-auto flex flex-wrap justify-between items-start lg:items-center text-sm lg:text-base mt-10">
        <Fade direction="left" triggerOnce>
          <ul className="text-zinc-600 pb-5 lg:pb-0">
            <Link href={"../"}>
              <li className="mb-4 cursor-pointer">Home</li>
            </Link>
            <Link href={"../about"}>
              <li className="mb-4 cursor-pointer">About</li>
            </Link>
            <Link href={"../explore"}>
              <li className="mb-4 cursor-pointer">Explore</li>
            </Link>
            <Link href={"../start-project"}>
              <li className="mb-4 cursor-pointer">Create Project</li>
            </Link>
            <Link href={"../login"}>
              <li className="mb-4 cursor-pointer">Login</li>
            </Link>
          </ul>
        </Fade>

        <Fade direction="left" delay={500} triggerOnce>
          <ul className="text-zinc-600 pb-5 lg:pb-0">
            <Link href={"../blogs"}>
              <li className="mb-4 cursor-pointer">Blogs</li>
            </Link>
            <Link href={"../stories"}>
              <li className="mb-4 cursor-pointer">Stories</li>
            </Link>
            <Link href={"../events"}>
              <li className="mb-4 cursor-pointer">Events</li>
            </Link>
            <Link href={"../learn"}>
              <li className="mb-4 cursor-pointer">Learn</li>
            </Link>
          </ul>
        </Fade>

        <Fade direction="left" delay={1000} triggerOnce>
          <ul className="text-zinc-600 pb-5 lg:pb-0">
            <li className="mb-4 cursor-pointer">Guide</li>
            <li className="mb-4 cursor-pointer">password Protection</li>
            <li className="mb-4 cursor-pointer">Licences</li>
            <li className="mb-4 cursor-pointer">Changelog</li>
          </ul>
        </Fade>

        <Fade direction="right" triggerOnce className="mx-auto lg:m-0">
          <div className="relative">
            <div className="rounded-2xl shadow-lg shadow-gray-500">
              <Image src={image1} alt="img" className="w-[300px]" />
            </div>
            <div className="absolute top-[30%] px-4">
              <div className="">
                <div className="text-lg font-semibold text-white text-center pb-5">
                  Paragraphs are the building blocks of papers
                </div>
                <div className="text-white text-center text-3xl pb-3">
                  Startup <span>$25</span>
                </div>
                <div className="w-[10rem] mx-auto bg-[#5143F6] rounded-lg shadow-md text-white text-center px-5 py-2 cursor-pointer">
                  {" "}
                  Get Plan
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="border-t mt-10 mb-5"></div>
      <div className="w-11/12 mx-auto lg:w-auto lg:m-0 flex justify-between items-center pb-5">
        <div className="text-xs font-semibold">
          Copyright © 2023 Quadque Technology Ltd.
        </div>
        <div className="flex">
          <Link href={"https://www.facebook.com/"}>
            <FB className="text-3xl mx-3 text-gray-400 hover:text-blue-700 cursor-pointer" />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <Insta className="text-3xl mx-3 text-gray-400 hover:text-pink-600 cursor-pointer" />
          </Link>
          <Link href={"https://twitter.com/"}>
            <Twitter className="text-3xl mx-3 text-gray-400 hover:text-sky-500 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

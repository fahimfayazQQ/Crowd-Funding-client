'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import startProj from "../../public/assets/images/start-project.png";
import { Fade, Slide } from "react-awesome-reveal";

const CreateProject = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto pt-20">
      <div className="text-2xl lg:text-3xl mb-5">
        Lorem Ipsum is simply dummy text
      </div>
      <div className="mb-5 text-sm lg:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum been the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printegalley of type and scrambled it
        to make a type specimen book.
      </div>
      <Link href={"/start-project/registration"}>
        <div className="inline-block bg-home-color text-white text-sm text-center tracking-widest rounded-md px-5 py-3">
          START PROJECT
        </div>
      </Link>
      <Fade direction="up" triggerOnce>
        <Image src={startProj} alt="img" className="w-full my-10" />
      </Fade>
      <Fade>
        <div className="text-xl lg:text-3xl mb-5">
          Lorem Ipsum is simply dummy text
        </div>
        <div className="mb-5 text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printegalley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printegalley of type and scrambled it to make a type specimen
          book.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printegalley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="mb-5 text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printegalley of type and
          scrambled it to make a type specimen book.
        </div>
        <ul className="lg:w-1/2 mx-auto lg:my-10">
          <li className="py-3 text-sm lg:text-base">
            <span className="text-xl font-semibold pr-2">01</span>Listen to what
            they say about you
          </li>
          <li className="py-3 text-sm lg:text-base">
            <span className="text-xl font-semibold pr-2">02</span>Randomised
            words which don&apos;t look even slightly believable.
          </li>
          <li className="py-3 text-sm lg:text-base">
            <span className="text-xl font-semibold pr-2">03</span>
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks
          </li>
          <li className="py-3 text-sm lg:text-base">
            <span className="text-xl font-semibold pr-2">04</span>Automate
            multiple scenarios and eliminate tedious tasks.{" "}
          </li>
        </ul>
        <div className="mb-5 text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printegalley of type and
          scrambled it to make a type specimen book.
        </div>
      </Fade>

      <div className="flex flex-col lg:flex-row justify-between mt-20 overflow-hidden">
        <div className="lg:w-1/3">
          <Fade direction="left" triggerOnce>
            <div className="text-xl lg:text-3xl mb-5">
              Let’s get ready to start your campaign!
            </div>
            <div className="mb-5 text-sm lg:text-base">
              Select a primary category and subcategory for your new project.We
              want to create the best onboarding for you – please fill out the
              information below. Your answers will be locked for this campaign
              and can’t be changed later.
            </div>
            <ul className="lg:my-5">
              <li className="py-3 text-sm lg:text-base">
                <span className="text-xl font-semibold pr-2">01</span>Listen to
                what they say about you
              </li>
              <li className="py-3 text-sm lg:text-base">
                <span className="text-xl font-semibold pr-2">02</span>Randomised
                words which don&apos;t look even slightly believable.
              </li>
              <li className="py-3 text-sm lg:text-base">
                <span className="text-xl font-semibold pr-2">03</span>
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks
              </li>
              <li className="py-3 text-sm lg:text-base">
                <span className="text-xl font-semibold pr-2">04</span>Automate
                multiple scenarios and eliminate tedious tasks.{" "}
              </li>
            </ul>
          </Fade>
        </div>
        <div className="lg:w-1/3 flex flex-wrap justify-center m-auto overflow-hidden">
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color lg:text-xl text-home-color hover:text-white rounded-xl p-5 m-2 lg:m-4">
                Donation
              </div>
            </Link>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color lg:text-xl text-home-color hover:text-white rounded-xl p-5 m-2 lg:m-4">
                Debt
              </div>
            </Link>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color lg:text-xl text-home-color hover:text-white rounded-xl p-5 m-2 lg:m-4">
                Equity
              </div>
            </Link>
          </Slide>
          <Slide direction="right" triggerOnce>
            <Link href={"/start-project/registration"}>
              <div className="w-[8rem] lg:w-[10rem] lg:h-[8rem] flex justify-center items-center border-2 border-home-color hover:bg-home-color hover:text-white lg:text-xl text-home-color rounded-xl p-5 m-2 lg:m-4">
                Reward
              </div>
            </Link>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;

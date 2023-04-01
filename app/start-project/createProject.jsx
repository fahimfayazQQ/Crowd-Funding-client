import React from "react";
import Link from "next/link";
import Image from "next/image";
import startProj from "../../public/assets/images/start-project.png";

const CreateProject = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <div className="text-3xl mb-5">Lorem Ipsum is simply dummy text of</div>
      <div className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum been the industry's standard dummy text ever since
        the 1500s, when an unknown printegalley of type and scrambled it to make
        a type specimen book.
      </div>
      <Link href={"/start-project/registration"}>
        <div className="inline-block bg-home-color text-white text-sm text-center tracking-widest rounded-md px-5 py-3">
          START PROJECT
        </div>
      </Link>
      <Image src={startProj} className="w-full my-10" />
      <div className="text-3xl mb-5">Lorem Ipsum is simply dummy text</div>
      <div className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum been the industry's standard dummy text ever since
        the 1500s, when an unknown printegalley of type and scrambled it to make
        a type specimen book.Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum been the industry's standard dummy
        text ever since the 1500s, when an unknown printegalley of type and
        scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printegalley of type and scrambled it to make a type specimen book.
      </div>
      <div className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum been the industry's standard dummy text ever since
        the 1500s, when an unknown printegalley of type and scrambled it to make
        a type specimen book.
      </div>
      <ul className="w-1/2 mx-auto my-10">
        <li className="py-3">
          <span className="text-xl font-semibold pr-2">01</span>Listen to what
          they say about you
        </li>
        <li className="py-3">
          <span className="text-xl font-semibold pr-2">02</span>Randomised words
          which don't look even slightly believable.
        </li>
        <li className="py-3">
          <span className="text-xl font-semibold pr-2">03</span>
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks
        </li>
        <li className="py-3">
          <span className="text-xl font-semibold pr-2">04</span>Automate
          multiple scenarios and eliminate tedious tasks.{" "}
        </li>
      </ul>
      <div className="mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum been the industry's standard dummy text ever since
        the 1500s, when an unknown printegalley of type and scrambled it to make
        a type specimen book.
      </div>

      <div className="flex justify-between mt-20">
        <div className="w-1/3">
          <div className="text-3xl mb-5">Lorem Ipsum is simply dummy text</div>
          <div className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum been the industry's standard dummy text ever
            since the 1500s, when an unknown printegalley of type and scrambled
            it to make a type specimen book.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printegalley of type and scrambled it to make a type specimen
            book.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum been the industry's standard dummy
            text ever since the 1500s, when an unknown printegalley of type and
            scrambled it to make a type specimen book.
          </div>
          <div className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum been the industry's standard dummy text ever
            since the 1500s, when an unknown printegalley of type and scrambled
            it to make a type specimen book.
          </div>
        </div>
        <div className="w-1/3 flex flex-wrap justify-center m-auto">
          <div className="w-[10rem] h-[8rem] flex justify-center items-center border-2 border-home-color text-xl text-home-color rounded-xl p-5 m-4">
            Donation
          </div>
          <div className="w-[10rem] h-[8rem] flex justify-center items-center border-2 border-home-color text-xl text-home-color rounded-xl p-5 m-4">
            Debt
          </div>
          <div className="w-[10rem] h-[8rem] flex justify-center items-center border-2 border-home-color text-xl text-home-color rounded-xl p-5 m-4">
            Equity
          </div>
          <div className="w-[10rem] h-[8rem] flex justify-center items-center border-2 border-home-color text-xl text-home-color rounded-xl p-5 m-4">
            Reward
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;

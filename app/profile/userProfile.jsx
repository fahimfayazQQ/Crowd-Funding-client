import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/assets/images/propic.png";

const UserProfile = () => {
  return (
    <div className="w-9/12 h-full mx-auto p-20">
      <div className="flex relative">
        <Image src={ProfilePic} alt="img" className="absolute -left-52" />
        <div>
          <div className="text-xl">Atmaram Tukharaman</div>
          <div className="text-sm italic">Atmaram31@gmail.com</div>
        </div>
      </div>
      <div className="w-full border my-10"></div>
      <div className="w-1/2 text-lg">
        This handout will help you understand how paragraphs are formed, how to
        develop stronger paragraphs, and how to completely and clearly express
        your ideas.
      </div>
      <div className="w-full border my-10"></div>
      <div className="flex flex-wrap justify-between w-1/2">
        <div className="w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">Business Id</div>
          <div className="">2345622562</div>
        </div>
        <div className="w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">Location</div>
          <div className="">NSW 250 USA</div>
        </div>
        <div className="w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">Total Invest</div>
          <div className="">25</div>
        </div>
        <div className="w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">Total Investing Money</div>
          <div className="">45.000$</div>
        </div>
        <div className="w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">Business Id</div>
          <div className="">2345622562</div>
        </div>
        <div className="w-[10rem] flex flex-col m-10">
          <div className="text-sm font-semibold">Business Id</div>
          <div className="">2345622562</div>
        </div>
      </div>
      <div className="w-full border my-10"></div>
      <div className="flex flex-wrap justify-between w-1/2">
        <div className="flex flex-col m-10">
          <div className="text-sm font-semibold">Contact</div>
          <div className="">+2345622562</div>
        </div>
        <div className="flex flex-col m-10">
          <div className="text-sm font-semibold">Account</div>
          <div className="">DBL 5986 5686 65968</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

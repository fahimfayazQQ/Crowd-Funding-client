"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../public/assets/images/biznez.png";

const Business = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <Image src={Image1} alt="img" className="mt-10 lg:mt-20" />
        <div className="w-11/12 lg:w-1/4 my-auto">
          <div className="font-semibold text-2xl pb-5">
            Lorem Ipsum simply dummy text of the{" "}
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

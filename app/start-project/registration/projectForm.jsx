"use client";
import React, { useState } from "react";
import Overview from "./overview";
import About from "./about";
import Update from "./update";
import Rewards from "./rewards";
import Faq from "./faq";

const ProjectForm = () => {
  const [toogleTab, setToogleTab] = useState(0);

  const hangleToogle = (id) => {
    setToogleTab(id);
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2lg px-5 mx-auto pt-20">
        <div className="text-3xl lg:text-4xl font-semibold mb-5">
          Let’s get ready to start your campaign!
        </div>
        <div>
          Select a primary category and subcategory for your new project.We want
          to create the best onboarding for you – please fill out the
          information below. Your answers will be locked for this campaign and
          can’t be changed later.
        </div>
        <div className="flex flex-wrap justify-around bg-white p-5 shadow-lg rounded-xl my-10">
          <div
            onClick={() => {
              hangleToogle(0);
            }}
            className={`${
              toogleTab === 0 && "text-home-color scale-110 duration-300"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`${
                toogleTab === 0 &&
                "w-6 h-6 bg-home-color rounded-full mx-auto text-white"
              }`}
            >
              1
            </div>
            <div className="text-sm">Overview </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(1);
            }}
            className={`${
              toogleTab === 1 && "text-home-color scale-110 duration-300"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`${
                toogleTab === 1 &&
                "w-6 h-6 bg-home-color rounded-full mx-auto text-white"
              }`}
            >
              2
            </div>
            <div className="text-sm">About </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(2);
            }}
            className={`${
              toogleTab === 2 && "text-home-color scale-110 duration-300"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`${
                toogleTab === 2 &&
                "w-6 h-6 bg-home-color rounded-full mx-auto text-white"
              }`}
            >
              3
            </div>
            <div className="text-sm">Update </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(3);
            }}
            className={`${
              toogleTab === 3 && "text-home-color scale-110 duration-300"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`${
                toogleTab === 3 &&
                "w-6 h-6 bg-home-color rounded-full mx-auto text-white"
              }`}
            >
              4
            </div>
            <div className="text-sm">Rewards </div>
          </div>
          <div
            onClick={() => {
              hangleToogle(4);
            }}
            className={`${
              toogleTab === 4 && "text-home-color scale-110 duration-300"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`${
                toogleTab === 4 &&
                "w-6 h-6 bg-home-color rounded-full mx-auto text-white"
              }`}
            >
              5
            </div>
            <div className="text-sm">FAQ </div>
          </div>
        </div>

        {toogleTab === 0 && <Overview />}
        {toogleTab === 1 && <About />}
        {toogleTab === 2 && <Update />}
        {toogleTab === 3 && <Rewards />}
        {toogleTab === 4 && <Faq />}
      </div>
    </div>
  );
};

export default ProjectForm;

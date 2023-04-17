'use client';
import React, { useState } from "react";
import Overview from "./overview";
import About from "./about";
import Update from "./update";
import Rewards from "./rewards";
import Faq from "./faq";
import { Fade } from "react-awesome-reveal";

const ProjectForm = () => {
  const [toogleTab, setToogleTab] = useState(0);

  const hangleToogle = (id) => {
    setToogleTab(id);
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2lg px-5 mx-auto pt-20">
        <div className="text-2xl lg:text-4xl font-semibold mb-5">
          Let’s get ready to start your campaign!
        </div>
        <div className="text-sm lg:text-base">
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
              toogleTab === 0 &&
              "text-home-color scale-110 duration-300 text-shadow"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${
                toogleTab === 0 && "bg-home-color"
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
              toogleTab === 1 &&
              "text-home-color scale-110 duration-300 text-shadow"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${
                toogleTab === 1 && "bg-home-color"
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
              toogleTab === 2 &&
              "text-home-color scale-110 duration-300 text-shadow"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${
                toogleTab === 2 && "bg-home-color"
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
              toogleTab === 3 &&
              "text-home-color scale-110 duration-300 text-shadow"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${
                toogleTab === 3 && "bg-home-color"
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
              toogleTab === 4 &&
              "text-home-color scale-110 duration-300 text-shadow"
            } flex-col justify-center items-center text-center cursor-pointer`}
          >
            <div
              className={`w-6 h-6 bg-black rounded-full text-white mx-auto ${
                toogleTab === 4 && "bg-home-color"
              }`}
            >
              5
            </div>
            <div className="text-sm">FAQ </div>
          </div>
        </div>

        {toogleTab === 0 && (
          <Fade bottom opposite>
            <Overview />
          </Fade>
        )}
        {toogleTab === 1 && (
          <Fade bottom opposite>
            <About />
          </Fade>
        )}
        {toogleTab === 2 && (
          <Fade bottom opposite>
            <Update />
          </Fade>
        )}
        {toogleTab === 3 && (
          <Fade bottom opposite>
            <Rewards />
          </Fade>
        )}
        {toogleTab === 4 && (
          <Fade bottom opposite>
            <Faq />
          </Fade>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;

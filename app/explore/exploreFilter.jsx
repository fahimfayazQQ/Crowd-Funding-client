"use client";
import React, { useState } from "react";
import { Select } from "antd";
import image from "../../public/assets/images/image3.png";
// import "../landingLayout/style.css";
// import { Search } from "../shared/Icons";
import "../LandingLayout/style.css"
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Search } from "../shared/Icons";

const categoryData = ["Marketing", "SEO"];
const sortByData = {
  Marketing: ["Digital", "Ningbo", "Wenzhou"],
  SEO: ["Sitemap", "Suzhou", "Zhenjiang"],
};

const ExploreFilter = () => {
  const [cities, setCities] = useState(sortByData[categoryData[0]]);
  const [secondCity, setSecondCity] = useState(sortByData[categoryData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(sortByData[value]);
    setSecondCity(sortByData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  return (
    <div className="px-2 lg:px-5">
      <div className="investor_shine bg-home-color rounded-2xl max-w-screen-xl mx-auto p-4 lg:p-10 mt-20 shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between">
          <Fade direction="left" triggerOnce>
            <div className="w-full text-white">
              <div className="text-2xl lg:text-4xl text-center lg:text-start my-8">
                Lorem ipsum dolor
              </div>
              <div className="text-base lg:pb-8 text-center lg:text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:border px-8 py-6 lg:rounded-2xl lg:bg-white lg:bg-opacity-10 lg:backdrop:filter lg:backdrop-blur-md">
                <div className="flex justify-around items-center gap-2 mb-4 lg:mb-0">
                  <Select
                    defaultValue={categoryData[0]}
                    style={{
                      width: 140,
                    }}
                    onChange={handleProvinceChange}
                    options={categoryData.map((province) => ({
                      label: province,
                      value: province,
                    }))}
                  />
                  <Select
                    style={{
                      width: 140,
                    }}
                    defaultValue={sortByData[0]}
                    value={secondCity}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                  />
                </div>
                <div className="w-full flex relative">
                  <input
                    type="text"
                    placeholder="Search Campaigns"
                    className="bg-white bg-opacity-30 rounded-md w-full px-2 py-2 placeholder-white outline-none"
                  />
                  <Search className="text-xl mt-2 absolute right-2"/>
                </div>
              </div>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce>
            <Image src={image} alt="img" className="hidden lg:block" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ExploreFilter;

"use client";
import React, { useState } from "react";
import { Select, Space } from "antd";
import image from "../../../public/assets/images/image3.png";
import "../landingLayout/style.css";
import { Search } from "../shared/Icons";
import Image from "next/image";
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
    <div className="investor_shine bg-home-color rounded-2xl max-w-screen-xl mx-auto p-10 mt-20 shadow-lg">
      <div className="flex justify-between">
        <div className="w-2/3 text-white">
          <div className="text-4xl my-8">Lorem ipsum dolor</div>
          <div className="text-base pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center gap-2 border p-8 rounded-xl bg-white bg-opacity-10 backdrop:filter backdrop-blur-md">
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
          <div className="flex relative">
          <input type="text" placeholder="Search Campaigns" className="bg-white bg-opacity-30 rounded-md w-[300px] px-2 placeholder-white"/>
          <Search className="text-xl mt-1.5 absolute right-2"/>
          </div>
          </div>
        </div>

        <Image src={image} alt="" className="w-1/3"/>
      </div>
    </div>
  );
};

export default ExploreFilter;

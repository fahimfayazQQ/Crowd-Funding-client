'use client'
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../public/assets/images/avatar.png";
import post1 from "../../public/assets/images/blog2.png";
import { Tick } from "../shared/Icons";
import { Select } from "antd";
const categoryData = ["All", "Events"];

const Notification = () => {
  const [readAll, setReadAll] = useState(false);
  const handleProvinceChange = (value) => {
    value.preventDefault();
  };

  const handleReadAllMsg = () => {
  setReadAll(!readAll);
  }
  return (
    <div className="2xl:w-10/12 h-auto lg:h-[100vh] mx-auto lg:p-20 overflow-y-auto lg:overflow-y-hidden">
      <div className="flex flex-col lg:flex-row justify-between my-5 mx-4">
        <div className="flex items-end gap-4">
          <div>
            <div className="text-lg font-bold">Filter</div>
          </div>
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
        </div>
        <div className="flex items-center">
          <div
            onClick={() => {
              handleReadAllMsg();
            }}
            className={`border w-5 h-5 rounded-md shadow-md flex items-center justify-center cursor-pointer ${
              readAll && "shadow shadow-green-300"
            }`}
          >
            <Tick className={`${readAll ? "text-green-400" : "hidden"}`} />
          </div>
          <span className="text-xs text-sky-500 lg:mr-10 px-2 py-2">
            mark all as read
          </span>
        </div>
      </div>

      <div className="h-[83vh] text-sm lg:p-5 lg:overflow-y-auto px-4">
        <div className="flex items-center">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Galid Mahmood</span> commented on
            your post.
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="flex items-center mt-2">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Galid Mahmood</span> created a post
            in Food category.
          </div>
        </div>
        <div className="w-full 2lg:w-2/3 bg-white rounded-xl shadow-lg p-5 my-5">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={post1}
              alt="img"
              className="w-full lg:w-[18rem] lg:h-[10rem] mr-3"
            />
            <div className="pt-2 lg:pt-0">
              <div className="flex justify-between text-xs pb- lg:pt-0">
                <div>Food Category</div>
                <div>10 days late</div>
              </div>
              <div className="font-semibold">Lorem ipsum dolor sit amet</div>
              <div className="text-xs">
                Premium pepperoni and cheese is made with real mozzarella on
                original hand-tossed crust.
              </div>
              <div>
                <span className="text-zinc-400">Raised:</span> $2300
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="flex items-center mt-2">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Galid Mahmood</span> commented on
            your post.
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="flex items-center mt-2">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Sara Sarawat</span> created a post
            in Food category.
          </div>
        </div>
        <div className="w-full 2lg:w-2/3 bg-white rounded-xl shadow-lg p-5 my-5">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={post1}
              alt="img"
              className="w-full lg:w-[18rem] lg:h-[10rem] mr-3"
            />
            <div className="pt-2 lg:pt-0">
              <div className="flex justify-between text-xs pb- lg:pt-0">
                <div>Food Category</div>
                <div>10 days late</div>
              </div>
              <div className="font-semibold">Lorem ipsum dolor sit amet</div>
              <div className="text-xs">
                Premium pepperoni and cheese is made with real mozzarella on
                original hand-tossed crust.
              </div>
              <div>
                <span className="text-zinc-400">Raised:</span> $2300
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="flex items-center mt-2">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Raisa Tariq</span> commented on
            your post.
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="flex items-center mt-2">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Raqweed Mahmood</span> created a post
            in Food category.
          </div>
        </div>
        <div className="w-full 2lg:w-2/3 bg-white rounded-xl shadow-lg p-5 my-5">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={post1}
              alt="img"
              className="w-full lg:w-[18rem] lg:h-[10rem] mr-3"
            />
            <div className="pt-2 lg:pt-0">
              <div className="flex justify-between text-xs pb- lg:pt-0">
                <div>Food Category</div>
                <div>10 days late</div>
              </div>
              <div className="font-semibold">Lorem ipsum dolor sit amet</div>
              <div className="text-xs">
                Premium pepperoni and cheese is made with real mozzarella on
                original hand-tossed crust.
              </div>
              <div>
                <span className="text-zinc-400">Raised:</span> $2300
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="flex items-center mt-2">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Asif Zaman</span> commented on
            your post.
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="w-full 2lg:w-2/3 bg-white rounded-xl shadow-lg p-5 my-5">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={post1}
              alt="img"
              className="w-full lg:w-[18rem] lg:h-[10rem] mr-3"
            />
            <div className="pt-2 lg:pt-0">
              <div className="flex justify-between text-xs pb- lg:pt-0">
                <div>Food Category</div>
                <div>10 days late</div>
              </div>
              <div className="font-semibold">Lorem ipsum dolor sit amet</div>
              <div className="text-xs">
                Premium pepperoni and cheese is made with real mozzarella on
                original hand-tossed crust.
              </div>
              <div>
                <span className="text-zinc-400">Raised:</span> $2300
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>

        <div className="flex items-center mt-2">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Riddha Aunindya</span> commented on
            your post.
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 text-xs px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

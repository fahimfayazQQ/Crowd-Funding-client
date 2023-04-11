'use client'
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../public/assets/images/avatar.png";
import post1 from "../../public/assets/images/blog2.png";
import { Select } from "antd";
const categoryData = ["All", "Events"];

const Notification = () => {
  const [readAll, setReadAll] = useState(false);
  const handleProvinceChange = (value) => {
    value.preventDefault();
  };

  const handleReadAllMsg = () => {
  setReadAll(true);
  }
  return (
    <div className="lg:w-10/12 h-[100vh] mx-auto lg:p-20">
      <div className="flex flex-col lg:flex-row justify-between my-5 mx-4">
        <div className="flex items-end gap-4">
          <div>
            <div className="text-lg font-bold">Notifications</div>
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
          <div className={`${readAll ? "bg-black":""} w-4 h-4 border border-black`}></div>
          <a onClick={()=>{handleReadAllMsg()}} href="" className="text-sm underline text-sky-600 mr-10 px-2 py-2">
            mark all as read
          </a>
        </div>
      </div>

      <div className="h-[83vh] text-sm lg:p-5 overflow-y-scroll px-4">
        <div className="flex items-center">
          <Image src={Avatar} alt="img" className="w-10 mr-3" />
          <div>
            <span className="font-semibold">Galid Mahmood</span> commented on
            your post.
          </div>
        </div>
        <div className="flex items-center lg:py-5">
          <div className="text-zinc-400 px-14 whitespace-nowrap">
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
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-5 my-5">
          <div className="flex flex-col lg:flex-row">
            <Image src={post1} alt="img" className="lg:w-[15rem] mr-3" />
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
          <div className="text-zinc-400 px-14 whitespace-nowrap">
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
          <div className="text-zinc-400 px-14 whitespace-nowrap">
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
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-5 my-5">
          <div className="flex flex-col lg:flex-row">
            <Image src={post1} alt="img" className="lg:w-[15rem] mr-3" />
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
          <div className="text-zinc-400 px-14 whitespace-nowrap">
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
          <div className="text-zinc-400 px-14 whitespace-nowrap">
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
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-5 my-5">
          <div className="flex flex-col lg:flex-row">
            <Image src={post1} alt="img" className="lg:w-[15rem] mr-3" />
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
          <div className="text-zinc-400 px-14 whitespace-nowrap">
            Yesterday, 10:22am
          </div>
          <div className="w-full border"></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

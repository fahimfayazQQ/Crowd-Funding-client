import React from "react";
import { List1 } from "../shared/Icons";
import Image1 from "../../public/assets/images/image2.png";
import Image2 from "../../public/assets/images/Method.png";
import Image from "next/image";

const LearnContent = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="text-black mx-auto mb-20">
        <div className="text-4xl text-center pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
        <div className="w-2/3 flex flex-wrap justify-evenly mx-auto">
          <div className="flex-col">
            <div className="text-indigo-600 text-4xl font-semibold text-center">
              1000
            </div>
            <div className="text-center">Investors</div>
          </div>
          <div className="flex-col">
            <div className="text-indigo-600 text-4xl font-semibold text-center">
              1000
            </div>
            <div className="text-center">Investors</div>
          </div>
          <div className="flex-col">
            <div className="text-indigo-600 text-4xl font-semibold text-center">
              1000
            </div>
            <div className="text-center">Investors</div>
          </div>
        </div>
      </div>
      <div className="text-3xl text-center mb-10">
        Save time by scheduling posts
      </div>
      <div className="grid lg:grid-cols-4 gap-5 mb-10">
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
          <div className="text-xl my-5">Save time by scheduling posts</div>
          <div className="text-sm pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-between px-4">
            <List1 className="text-5xl" />
            <div className=" bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="flex justify-between items-center">
          <div className="bg-white flex-col shadow-lg p-5 rounded-3xl">
            <Image src={Image1} alt="img" className="pb-5" />
            <Image src={Image2} alt="img" className="" />
          </div>
          <div className="w-2/4 my-auto grid grid-cols-2 gap-5">
            <div className="p-4">
              <div className="text-5xl">01</div>
              <div className="font-semibold text-xl pb-5">
                About Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </div>
              <div className="text-sm pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s,
              </div>
            </div>
            <div className="p-4">
              <div className="text-5xl">02</div>
              <div className="font-semibold text-xl pb-5">
                About Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </div>
              <div className="text-sm pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s,
              </div>
            </div>
            <div className="p-4">
              <div className="text-5xl">03</div>
              <div className="font-semibold text-xl pb-5">
                About Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </div>
              <div className="text-sm pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s,
              </div>
            </div>
            <div className="p-4">
              <div className="text-5xl">04</div>
              <div className="font-semibold text-xl pb-5">
                About Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </div>
              <div className="text-sm pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnContent;

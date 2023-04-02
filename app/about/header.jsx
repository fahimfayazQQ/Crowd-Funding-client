import React from "react";
import "../LandingLayout/style.css";
import Image1 from "../../public/assets/images/image2.png";
import Image2 from "../../public/assets/images/Method.png";
import Image3 from "../../public/assets/images/footer33.png";
import Image from "next/image";
import {
  List1,
  List2,
  Value1,
  Value2,
  Value3,
  Value4,
  Value5,
  Value6,
  Search,
} from "../shared/Icons";

const AboutHeader = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="w-full bg-home-color rounded-2xl p-16 investor_shine">
        <div className="text-white text-4xl font-semibold pb-5 text-center">
          About Us
        </div>
        <div className="text-white text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>

      <div className="py-20">
        <div className="flex justify-evenly items-center">
          <div className="flex-col shadow-lg p-5 rounded-3xl bg-white">
            <Image src={Image1} alt="img" className="pb-5" />
            <Image src={Image2} alt="img" className="" />
          </div>
          <div className="w-1/4 my-auto">
            <div className="font-semibold text-2xl pb-5">
              We&apos;re on a mission to bring ideas to life.
            </div>
            <div className="pb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s,
            </div>
            <div className="flex">
              <List1 className="text-5xl mr-5" />
              <div>
                <div className="text-lg font-semibold">
                  How technology started
                </div>
                <div>Building an enterprisedoesn&apos;t need your thousands.</div>
              </div>
            </div>
            <div className="flex">
              <List2 className="text-5xl mr-5" />
              <div>
                <div className="text-lg font-semibold">
                  Endless Possibilities
                </div>
                <div>Building an enterprisedoesn&apos;t need your thousands.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-black mx-auto py-20">
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

      <div className="py-20">
        <div className="flex justify-evenly items-center">
          <div className="w-1/4 my-auto">
            <div className="font-semibold text-2xl pb-5">Our Mission</div>
            <div className="pb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s,
            </div>
            <div className="flex">
              <List1 className="text-5xl mr-5" />
              <div>
                <div className="text-lg font-semibold">
                  How technology started
                </div>
                <div>Building an enterprisedoesn&apos;t need your thousands.</div>
              </div>
            </div>
            <div className="flex">
              <List2 className="text-5xl mr-5" />
              <div>
                <div className="text-lg font-semibold">
                  Endless Possibilities
                </div>
                <div>Building an enterprisedoesn&apos;t need your thousands.</div>
              </div>
            </div>
          </div>
          <Image src={Image1} alt="img" className="" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 my-20">
        <div className="pb-5">
          <Value1 className="text-5xl mx-auto" />
          <div className="text-xl text-center font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm text-center pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="pb-5">
          <Value2 className="text-5xl mx-auto" />
          <div className="text-xl text-center font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm text-center pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="pb-5">
          <Value3 className="text-5xl mx-auto" />
          <div className="text-xl text-center font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm text-center pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="pb-5">
          <Value4 className="text-5xl mx-auto" />
          <div className="text-xl text-center font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm text-center pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="pb-5">
          <Value5 className="text-5xl mx-auto" />
          <div className="text-xl text-center font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm text-center pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="pb-5">
          <Value6 className="text-5xl mx-auto" />
          <div className="text-xl text-center font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm text-center pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>

      <div className="investor_shine bg-home-color rounded-2xl max-w-screen-xl mx-auto p-10 mt-20 shadow-lg">
        <div className="flex justify-between">
          <div className="w-2/3 text-white">
            <div className="text-4xl my-8">Lorem ipsum dolor</div>
            <div className="text-base pb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="w-[90%] flex justify-center items-center gap-2 border p-8 rounded-xl bg-white bg-opacity-10 backdrop:filter backdrop-blur-md">
              <div className="flex relative">
                <input
                  type="text"
                  placeholder="Search Campaigns"
                  className="bg-white bg-opacity-30 rounded-md w-[400px] px-2 py-3 placeholder-white"
                />
                <Search className="text-xl mt-3 absolute right-2" />
              </div>
            </div>
          </div>

          <div className="relative">
            <Image src={Image3} alt="img" className="w-[300px]" />
            <div className="absolute top-[30%] px-4">
              <div className="text-lg font-semibold text-white text-center pb-5">
                Paragraphs are the building blocks of papers
              </div>
              <div className="text-white text-center text-3xl pb-3">
                Startup <span>$25</span>
              </div>
              <div className="w-[10rem] mx-auto bg-[#5143F6] rounded-lg shadow-md text-white text-center px-5 py-2">
                {" "}
                Get Plan
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-4xl text-center mt-20 mb-8">Our Investors</div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="pb-5">
          <div className="text-2xl font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting. of
            the printing and typesetting industry Lorem Ipsum is simply dummy
            text. Lorem Ipsum is simply dummy text.
          </div>
        </div>

        <div className="pb-5">
          <div className="text-2xl font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting. of
            the printing and typesetting industry Lorem Ipsum is simply dummy
            text. Lorem Ipsum is simply dummy text.
          </div>
        </div>

        <div className="pb-5">
          <div className="text-2xl font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting. of
            the printing and typesetting industry Lorem Ipsum is simply dummy
            text. Lorem Ipsum is simply dummy text.
          </div>
        </div>

        <div className="pb-5">
          <div className="text-2xl font-semibold my-5 px-2">
            Lorem ipsum dolor
          </div>
          <div className=" text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting. of
            the printing and typesetting industry Lorem Ipsum is simply dummy
            text. Lorem Ipsum is simply dummy text.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;

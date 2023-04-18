'use client'
import Image from "next/image";
import { useRef } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import Image2 from "../../public/assets/images/Method.png";
import Image1 from "../../public/assets/images/image2.png";
import Dotted from "../../public/assets/images/dotted.png";
import Icon from "../../public/assets/images/save-time.png";
import Posts from "../shared/jsondata/posts.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LearnContent = () => {
    const sliderRef = useRef(null);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "0",
    };
  return (
    <div className="max-w-screen-xl px-3 lg:px-5 mx-auto mt-10 lg:mt-20 overflow-hidden">
      <div className="text-black mx-auto mb-10 lg:mb-20">
        <div className="text-xl lg:text-4xl font-semibold text-center pb-10">
          Lorem Ipsum is simply dummy text <br /> of the printing and typesetting
        </div>
        <div className="lg:w-2/3 flex flex-wrap justify-evenly mx-auto">
          <Zoom triggerOnce>
            <div className="flex-col pb-5">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                1000
              </div>
              <div className="text-center text-sm lg:text-lg">Investors</div>
            </div>
          </Zoom>
          <Zoom triggerOnce>
            <div className="flex-col pb-5">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                1000
              </div>
              <div className="text-center text-sm lg:text-lg">Clients</div>
            </div>
          </Zoom>
          <Zoom triggerOnce>
            <div className="flex-col pb-5">
              <div className="text-indigo-600 text-xl lg:text-4xl font-semibold text-center">
                1000
              </div>
              <div className="text-center text-sm lg:text-lg ">Products</div>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="text-xl lg:text-4xl font-semibold text-center mb-4 lg:mb-10">
        Save time by scheduling posts
      </div>
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-4 gap-5 mb-10">
          {Posts?.map((post) => (
            <Zoom triggerOnce key={post?.id}>
              <div className="bg-white rounded-2xl shadow-lg pb-5 border p-4">
                <div className="text-lg lg:text-xl font-semibold my-5">
                  {post?.title}
                </div>
                <div className="text-sm pb-4">{post?.description}</div>
                <div className="border-t w-11/12 mx-auto pb-4"></div>
                <div className="flex justify-between px-4">
                  <Image src={Icon} alt="img" className="" />
                  <div className="border text-black hover:bg-home-color hover:bg-opacity-10 duration-300 shadow-md tracking-widest text-sm text-center rounded-full py-3 px-4 cursor-pointer">
                    Get Started
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>

      <Slider
        ref={sliderRef}
        {...settings}
        arrows={false}
        className="lg:hidden"
      >
        {Posts?.map((post) => (
          <Zoom triggerOnce key={post?.id}>
            <div className="bg-white rounded-2xl shadow-lg mb-5 border p-4 mx-2">
              <div className="text-lg lg:text-xl my-5">{post?.title}</div>
              <div className="text-sm pb-8">{post?.description}</div>
              <div className="flex justify-between px-4">
                <Image src={Icon} alt="img" className="" />
                <div className="border text-black shadow-md tracking-widest text-sm text-center rounded-full py-3 px-4 cursor-pointer">
                  Get Started
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </Slider>

      <div className="py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Fade direction="left" triggerOnce>
            <div className="w-[21rem] h-[37rem] flex-col shadow-lg p-5 rounded-3xl bg-white mb-14 lg:mb-5 mt-5 relative lg:mr-10">
              <Image src={Dotted} alt="img" className="-ml-10 -mt-9 z-0" />
              <Image
                src={Dotted}
                alt="img"
                className="relative -top-24 left-12 z-0"
              />
              <Image
                src={Image1}
                alt="img"
                className="w-[18rem] absolute ml-1 top-5 pb-5 z-[999]"
              />
              <Image
                src={Image2}
                alt="img"
                className="w-[18rem] absolute ml-1 top-80 z-[999]"
              />
            </div>
          </Fade>
          <div className="lg:w-1/2 my-auto grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0 lg:gap-5">
            <Fade direction="right" triggerOnce>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">01</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                  About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="text-sm pb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s,
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">02</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                  About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="text-sm pb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s,
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">03</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                  About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="text-sm pb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s,
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-5xl font-semibold">04</div>
                <div className="font-semibold text-lg lg:text-xl pb-5">
                  About Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="text-sm pb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s,
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnContent;

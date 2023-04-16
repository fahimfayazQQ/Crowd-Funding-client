"use client";
import Image from "next/image";
import React from "react";
import Img1 from "../../../public/assets/images/blog-detail.png";
import Img2 from "../../../public/assets/images/blog-detail2.png";
import Img3 from "../../../public/assets/images/blog-detail3.png";
import Card1 from "../../../public/assets/images/card1.png";
import Card2 from "../../../public/assets/images/card2.png";
import Gal1 from "../../../public/assets/images/board1.png";
import Gal2 from "../../../public/assets/images/board2.png";
import Gal3 from "../../../public/assets/images/board3.png";
import Gal4 from "../../../public/assets/images/board4.png";
import Gal5 from "../../../public/assets/images/board5.png";
import Avatar1 from "../../../public/assets/images/avatar.png";
import Avatar2 from "../../../public/assets/images/avatar2.png";
import { FB, Insta, Twitter, Mail, Bell } from "../../shared/Icons";
import { Fade, Zoom } from "react-awesome-reveal";

const BlogDetails = () => {
  return (
    <div className="bg-[#fffbf1]">
      
      <div className="flex flex-wrap lg:justify-end items-center pt-20 pl-5 lg:pr-20">
        <Image src={Avatar2} alt="img" className="lg:hidden"/>
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">Find Campaign</div>
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">Dashboard</div>
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">Studio</div>
        <div className="hover:text-home-color cursor-pointer my-2 mx-5">Insight</div>
        <Mail className="hover:text-home-color cursor-pointer my-2 mx-5"/>
        <Bell className="hover:text-home-color cursor-pointer my-2 mx-5"/>
        <Image src={Avatar2} alt="img" className="hidden lg:block"/>
      </div>

      <div className=" max-w-screen-xl px-5 mx-auto pt-10 pb-10 overflow-hidden">
        <Fade direction="right" triggerOnce>
          <div className="text-xl lg:text-3xl font-semibold mb-2">
            Do what you can, with what you have
          </div>
          <div className="flex italic text-xs lg:text-sm">
            <span>January 15, 2023</span> &nbsp; / &nbsp;
            <span>By: Donn John</span>
          </div>
        </Fade>
        <Zoom triggerOnce>
          <Image src={Img1} alt="img" className="w-full my-5" />
        </Zoom>
        <Fade>
          <div className="text-sm lgLtext-base">
            This page is a demo that shows everything you can do inside
            portfolio and blog posts. We&apos;ve included everything you need to
            create engaging posts about your work, and show off your case
            studies in a beautiful way. Obviously, we&apos;ve styled up all the
            basic text formatting options available in markdown. You can create
            lists: Simple bulleted lists Like this one Are cool And: Numbered
            lists Like this other one Are great too You can also add
            blockquotes, which are shown at a larger width to help break up the
            layout and draw attention to key parts of your content. This page is
            a demo that shows everything you can do inside portfolio and blog
            posts. We&apos;ve included everything you need to create engaging
            posts about your work, and show off your case studies in a beautiful
            way. Obviously, we&apos;ve styled up all the basic text formatting
            options available in markdown. You can create lists: Simple bulleted
            lists Like this one Are cool And: Numbered lists Like this other one
            Are great too You can also add blockquotes, which are shown at a
            larger width to help break up the layout and draw attention to key
            parts of your content. <br /> <br />
            This page is a demo that shows everything you can do inside
            portfolio and blog posts. We&apos;ve included everything you need to
            create engaging posts about your work, and show off your case
            studies in a beautiful way. Obviously, we&apos;ve styled up all the
            basic text formatting options available in markdown. You can create
            lists: Simple bulleted lists Like this one Are cool And: Numbered
            lists Like this other one Are great too You can also add
            blockquotes, which are shown at a larger width to help break up the
            layout and draw attention to key parts of your content.
          </div>
        </Fade>

        <div className="text-xl lg:text-2xl font-semibold mt-10 mb-5">Image Gallery</div>
        <div className="grid lg:grid-cols-3 gap-3 mb-10">
          <Fade direction="right" triggerOnce>
            <div className="shadow-lg rounded-2xl">
              <Image src={Card1} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal1} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal2} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal3} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal4} alt="img" className="w-full rounded-2xl" />
            </div>
            <div className="shadow-lg rounded-2xl">
              <Image src={Gal5} alt="img" className="w-full rounded-2xl" />
            </div>
          </Fade>
        </div>

        <div className="text-xl lg:text-2xl font-semibold mt-10 mb-5">Top brands</div>
        <div className="text-sm lg:text-base">
          Here&apos;s another gallery with only one column, which creates a
          carousel slide-show instead. A nice little feature: the carousel only
          advances when it is in view, so your visitors won&apos;t scroll down
          to find it half way through your images.
        </div>
        <Zoom triggerOnce>
          <Image src={Img2} alt="img" className="w-full my-5" />
        </Zoom>
        <div className="text-xl lg:text-2xl font-semibold mt-10 mb-5">
          What about videos?
        </div>
        <div className="text-sm lg:text-base">
          Videos are an awesome way to show off your work in a more engaging and
          personal way, and we&apos;ve made sure they work great on our themes.
          Just paste an embed code from YouTube or Vimeo, and the theme makes
          sure it displays perfectly.
        </div>
        <Zoom triggerOnce>
          <Image src={Img3} alt="img" className="w-full my-5" />
        </Zoom>

        {/* Share & Comments Section */}
        <div className="mx-auto pt-10 lg:pt-20">
          <div className="text-lg font-semibold mb-5">Share</div>
          <div className="flex pb-5">
            <FB className="text-3xl mx-3 cursor-pointer text-blue-700" />
            <Insta className="text-3xl mx-3 cursor-pointer text-pink-600" />
            <Twitter className="text-3xl mx-3 cursor-pointer text-sky-500" />
          </div>
          <div className="text-lg font-semibold my-5">Leave a comment</div>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="3"
            placeholder="What's on your mind..."
            className="w-full border border-b-2 rounded-md outline-none p-2"
          ></textarea>
          <div className="inline-block border bg-white rounded-lg shadow-sm cursor-pointer py-1 px-3">Post</div>


          <div>
            <div className="flex justify-start items-center">
              <Image src={Avatar1} alt="img" className="w-10 h-10 my-5" />
              <span className="text-sm lg:text-base px-5">Sourav Sen</span>
              <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
            </div>
            <div className="text-sm lg:text-base pl-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              arcu dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
              adipiscing elit. Sed at arcu dui. Aenean placerat.
            </div>
            <div className="text-sm text-sky-500 cursor-pointer ml-10">
              Reply
            </div>
          </div>
          <div className="pl-20">
            <div className="flex justify-start items-center">
              <Image src={Avatar2} alt="img" className="w-10 h-10 my-5" />
              <span className="text-sm lg:text-base px-5">Atika Younus</span>
              <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
            </div>
            <div className="text-sm lg:text-base pl-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              arcu dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
              adipiscing elit. Sed at arcu dui. Aenean placerat.
            </div>
            <div className="text-sm text-sky-500 cursor-pointer ml-10">
              Reply
            </div>
          </div>
          <div className="border w-full my-5"></div>
          <div>
            <div className="flex justify-start items-center">
              <Image src={Avatar2} alt="img" className="w-10 h-10 my-5" />
              <span className="text-sm lg:text-base px-5">Atika Younus</span>
              <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
            </div>
            <div className="text-sm lg:text-base pl-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              arcu dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
              adipiscing elit. Sed at arcu dui. Aenean placerat.
            </div>
            <div className="text-sm text-sky-500 cursor-pointer ml-10">
              Reply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

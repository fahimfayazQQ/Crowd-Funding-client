import Image from "next/image";
import React from "react";
import Img1 from "../../../public/assets/images/overview.png";
import Card1 from "../../../public/assets/images/card1.png";
import Card2 from "../../../public/assets/images/card2.png";
import Image3 from "../../../public/assets/images/avatar.png";
import { FB, Insta, Twitter } from "../../shared/Icons";

const BlogDetails = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto py-20">
      <div className="text-3xl font-semibold mb-2">
        Do what you can, with what you have
      </div>
      <div className="flex italic text-sm">
        <span>January 15, 2023</span> &nbsp; / &nbsp;
        <span>By: Donn John</span>
      </div>
      <Image src={Img1} alt="img" className="w-full my-5" />
      <div>
        This page is a demo that shows everything you can do inside portfolio
        and blog posts. We’ve included everything you need to create engaging
        posts about your work, and show off your case studies in a beautiful
        way. Obviously, we’ve styled up all the basic text formatting options
        available in markdown. You can create lists: Simple bulleted lists Like
        this one Are cool And: Numbered lists Like this other one Are great too
        You can also add blockquotes, which are shown at a larger width to help
        break up the layout and draw attention to key parts of your content.
        This page is a demo that shows everything you can do inside portfolio
        and blog posts. We’ve included everything you need to create engaging
        posts about your work, and show off your case studies in a beautiful
        way. Obviously, we’ve styled up all the basic text formatting options
        available in markdown. You can create lists: Simple bulleted lists Like
        this one Are cool And: Numbered lists Like this other one Are great too
        You can also add blockquotes, which are shown at a larger width to help
        break up the layout and draw attention to key parts of your content.{" "}
        <br /> <br />
        This page is a demo that shows everything you can do inside portfolio
        and blog posts. We’ve included everything you need to create engaging
        posts about your work, and show off your case studies in a beautiful
        way. Obviously, we’ve styled up all the basic text formatting options
        available in markdown. You can create lists: Simple bulleted lists Like
        this one Are cool And: Numbered lists Like this other one Are great too
        You can also add blockquotes, which are shown at a larger width to help
        break up the layout and draw attention to key parts of your content.
      </div>

      <div className="text-2xl font-semibold mt-10 mb-5">Image Gallery</div>
      <div className="grid lg:grid-cols-4 gap-3 mb-10">
        <div className="shadow-lg rounded-2xl">
          <Image src={Card1} alt="img" className="rounded-2xl" />
        </div>

        <div className="shadow-lg rounded-2xl">
          <Image src={Card2} alt="img" className="rounded-2xl" />
        </div>

        <div className="shadow-lg rounded-2xl">
          <Image src={Card1} alt="img" className="rounded-2xl" />
        </div>

        <div className="shadow-lg rounded-2xl">
          <Image src={Card2} alt="img" className="rounded-2xl" />
        </div>

        <div className="shadow-lg rounded-2xl">
          <Image src={Card2} alt="img" className="rounded-2xl" />
        </div>

        <div className="shadow-lg rounded-2xl">
          <Image src={Card1} alt="img" className="rounded-2xl" />
        </div>

        <div className="shadow-lg rounded-2xl">
          <Image src={Card2} alt="img" className="rounded-2xl" />
        </div>

        <div className="shadow-lg rounded-2xl">
          <Image src={Card1} alt="img" className="rounded-2xl" />
        </div>
      </div>

      <div className="text-2xl font-semibold mt-10 mb-5">Top brands</div>
      <div>
        Here’s another gallery with only one column, which creates a carousel
        slide-show instead. A nice little feature: the carousel only advances
        when it is in view, so your visitors won’t scroll down to find it half
        way through your images.
      </div>
      <Image src={Img1} alt="img" className="w-full my-5" />

      {/* Share & Comments Section */}
      <div className="mx-auto pt-20">
        <div className="text-lg font-semibold my-5">Share</div>
        <div className="flex pb-5">
          <FB className="text-3xl mx-3 cursor-pointer" />
          <Insta className="text-3xl mx-3 cursor-pointer" />
          <Twitter className="text-3xl mx-3 cursor-pointer" />
        </div>
        <div className="text-lg font-semibold my-5">Leave a comment</div>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          placeholder="What's on your mind..."
          className="w-full border border-b-2 shadow-lg rounded-md outline-none p-2"
        ></textarea>

        <div>
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="img" className="w-10 h-10 my-5" />
            <span className="px-5">Sourav Sen</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.
          </div>
          <div className="text-sm cursor-pointer ml-10">Reply</div>
        </div>
        <div className="pl-20">
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="img" className="w-10 h-10 my-5" />
            <span className="px-5">Atika Younus</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.
          </div>
          <div className="text-sm cursor-pointer ml-10">Reply</div>
        </div>
        <div>
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="img" className="w-10 h-10 my-5" />
            <span className="px-5">Sourav Sen</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.
          </div>
          <div className="text-sm cursor-pointer ml-10">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

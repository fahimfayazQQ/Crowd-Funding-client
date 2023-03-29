import Image from "next/image";
import React from "react";
import "./blogStyle.css";
import Blog1 from "../../../public/assets/images/blog1.png";
import Blog2 from "../../../public/assets/images/blog2.png";

const BlogGallery = () => {
  return (
    <div className="w-9/12 mx-auto my-20">
      <div className="w-full bg-home-color rounded-2xl p-16 blog_shine">
        <div className="text-white text-4xl font-semibold pb-5">
          Latest News
        </div>
        <div className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-20">
        <div className="w-[calc(50%-20px)] pb-10">
          <Image src={Blog1} alt="" className="w-full" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div>
        </div>

        <div className="w-[calc(50%-20px)] pb-5">
          <Image src={Blog2} alt="" className="w-full" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div>
        </div>

        <div className="w-[calc(50%-20px)] pb-5">
          <Image src={Blog1} alt="" className="w-full" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div>
        </div>

        <div className="w-[calc(50%-20px)] pb-5">
          <Image src={Blog2} alt="" className="w-full" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;

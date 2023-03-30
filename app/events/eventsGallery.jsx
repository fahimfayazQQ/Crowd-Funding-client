import React from "react";
import Image from "next/image";
import Blog1 from "../../public/assets/images/blog1.png";
import Blog2 from "../../public/assets/images/event2.png";

const EventsGallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="flex flex-wrap justify-between mt-20">
        <div className="w-[calc(50%-20px)] pb-10 cursor-pointer">
          <Image src={Blog1} alt="" className="w-[660px] h-[480px]" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          {/* <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div> */}
        </div>

        <div className="w-[calc(50%-20px)] pb-10 cursor-pointer">
          <Image src={Blog2} alt="" className="w-[660px] h-[480px]" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          {/* <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div> */}
        </div>

        <div className="w-[calc(50%-20px)] pb-10 cursor-pointer">
          <Image src={Blog1} alt="" className="w-[660px] h-[480px]" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          {/* <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div> */}
        </div>

        <div className="w-[calc(50%-20px)] pb-10 cursor-pointer">
          <Image src={Blog2} alt="" className="w-[660px] h-[480px]" />
          <div className="text-zinc-500 my-5">16th December, 2023</div>
          <div className="border w-10/12 mx-auto mb-5"></div>
          <div className="text-xl mb-5 px-2">
            Detailed insights for your social media
          </div>
          <div className="text-sm px-2">
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </div>
          {/* <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            View More
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;

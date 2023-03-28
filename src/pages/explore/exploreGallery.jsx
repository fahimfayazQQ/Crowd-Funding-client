import Image from "next/image";
import React from "react";
import Card1 from "../../../public/assets/images/card1.png"
import Card2 from "../../../public/assets/images/card2.png"

const ExploreGallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">Trending Items</div>
        <div className="flex items-center">
          <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4 mr-3">
            {"<"}
          </div>
          <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4">
            {">"}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-3 mb-10">

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card1} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card2} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card1} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card2} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card2} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card1} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card2} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card1} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-8 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Learn More
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreGallery;

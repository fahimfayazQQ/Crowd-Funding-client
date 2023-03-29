import React from 'react'
import "./storyStyle.css"
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";

const StoriesGallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="w-full bg-home-color rounded-2xl p-16 story_shine">
        <div className="text-white text-4xl font-semibold pb-5">
          Success Stories
        </div>
        <div className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-3 my-20">
        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>          
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card2} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card2} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card2} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card2} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-8 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesGallery
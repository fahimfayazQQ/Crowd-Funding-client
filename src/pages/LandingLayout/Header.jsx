import Image from 'next/image';
import React from 'react'
import Bottle from "../../../public/assets/images/Placeholder.png"
import Image1 from "../../../public/assets/images/header.png"

const Header = () => {
  return (
    <div className="bg-home-color h-screen p-20">
      <div className="border h-full rounded-2xl p-10 max-w-screen-xl mx-auto">
        <div className="w-full h-full flex justify-between">
          <div className="w-full h-full bg-gradient-to-tl from-[#5143F6] via-indigo-500 to-[#5143F6] rounded-tl-2xl rounded-bl-2xl text-white py-8 pl-8 pr-20">
            <div className="text-5xl font-semibold mb-5 mt-10">
              Bring A Creative Project To Life.
            </div>
            <div className="mb-10">
              Below, we answer the questions people most often have about
              crowdfunding when they’re trying to decide if they want to start
              an online fundraiser.
            </div>
            <div className="w-3/12 bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4">
              EXPLORE
            </div>
          </div>
          <div className="w-full relative">
            <Image src={Bottle} alt="" className="w-full h-full" />
            <Image
              src={Image1}
              alt=""
              className="w-full absolute bottom-0 -left-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
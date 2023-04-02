import Image from 'next/image'
import React from 'react'
import Bottle from "../../public/assets/images/Placeholder.png"
import Link from 'next/link'

const LearnHeader = () => {
  return (
    <div className="rounded-2xl max-w-screen-xl mx-auto py-20">
      <div className="w-full h-[85vh] flex justify-between">
        <div className="w-full h-full bg-gradient-to-tl from-[#5143F6] via-indigo-500 to-[#5143F6] rounded-tl-2xl rounded-bl-2xl text-white py-8 pl-8 pr-20">
          <div className="text-5xl font-semibold mb-5 mt-10">
            Bring A Creative Project To Life.
          </div>
          <div className="mb-10">
            Below, we answer the questions people most often have about
            crowdfunding when they’re trying to decide if they want to start an
            online fundraiser.
          </div>
          <Link href={"./learn/gallery"}>
            <div className="w-3/12 bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              EXPLORE
            </div>
          </Link>
        </div>
        <div className="w-full relative">
          <Image src={Bottle} alt="img" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default LearnHeader

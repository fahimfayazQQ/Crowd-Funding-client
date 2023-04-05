import Image from 'next/image'
import React from 'react'
import Bottle from "../../public/assets/images/Placeholder.png"
import Link from 'next/link'

const LearnHeader = () => {
  return (
    <div className="rounded-2xl max-w-screen-xl px-3 lg:px-5 mx-auto pt-20">
      <div className="w-full lg:h-[85vh] flex flex-col-reverse lg:flex-row justify-between">
        <div className="w-full bg-gradient-to-tl from-[#5143F6] via-indigo-500 to-[#5143F6] rounded-bl-2xl lg:rounded-tl-2xl rounded-br-2xl lg:rounded-br-none text-white py-8 pl-4 pr-4 lg:pl-8 lg:pr-20">
          <div className="text-2xl lg:text-5xltext-5xl font-semibold mb-5 lg:mt-10">
            Bring A Creative Project To Life.
          </div>
          <div className="mb-10">
            Below, we answer the questions people most often have about
            crowdfunding when they’re trying to decide if they want to start an
            online fundraiser.
          </div>
          <Link href={"./learn/gallery"}>
            <div className="inline-block bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              EXPLORE
            </div>
          </Link>
        </div>
        <div className="w-full relative">
          <Image
            src={Bottle}
            alt="img"
            className="w-full h-full rounded-tl-2xl rounded-tr-2xl lg:rounded-br-2xl lg:rounded-tl-none bg-black"
          />
        </div>
      </div>
    </div>
  );
}

export default LearnHeader

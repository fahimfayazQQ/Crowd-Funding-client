import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/avatar.png";

const Discussion = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 p-5 rounded-xl shadow-md bg-white">
      <div className="lg:w-[80%] mx-auto">
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
          <div className="text-sm text-sky-500 pl-10 cursor-pointer">Reply</div>
        </div>
        <div className="pl-10 lg:pl-20">
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
          <div className="text-sm text-sky-500 pl-10 cursor-pointer">Reply</div>
        </div>
        <div className="border w-full my-5"></div>
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
          <div className="text-sm text-sky-500 pl-10 cursor-pointer">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;

import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/avatar.png";

const Discussion = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20 p-10 rounded-xl shadow-lg">
      <div className="w-[80%] mx-auto">
        <div>
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="" className="w-10 h-10 my-5" />
            <span className="px-5">Sourav Sen</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.
          </div>
          <div className="text-sm cursor-pointer">Reply</div>
        </div>
        <div className="pl-20">
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="" className="w-10 h-10 my-5" />
            <span className="px-5">Atika Younus</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.
          </div>
          <div className="text-sm cursor-pointer">Reply</div>
        </div>
        <div className="border w-full my-5"></div>
        <div>
          <div className="flex justify-start items-center">
            <Image src={Image3} alt="" className="w-10 h-10 my-5" />
            <span className="px-5">Sourav Sen</span>
            <span className="text-xs text-zinc-400">Oct 22, 8:45pm</span>
          </div>
          <div className="pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Aenean placerat.Lorem ipsumdolor sit amet, consectetur
            adipiscing elit. Sed at arcu dui. Aenean placerat.
          </div>
          <div className="text-sm cursor-pointer">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;

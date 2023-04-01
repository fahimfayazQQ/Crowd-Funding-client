'use client'
import React, {useState} from "react";
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Products from "../shared/jsondata/products.json";
import { Heart } from "../shared/Icons";

const WishProject = () => {
  const [isFavourite, setIsFavourite] = useState(false)
  return (
    <div className="h-full overflow-y-scroll">
      <div className="w-9/12 h-auto mx-auto p-20">
        <div className="grid lg:grid-cols-3 gap-3 ">
          {Products?.map((prod, i) => (
            <div key={i} className="relative rounded-2xl shadow-lg pb-5 border">
              <div onClick={()=>{setIsFavourite(!isFavourite)}} className="w-10 h-10 rounded-full bg-white absolute top-5 right-5 flex justify-center items-center"><Heart className={`${isFavourite? "text-[#F40B5F]":"text-gray-200"}`}/></div>
              <Image src={Card1} alt="" className="" />
              <div className="px-3">
                <div className="text-xl my-5">{prod?.title}</div>
                <div className="text-sm pb-3">{prod?.description}</div>
                <div className="text-sm pb-3">
                  <span className="text-zinc-400 pr-2">Raised:</span>
                  {prod?.raised}
                </div>
              </div>
              <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                Learn More
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishProject;

import React from "react";
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Products from "../shared/jsondata/products.json";

const WishProject = () => {
  return (
    <div className="h-full overflow-y-scroll">
        <div className="w-9/12 h-auto mx-auto p-20">
        <div className="grid lg:grid-cols-3 gap-3 ">
            {Products?.map((prod)=>
                <div className="rounded-2xl shadow-lg pb-5 border">
                <Image src={Card1} alt="" className="" />
                <div className="px-3">
                    <div className="text-xl my-5">{prod?.title}</div>
                    <div className="text-sm pb-3">{prod?.description}</div>
                    <div className="text-sm pb-3">
                    <span className="text-zinc-400 pr-2">Raised:</span>{prod?.raised}
                    </div>
                </div>
                <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
                    Learn More
                </div>
                </div>
            )}
        </div>
        </div>
    </div>
  );
};

export default WishProject;

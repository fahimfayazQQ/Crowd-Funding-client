'use client'
import React, {useState} from "react";
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Products from "../shared/jsondata/products.json";
import { Heart } from "../shared/Icons";
import { Fade } from "react-awesome-reveal";

const WishProject = () => {
  const [isFavourite, setIsFavourite] = useState([])

  const handleIsFavourite = (id) => {
    console.log(id);
    if(isFavourite?.includes(id)){
      setIsFavourite(isFavourite?.filter((wtf) => wtf !== id));
    }else{
      setIsFavourite([...isFavourite, id])
    }
  }

/*       const handleSelectedCatagory = (id) => {
        if (selectedCat?.includes(id)) {
          setSelectedCat(selectedCat.filter((i) => i !== id));
        } else {
          setSelectedCat([...selectedCat, id]);
        }
      }; */
  console.log(isFavourite);
  return (
    <div className="h-[100vh] overflow-y-auto">
      <div className="2xl:w-9/12 h-auto mx-auto p-5 lg:p-20">
        <div className="grid lg:grid-cols-3 gap-5">
          {Products?.map((prod) => (
            <Fade triggerOnce key={prod?.id}>
              <div className="bg-white relative rounded-2xl shadow-lg pb-5 border">
                <div onClick={()=>{handleIsFavourite(prod?.id);}} className="w-10 h-10 rounded-full bg-white absolute top-5 right-5 flex justify-center items-center"><Heart className={`${isFavourite?.includes(prod?.id)? "text-[#F40B5F]":"text-gray-200"}`}/></div>
                <Image src={Card1} alt="img" className="w-full" />
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
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishProject;

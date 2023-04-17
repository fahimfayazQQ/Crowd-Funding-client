'use client'
import React, {useState} from "react";
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Products from "../shared/jsondata/products.json";
import { Heart, Profit, Loss } from "../shared/Icons";
import { Fade } from "react-awesome-reveal";

const InvestList = () => {
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
    <div className="lg:h-[100vh] overflow-y-auto pb-10">
      <div className="2xl:w-9/12 h-auto mx-auto p-5 lg:p-20">
        <div className="grid lg:grid-cols-3 gap-5">
          {Products?.map((prod) => (
            <Fade triggerOnce key={prod?.id}>
              <div className="relative hover:bg-white rounded-2xl hover:shadow-lg duration-500 pb-5 border hover:border-home-color">
                <div
                  onClick={() => {
                    handleIsFavourite(prod?.id);
                  }}
                  className="absolute bottom-5 right-5 flex justify-center items-center"
                >
                  {prod?.profit === 1 ? (
                    <Profit className="text-4xl" />
                  ) : (
                    <Loss className="text-4xl" />
                  )}
                </div>
                <Image src={Card1} alt="img" className="w-full" />
                <div className="px-3">
                  <div className="text-xl my-5">{prod?.title}</div>
                  <div className="text-sm">total investment: $ 8000</div>
                  <div className="text-sm">Profit: $ 5000</div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestList;

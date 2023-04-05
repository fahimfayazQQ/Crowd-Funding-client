'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Card1 from "../../public/assets/images/card1.png";
import Card2 from "../../public/assets/images/card2.png";
import Products from "../shared/jsondata/products.json";

const Reccomendation = () => {
    const [selectedCat, setSelectedCat] = useState([])

    const handleSelectedCatagory = (id) => {
        if (selectedCat?.includes(id)) {
            setSelectedCat(selectedCat.filter(i => i !== id));
        } else {
            setSelectedCat([...selectedCat, id]);
        }
    }
    console.log(selectedCat);
  return (
    <div className="h-full overflow-y-scroll">
      <div className="lg:w-9/12 h-auto mx-auto p-5 lg:p-20">
        <div className="text-2xl">Recommendations</div>

        <div className="bg-white border shadow-lg rounded-2xl p-4 lg:p-10 my-5">
          <div className="text-lg">category</div>
          <div className="w-10/12 mx-auto grid grid-cols-2 my-10 gap-5 text-xs lg:text-base">
            <div
              onClick={() => {
                handleSelectedCatagory(1);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(1) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md shadow-md mr-2`}
              ></div>
              Edtech
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(2);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(2) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Fintech
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(3);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(3) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Logistics
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(4);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(4) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              E-Commerce and Retail
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(5);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(5) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Gaming
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(6);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(6) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Climate and Energy
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(7);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(7) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Consumer Service
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(8);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(8) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Halthcare
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(9);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(9) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Food & Agro
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(10);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(10) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Mobility
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(11);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(11) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Software and Technology
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(12);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(12) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Sports and Entertainment
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(13);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(13) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Circular Economy
            </div>
            <div
              onClick={() => {
                handleSelectedCatagory(14);
              }}
              className="flex items-center"
            >
              <div
                className={`${
                  selectedCat.includes(14) && "bg-home-color border-none"
                } w-6 h-6 border rounded-md  shadow-md mr-2`}
              ></div>
              Others
            </div>
          </div>
          <div className="w-[5rem] bg-home-color rounded-md text-white text-center px-2 py-2">
            OK
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {Products?.map((prod, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg pb-5 border">
              <Image src={Card1} alt="img" className="" />
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
}

export default Reccomendation

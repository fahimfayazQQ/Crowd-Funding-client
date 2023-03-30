import Image from "next/image";
import React from "react";
import Card1 from "../../../public/assets/images/card1.png"
import Card2 from "../../../public/assets/images/card2.png"

const Reward = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20 p-10 rounded-xl shadow-lg">
      <div className="text-2xl text-cneter">Rewards</div>
      <div className="mb-5">
        This handout will help you understand how paragraphs are formed, how to
        develop stronger paragraphs, and how to completely and clearly express
        your ideas. What is a paragraph?
      </div>

      <div className="grid lg:grid-cols-4 gap-3 mb-10">

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card1} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-5 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="text-2xl px-2 pb-5">5000 tk</div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Select
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card2} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-5 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="text-2xl px-2 pb-5">5000 tk</div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Select
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card1} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-5 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="text-2xl px-2 pb-5">5000 tk</div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Select
            </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
            <Image src={Card2} alt="" className=""/>
            <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
            <div className="text-sm pb-5 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
            <div className="text-2xl px-2 pb-5">5000 tk</div>
            <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              Select
            </div>
        </div>

      </div>
    </div>
  )
}

export default Reward;

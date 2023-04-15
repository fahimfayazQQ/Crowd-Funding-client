import Image from "next/image";
import React from "react";
import Card1 from "../../../public/assets/images/card1.png"
import Card2 from "../../../public/assets/images/card2.png"

const Reward = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="text-lg lg:text-2xl">Rewards</div>
      <div className="mb-5 text-sm lg:text-base">
        This handout will help you understand how paragraphs are formed, how to
        develop stronger paragraphs, and how to completely and clearly express
        your ideas. What is a paragraph?
      </div>

      <div className="grid lg:grid-cols-3 gap-3 mb-10">
        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="img" className="w-full" />
          <div className="text-lg lg:text-xl my-5 px-2">Startup Start</div>
          <div className="text-sm pb-5 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="text-lg lg:text-2xl px-2 pb-5">5000 tk</div>
          <div className="inline-block border border-black text-black tracking-widest text-sm text-center rounded-md py-3 ml-4 px-4 cursor-pointer">
            Select
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card2} alt="img" className="w-full" />
          <div className="text-lg lg:text-xl my-5 px-2">Office Place Choice</div>
          <div className="text-sm pb-5 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="text-lg lg:text-2xl px-2 pb-5">5000 tk</div>
          <div className="inline-block border border-black text-black tracking-widest text-sm text-center rounded-md py-3 ml-4 px-4 cursor-pointer">
            Select
          </div>
        </div>

        <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card1} alt="img" className="w-full" />
          <div className="text-lg lg:text-xl my-5 px-2">Make Nice Meeting</div>
          <div className="text-sm pb-5 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="text-lg lg:text-2xl px-2 pb-5">5000 tk</div>
          <div className="inline-block border border-black text-black tracking-widest text-sm text-center rounded-md py-3 ml-4 px-4 cursor-pointer">
            Select
          </div>
        </div>

        {/* <div className="rounded-2xl shadow-lg pb-5 border">
          <Image src={Card2} alt="img" className="" />
          <div className="text-xl my-5 px-2">Lorem ipsum dolor</div>
          <div className="text-sm pb-5 px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="text-2xl px-2 pb-5">5000 tk</div>
          <div className="w-9/12 bg-home-color mx-auto text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
            Select
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Reward;

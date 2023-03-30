'use client'
import React, { useState } from "react";
import { Radio } from "antd";

const Rewards = () => {
    const [value, setValue] = useState(1);
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Rewards</div>
        <div className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </div>
        <div className="font-semibold pb-5">
          *All fields required unless noted.
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="w-1/2 shadow-lg py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Title"
          />
          <input
            type="text"
            className="w-1/2 shadow-lg py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Description"
          />
          <input
            type="text"
            className="w-1/2 shadow-lg py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Amount (bdt)"
          />
        </div>
      </div>

      <div className="w-[15rem] bg-white rounded-full shadow-lg text-home-color text-center my-5 py-2 px-3">
        Create new Reward +
      </div>
      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="pb-5">*Delivery starting</div>
        <div className="flex gap-2">
          <input
            type="text"
            className="shadow-lg py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="day"
          />
          <input
            type="text"
            className="shadow-lg py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="month"
          />
          <input
            type="text"
            className="shadow-lg py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="year"
          />
        </div>

        <div className="pb-5">*Delivery nature</div>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>Unlimited</Radio>
          <Radio value={2}>Limited</Radio>
        </Radio.Group>
      </div>

      <div className="w-[20rem] mx-auto bg-home-color text-white px-4 py-3 text-center my-10 rounded-md cursor-pointer">
        Save & Continue
      </div>
    </div>
  );
};

export default Rewards;

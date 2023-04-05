import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Frequently Asked Questions</div>
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
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Question"
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Answer"
          />
        </div>
        <div className="text-xl text-home-color">Create New FAQ +</div>
      </div>

      <div className="w-[20rem] mx-auto bg-home-color text-white px-4 py-3 text-center my-10 rounded-md cursor-pointer">
        Save & Continue
      </div>
    </div>
  );
};

export default Faq;

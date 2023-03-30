import React from "react";

const Update = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Post Update</div>
        <div className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </div>
        <div className="font-semibold pb-5">
          *All fields required unless noted.
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-full shadow-lg py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
        ></textarea>
      </div>

      <div className="w-[20rem] mx-auto bg-home-color text-white px-4 py-3 text-center my-10 rounded-md cursor-pointer">
        Save & Continue
      </div>
    </div>
  );
};

export default Update;

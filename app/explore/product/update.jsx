import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/update.png";

const Update = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-10 p-10 rounded-xl shadow-md bg-white mb-5">
      <div className="w-11/12 lg:w-1/2 mx-auto p-4 shadow-lg">
        <Image src={Image3} alt="img" className="w-full rounded-lg my-5" />
        <div className="text-sm lg:text-base">13.04.23</div>
        <div className="text-lg lg:text-2xl my-2">Happy New Year</div>
        <div className="text-sm lg:text-base">
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph.
        </div>
      </div>
    </div>
  );
};

export default Update;

import Image from "next/image";
import React from "react";
import Image3 from "../../../public/assets/images/overview.png";

const Update = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto my-10 p-10 rounded-xl shadow-md bg-white">
      <div className="w-1/2 mx-auto p-4 shadow-lg">
        <Image src={Image3} alt="img" className="w-full rounded-lg my-5" />
        <div>13.04.23</div>
        <div className="text-2xl my-2">Happy New Year</div>
        <div>
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

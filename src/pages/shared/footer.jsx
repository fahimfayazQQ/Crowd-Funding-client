import React from 'react'
import { FB, Insta, Twitter } from "./Icons"

const Footer = () => {
  return (
    <div className="max-w-screen-xl pt-20 mx-auto">
      <div className="w-full flex justify-between items-center ">
        <div className="text-3xl font-semibold">QUADQUE</div>
        <div className="font-semibold rounded-full shadow-md px-6 py-3">
          Create Campaign
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-10">
        <ul className="text-zinc-600">
          <li className="mb-4 cursor-pointer">Home</li>
          <li className="mb-4 cursor-pointer">About</li>
          <li className="mb-4 cursor-pointer">Contact</li>
          <li className="mb-4 cursor-pointer">Blogs</li>
          <li className="mb-4 cursor-pointer">Case Studies</li>
        </ul>

        <ul className="text-zinc-600">
          <li className="mb-4 cursor-pointer">Home</li>
          <li className="mb-4 cursor-pointer">About</li>
          <li className="mb-4 cursor-pointer">Contact</li>
          <li className="mb-4 cursor-pointer">Blogs</li>
          <li className="mb-4 cursor-pointer">Case Studies</li>
        </ul>

        <ul className="text-zinc-600">
          <li className="mb-4 cursor-pointer">Guide</li>
          <li className="mb-4 cursor-pointer">password Protection</li>
          <li className="mb-4 cursor-pointer">Licences</li>
          <li className="mb-4 cursor-pointer">Changelog</li>
        </ul>

        <div className="w-1/4 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-3xl shadow-lg p-5">
          <div className="text-white text-center pb-5">
            Paragraphs are the building blocks of papers
          </div>
          <div className="text-white text-center text-3xl pb-3">
            Startup <span>$25</span>
          </div>
          <div className="bg-[#5143F6] rounded-lg shadow-md text-white text-center px-5 py-2">
            {" "}
            Get Plan
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-10 mb-5">
        <div className="text-xs font-semibold">
          Copyright © 2023 QUADQUE Technology LTD
        </div>
        <div className="flex">
          <FB className="text-3xl mx-3 cursor-pointer" />
          <Insta className="text-3xl mx-3 cursor-pointer" />
          <Twitter className="text-3xl mx-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer
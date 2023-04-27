'use client'
import React from 'react'
import { Fade } from "react-awesome-reveal";

const Accolades = () => {
  return (
    <div className="max-w-[1280px] text-black mx-auto py-8 lg:py-36 overflow-x-hidden">
      <div className="text-2xl lg:text-5xl text-center font-semibold px-4 pb-10 lg:pb-20">
        Businesses all over the world <br /> trust us to build their brand
      </div>
      <div className="w-11/12 lg:w-2/3 flex flex-col lg:flex-row justify-evenly mx-auto">
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center pb-3">
              1000
            </div>
            <div className="text-xl text-center">Investors</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center pb-3">
              2450
            </div>
            <div className="text-xl text-center">Monthly Blog Readers</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center pb-3">
              50000+
            </div>
            <div className="text-xl text-center">Social Followers</div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Accolades
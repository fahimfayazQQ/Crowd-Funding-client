'use client'
import React from 'react'
import { Fade } from "react-awesome-reveal";

const Accolades = () => {
  return (
    <div className="text-black mx-auto py-14 lg:py-20">
      <div className="text-xl lg:text-4xl text-center px-4 pb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </div>
      <div className="w-11/12 lg:w-2/3 flex flex-wrap justify-evenly mx-auto">
        <Fade>
          <div className="flex-col">
            <div className="text-indigo-600 text-2xl lg:text-4xl font-semibold text-center">
              1000
            </div>
            <div className="text-sm lg:text-base text-center">Investors</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col">
            <div className="text-indigo-600 text-2xl lg:text-4xl font-semibold text-center">
              2450
            </div>
            <div className="text-sm lg:text-base text-center">Donors</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col">
            <div className="text-indigo-600 text-2xl lg:text-4xl font-semibold text-center">
              50000+
            </div>
            <div className="text-sm lg:text-base text-center">Products</div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Accolades
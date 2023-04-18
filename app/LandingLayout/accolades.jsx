'use client'
import React from 'react'
import { Fade } from "react-awesome-reveal";

const Accolades = () => {
  return (
    <div className="text-black mx-auto py-14 lg:py-20">
      <div className="text-2xl lg:text-5xl text-center font-semibold px-4 pb-10 lg:pb-20">
        Businesses all over the world <br /> trust us to build their brand
      </div>
      <div className="w-11/12 lg:w-2/3 flex flex-col lg:flex-row justify-evenly mx-auto">
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center">
              1000
            </div>
            <div className="text-xl text-center">Investors</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center">
              2450
            </div>
            <div className="text-xl text-center">Donors</div>
          </div>
        </Fade>
        <Fade>
          <div className="flex-col pb-5 lg:pb-0">
            <div className="text-indigo-600 text-5xl font-semibold text-center">
              50000+
            </div>
            <div className="text-xl text-center">Products</div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Accolades
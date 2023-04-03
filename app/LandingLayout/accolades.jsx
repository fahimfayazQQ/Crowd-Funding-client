'use client'
import React from 'react'

const Accolades = () => {
  return (
    <div className="text-black mx-auto py-14 lg:py-20">
      <div className="text-2xl lg:text-4xl text-center pb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </div>
      <div className="w-11/12 lg:w-2/3 flex flex-wrap justify-evenly mx-auto">
        <div className="flex-col">
          <div className="text-indigo-600 text-2xl lg:text-4xl font-semibold text-center">
            1000
          </div>
          <div className="text-center">Investors</div>
        </div>
        <div className="flex-col">
          <div className="text-indigo-600 text-2xl lg:text-4xl font-semibold text-center">
            2450
          </div>
          <div className="text-center">Donors</div>
        </div>
        <div className="flex-col">
          <div className="text-indigo-600 text-2xl lg:text-4xl font-semibold text-center">
            50000+
          </div>
          <div className="text-center">Products</div>
        </div>
      </div>
    </div>
  );
}

export default Accolades
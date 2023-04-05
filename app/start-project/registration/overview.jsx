import React from 'react'

const Overview = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Project title</div>
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
            placeholder="Project title"
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Subtitle"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Project Category</div>
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
            placeholder="Primary category"
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Subcategory"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Project Location</div>
        <div className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </div>
        <div className="font-semibold pb-5">
          *All fields required unless noted.
        </div>
        <input
          type="text"
          className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
          placeholder="Location"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Project Image & Video</div>
        <div className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </div>
        <div className="font-semibold pb-5">
          *All fields required unless noted.
        </div>
        <input
          type="text"
          className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
          placeholder="Location"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Project Goal</div>
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
            placeholder="Currency"
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Amount"
          />
          <input
            type="text"
            className="lg:w-1/2 shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="Share price"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Campaign Duration</div>
        <div className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </div>
        <div className="font-semibold pb-5">
          *All fields required unless noted.
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="text"
            className="shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="day"
          />
          <input
            type="text"
            className="shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="month"
          />
          <input
            type="text"
            className="shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
            placeholder="year"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-10 my-5">
        <div className="text-xl pb-5">Campaign Story</div>
        <div className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </div>
        <div className="font-semibold pb-5">
          *All fields required unless noted.
        </div>
          <textarea name="" id="" cols="30" rows="10"
            className="w-full shadow-lg py-2 lg:py-4 px-2 rounded-lg outline-none mb-4 border border-gray-300"
          ></textarea>
      </div>

      <div className='w-[20rem] mx-auto bg-home-color text-white px-4 py-3 text-center mt-10 rounded-md cursor-pointer'>Save & Continue</div>
    </div>
  );
}

export default Overview
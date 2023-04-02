import React from "react";

const UserSettings = () => {
  return (
    <div className="w-11/12 h-full mx-auto text-white p-20">
      <div className="flex justify-between">
        <div>
          <div className="text-lg font-bold pb-5">Email Address</div>
          <div className="text-sm italic">
            Your email address is{" "}
            <span className="font-semibold">Atmaram31@gmail.com</span>
          </div>
        </div>
        <a href="" className="text-sm underline text-sky-600">
          change
        </a>
      </div>
      <div className="w-full border my-10"></div>
      <div className="flex justify-between relative">
        <div className="w-1/2">
          <div className="text-lg font-bold pb-5">Password</div>
          <div className="pb-5">
            <span className="text-sm"> Enter current password</span>
            <input
              type="password"
              className="w-full border rounded-md shadow-md py-2 px-2 outline-none"
            />
          </div>
          <div>
            <span className="text-sm"> Enter new password</span>
            <input
              type="password"
              className="w-full border rounded-md shadow-md py-2 px-2 outline-none"
            />
          </div>
          <div className="text-sm my-5">Cannot remember your password?<span className="underline text-sky-600 px-2 cursor-pointer">Reset your password</span></div>
          <div className="w-[5rem] bg-home-color text-white text-center rounded-md px-4 py-2 my-5">Save</div>
        </div>
        <a href="" className="text-sm underline text-sky-600">
          change
        </a>
      </div>
    </div>
  );
};

export default UserSettings;
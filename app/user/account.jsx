import Image from "next/image";
import React from "react";
import Accounce from "../../public/assets/images/accounce.png";

const Account = () => {
  return (
    <div className="w-11/12 h-[83vh] flex justify-center items-center mx-auto my-20 bg-admin-secondary-color bg-opacity-60 rounded-2xl text-white">
      <div className="">
        <Image src={Accounce} alt="img" />
        <div className="text-3xl font-semibold my-4">
          connect premium ams software
        </div>
        <div className="w-[10rem] mx-auto text-center bg-white text-black py-2 px-5 rounded-md">
          Download
        </div>
      </div>
    </div>
  );
};

export default Account;

import React from "react";
import "./searchStyle.css";

const CustomSearch = ({ search, handleSearch }) => {
  return (
    <div className="z-50 absolute top-15 right-5 sm:static">
      <div
        className={`${
          search ? "bg-white rounded-full shadow-lg" : ""
        } flex items-center delay-300`}
      >
        <input
          type="text"
          placeholder="Search..."
          className={`${
            search
              ? "w-full text-black rounded-tl-full rounded-bl-full bg-white shadow-sm px-3 py-1"
              : "w-0"
          } cus-transition-all duration-700`}
        />
        <div
          onClick={() => {
            handleSearch(false);
          }}
          className={`${
            search
              ? "w-8 rounded-tr-full rounded-br-full cursor-pointer px-2 text-black"
              : "invisible duration-300"
          } text-sm cus-transition-all delay-200`}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default CustomSearch;

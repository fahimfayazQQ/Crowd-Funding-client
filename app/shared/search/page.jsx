import React from "react";
import "./searchStyle.css";

const CustomSearch = ({ search, handleSearch }) => {
  return (
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
            ? "w-[20rem] outline-none text-black rounded-tl-full rounded-bl-full bg-white shadow-sm px-3 py-1"
            : "w-0"
        } cus-transition-all delay-200`}
      />
      <div
        onClick={() => {
          handleSearch(false);
        }}
        className={`${
          search
            ? "w-8 rounded-tr-full rounded-br-full cursor-pointer px-2 text-black"
            : "invisible"
        } text-sm cus-transition-all delay-200`}
      >
        X
      </div>
    </div>
  );
};

export default CustomSearch;

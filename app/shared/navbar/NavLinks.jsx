'use client'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { customlinks } from "./MyLinks";

const NavigationItems = () => {
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="lg:flex z-[999] bg-white lg:bg-transparent border border-white border-opacity-30 lg:border-none shadow-2xl shadow-[#ffffff20] lg:shadow-none md:text-white text-center text-xl lg:text-base rounded-md cursor-pointer mx-2 my-6">
        {customlinks?.map((link, i) => (
          <div key={i}>
            <div
              className="flex items-center px-4"
              onClick={() => {
                toogleSubmenu !== link?.name
                  ? setToogleSubmenu(link?.name)
                  : setToogleSubmenu("");
              }}
            >
              {link?.name !== "Free Trial" && (
                <a className="text-black" href={link?.link}>
                  {link?.name}
                </a>
              )}
            </div>
            <div>
              {link?.submenu !== "" && (
                <div
                  className={`${toogleSubmenu === link?.name ? "" : "hidden"}`}
                >
                  {link?.submenu?.map((slink, i) => (
                    <Link key={i} to={slink?.sublink}>
                      <div className="py-6 pl-10">{slink?.name}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavigationItems;
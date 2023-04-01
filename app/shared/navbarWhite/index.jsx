"use client";
import React, { useState, useEffect } from "react";
/* import NavigationItems from "./NavLinks"; */
import { Modal } from "antd";
import "./Navbar.css";
import { customlinks } from "../navbar/MyLinks";
import { Search, Down } from "../Icons";
import Link from "next/link";

const NavbarWhite = () => {
  const [open, setOpen] = useState(false);
  // const [isHome, setIsHome] = useState(false);
  const [toogleSubmenu, setToogleSubmenu] = useState("");
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-500 m-4`;
  

  return (
    <div id="Navbar" className="w-full absolute top-0 bg-transparent z-[999]">
      <nav className="bg-transparent text-white relative">
        <div className="flex justify-between py-5">
          <Link href={"./"}>
            <div className="flex justify-center items-center text-xl text-center font-bold cursor-pointer pl-20">
              QUADQUE
            </div>
          </Link>
          <div className="flex justify-between">
            <div className="flex justify-center items-center text-xl text-center font-bold pl-20">
              <Search className="text-white cursor-pointer"/>
            </div>
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
              {/* Hamburger Animation */}
              <div className={` ${genericHamburgerLine}`} />
              <div className={`${genericHamburgerLine}`} />
              <div className={`${genericHamburgerLine}`} />
            </div>
          </div>
          {/* Hamburger Animation end*/}
          {/* <ul className="hidden lg:visible lg:flex items-center gap-8">
            <NavigationItems />
          </ul> */}
          {/* Mobile View */}
          <Modal
            className="NavbarWhiteModal bg-black bg-opacity-30 backdrop:filter backdrop-blur-sm border border-gray-400 rounded-md float-right cross_btn"
            title={false}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
            /* width="100%" */
          >
            <div className="w-full h-[95vh] flex flex-col text-xl py-10 pl-10">
              {customlinks?.map((link) => (
                <>
                  <div
                  className="py-4 flex justify-between items-center"
                    onClick={() => {
                      toogleSubmenu !== link?.name
                        ? setToogleSubmenu(link?.name)
                        : setToogleSubmenu("");
                    }}
                  >
                    <a className="text-white" href={link?.link}>
                      {link.name}
                    </a>
                    <div className={`${link?.submenu ? "block":"hidden"}`}>
                      <Down className={`text-white text-sm ${toogleSubmenu === "" && "-rotate-90" }`}/>
                    </div>
                  </div>
                  <div>
                    {link?.submenu !== "" && (
                      <div
                        className={`${
                          toogleSubmenu === link.name ? "" : "hidden"
                        }`}
                      >
                        {link.submenu?.map((slink) => (
                          <Link href={slink.sublink}>
                            <div className="py-6 pl-10">{slink.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ))}
            </div>
          </Modal>
        </div>
      </nav>
    </div>
  );
};

export default NavbarWhite;

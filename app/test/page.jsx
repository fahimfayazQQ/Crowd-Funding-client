'use client'
import "./style.css";
import React, { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";
import CustomSearch from "../shared/search/page";
import { Down, Search } from "../shared/Icons";
import { customlinks } from "../shared/navbar/MyLinks";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const NewWhiteNav = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [search, setSearch] = useState(false);
  const [toogleSubmenu, setToogleSubmenu] = useState("");
    const HamburgerLine1 = `h-1 my-1 rounded-full transition ease transform duration-500 m-4`;
    const HamburgerLine2 = `h-1 my-1 rounded-full transition ease transform duration-500 m-4 float-right`;

    const handleSearch = (bool) => {
      setSearch(bool);
    };

  return (
    <div className="bg-home-color">
      <div className="flex justify-between bg-transparent">
        <Link href={"./"}>
          <div className="flex justify-center items-center text-xl text-white text-center font-bold cursor-pointer pl-10 lg:pl-20 mt-5">
            QUADQUE
          </div>
        </Link>
        <div className="flex">
          <CustomSearch search={search} handleSearch={handleSearch} />
          <div
            onClick={() => {
              handleSearch(true);
            }}
            className="flex justify-center items-center text-xl text-center font-bold"
          >
            <Search className="text-white cursor-pointer ml-5 mr-20 mt-5" />
          </div>
          <main>
            <AnimatePresence>
              {open && (
                <motion.aside
                  initial={{ width: 0 }}
                  animate={{
                    width: 300,
                  }}
                  exit={{
                    width: 0,
                    transition: { delay: 0.7, duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="container"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                  >
                    {customlinks.map(({ name, link, id }) => (
                      <motion.a
                        key={id}
                        href={link}
                        whileHover={{ scale: 1.1 }}
                        variants={itemVariants}
                        onClick={() => {
                          toogleSubmenu !== link?.name
                            ? setToogleSubmenu(link?.name)
                            : setToogleSubmenu("");
                        }}
                      >
                        {name}
                      </motion.a>
                    ))}
                  </motion.div>
                    {customlinks?.submenu !== "" && (
                      <div
                        className={`${
                          toogleSubmenu === customlinks.name ? "" : "hidden"
                        }`}
                      >
                        {customlinks.submenu?.map((slink, i) => (
                          <Link
                            key={i}
                            href={slink.sublink}
                            onClick={() => {
                              setOpen(false);
                              setToogleSubmenu("");
                            }}
                          >
                            <div className="py-6 pl-10">{slink.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                </motion.aside>
              )}
            </AnimatePresence>
            {/* <div className="btn-container">
        <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
      </div> */}
            <div className="cursor-pointer mt-5" onClick={cycleOpen}>
              {/* Hamburger Animation */}
              <div
                className={` ${HamburgerLine1} ${
                  open
                    ? "translate-x-16 delay-100 translate-y-3 -rotate-45 w-7 bg-black"
                    : "bg-white w-10"
                }`}
              />
              <div
                className={`w-7 ${HamburgerLine2} ${
                  open
                    ? "translate-x-16 rotate-45 bg-black"
                    : "bg-white delay-100"
                }`}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default NewWhiteNav
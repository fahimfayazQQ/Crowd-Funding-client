import React from 'react'
import "./style.css"

const MenuItems = () => {
  return (
    <li className="flex items-center mb-5 space-x-6 cursor-pointer mt-20">
      <span className="w-[45px] h-[45px] rounded-full"></span>
      <span className="flex-1 h-8 rounded-lg"></span>
    </li>
  );
}

export default MenuItems
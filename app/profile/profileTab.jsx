'use client'
import React, {useState} from 'react'
import UserProfile from './userProfile'
import Settings from './settings'
import Notification from './notification'
import WishProject from './wishProject'
import Reccomendation from './reccomendation'
import { Fade } from 'react-reveal'

const ProfileTab = () => {
    const [toogleTab, setToogleTab] = useState(0)
    const [showTabs, setShowTabs] = useState(false);
    const HamburgerLine = `h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-500 m-4`;

    const handleToogle = (id) => {
    setToogleTab(id);
    };
    const handleShowTabs = () => {
    setShowTabs(!showTabs);
    };
  return (
    <div className="w-full h-screen lg:flex">
      <div className="hidden lg:block w-[25rem] h-full bg-home-color text-white z-50">
        <div className='text-2xl font-semibold pl-20 py-20'>QUADQUE</div>
        <div className="flex flex-col justify-center text-lg pt-20">
          <div onClick={()=>{handleToogle(0);}} className={`${toogleTab===0 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Notifications</div>
          <div onClick={()=>{handleToogle(1);}} className={`${toogleTab===1 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Wish Project</div>
          <div onClick={()=>{handleToogle(2);}} className={`${toogleTab===2 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Recommended</div>
          <div onClick={()=>{handleToogle(3);}} className={`${toogleTab===3 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Profile</div>
          <div onClick={()=>{handleToogle(4);}} className={`${toogleTab===4 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Account Settings</div>
          <div onClick={()=>{handleToogle(5);}} className={`${toogleTab===5 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Logout</div>
        </div>
      </div>
      <div onClick={()=>{handleShowTabs()}} className='lg:hidden mt-20 cursor-pointer'>
              <div className={`${HamburgerLine} ${showTabs? "rotate-45 translate-y-2":""}`} />
              <div className={`${HamburgerLine} ${showTabs? "opacity-0":"opacity-100"}`} />
              <div className={`${HamburgerLine} ${showTabs? "-rotate-45 -translate-y-2":""}`} />
      </div>
      <Fade left spy={showTabs}>
      <div className={`${showTabs? "":"hidden"} duration-500 lg:hidden w-full flex flex-wrap justify-around p-5 rounded-xl mx-auto`}>
        <div onClick={()=>{handleToogle(0)}} className={`${toogleTab===0 ? "text-white bg-black duration-300":"text-black bg-white border duration-300"} w-full rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>Notifications</div>
        <div onClick={()=>{handleToogle(1)}} className={`${toogleTab===1 ? "text-white bg-black duration-300":"text-black bg-white border duration-300"} w-full rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>Wish Project</div>
        <div onClick={()=>{handleToogle(2)}} className={`${toogleTab===2 ? "text-white bg-black duration-300":"text-black bg-white border duration-300"} w-full rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>Recommended</div>
        <div onClick={()=>{handleToogle(3)}} className={`${toogleTab===3 ? "text-white bg-black duration-300":"text-black bg-white border duration-300"} w-full rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>Profile</div>
        <div onClick={()=>{handleToogle(4)}} className={`${toogleTab===4 ? "text-white bg-black duration-300":"text-black bg-white border duration-300"} w-full rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>Account Settings</div>
        <div onClick={()=>{handleToogle(5)}} className={`${toogleTab===5 ? "text-white bg-black duration-300":"text-black bg-white border duration-300"} w-full rounded-full shadow-md px-5 py-2 my-1 cursor-pointer`}>Logout</div>
      </div>
      </Fade>
      <div className='w-full'>
        {toogleTab===0 && <Fade bottom opposite><Notification/></Fade>}
        {toogleTab===1 && <Fade bottom opposite><WishProject/></Fade>}
        {toogleTab===2 && <Fade bottom opposite><Reccomendation/></Fade>}
        {toogleTab===3 && <Fade bottom opposite><UserProfile/></Fade>}
        {toogleTab===4 && <Fade bottom opposite><Settings/></Fade>}
      </div>
    </div>
  );
}

export default ProfileTab
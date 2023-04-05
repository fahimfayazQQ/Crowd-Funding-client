'use client'
import React, {useState} from 'react'
import UserProfile from './userProfile'
import Settings from './settings'
import Notification from './notification'
import WishProject from './wishProject'
import Reccomendation from './reccomendation'

const ProfileTab = () => {
    const [toogleTab, setToogleTab] = useState(0)

    const handleToogle = (id) => {
    setToogleTab(id);
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
        </div>
      </div>
      <div className='lg:hidden w-full flex flex-wrap justify-around p-5 rounded-xl mx-auto mt-20'>
        <div onClick={()=>{handleToogle(0)}} className={`${toogleTab===0 ? "text-white bg-black scale-110 duration-300":"text-black bg-white border duration-300"} rounded-full shadow-md px-5 py-2 my-2 cursor-pointer`}>Notifications</div>
        <div onClick={()=>{handleToogle(1)}} className={`${toogleTab===1 ? "text-white bg-black scale-110 duration-300":"text-black bg-white border duration-300"} rounded-full shadow-md px-5 py-2 my-2 cursor-pointer`}>Wish Project</div>
        <div onClick={()=>{handleToogle(2)}} className={`${toogleTab===2 ? "text-white bg-black scale-110 duration-300":"text-black bg-white border duration-300"} rounded-full shadow-md px-5 py-2 my-2 cursor-pointer`}>Recommended</div>
        <div onClick={()=>{handleToogle(3)}} className={`${toogleTab===3 ? "text-white bg-black scale-110 duration-300":"text-black bg-white border duration-300"} rounded-full shadow-md px-5 py-2 my-2 cursor-pointer`}>Profile</div>
        <div onClick={()=>{handleToogle(4)}} className={`${toogleTab===4 ? "text-white bg-black scale-110 duration-300":"text-black bg-white border duration-300"} rounded-full shadow-md px-5 py-2 my-2 cursor-pointer`}>Account Settings</div>
      </div>
      <div className='w-full'>
        {toogleTab===0 && <Notification/>}
        {toogleTab===1 && <WishProject/>}
        {toogleTab===2 && <Reccomendation/>}
        {toogleTab===3 && <UserProfile/>}
        {toogleTab===4 && <Settings/>}
      </div>
    </div>
  );
}

export default ProfileTab
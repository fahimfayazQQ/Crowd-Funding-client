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
    <div className="w-full h-screen flex">
      <div className="w-[25rem] h-full bg-home-color text-white z-50">
        <div className='text-2xl font-semibold pl-20 py-20'>QUADQUE</div>
        <div className="flex flex-col justify-center text-lg pt-20">
          <div onClick={()=>{handleToogle(0);}} className={`${toogleTab===0 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Notifications</div>
          <div onClick={()=>{handleToogle(1);}} className={`${toogleTab===1 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Wish Project</div>
          <div onClick={()=>{handleToogle(2);}} className={`${toogleTab===2 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Recommended</div>
          <div onClick={()=>{handleToogle(3);}} className={`${toogleTab===3 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Profile</div>
          <div onClick={()=>{handleToogle(4);}} className={`${toogleTab===4 && "bg-indigo-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Account Settings</div>
        </div>
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
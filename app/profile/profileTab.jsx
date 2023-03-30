'use client'
import React, {useState} from 'react'
import UserProfile from './userProfile'

const ProfileTab = () => {
    const [toogleTab, setToogleTab] = useState(0)

    const handleToogle = (id) => {
    setToogleTab(id);
    };
  return (
    <div className="w-full h-screen flex">
      <div className="w-[25rem] h-full bg-home-color text-white">
        <div className="flex flex-col justify-center text-lg pt-20">
          <div onClick={()=>{handleToogle(0);}} className={`${toogleTab===0 && "bg-indigo-500"} tracking-widest py-5 pl-20`}>Notifications</div>
          <div onClick={()=>{handleToogle(1);}} className={`${toogleTab===1 && "bg-indigo-500"} tracking-widest py-5 pl-20`}>Wish Project</div>
          <div onClick={()=>{handleToogle(2);}} className={`${toogleTab===2 && "bg-indigo-500"} tracking-widest py-5 pl-20`}>Recommended</div>
          <div onClick={()=>{handleToogle(3);}} className={`${toogleTab===3 && "bg-indigo-500"} tracking-widest py-5 pl-20`}>Profile</div>
          <div onClick={()=>{handleToogle(4);}} className={`${toogleTab===4 && "bg-indigo-500"} tracking-widest py-5 pl-20`}>Account Settings</div>
        </div>
      </div>
      <div className='w-full'>
        {toogleTab===3 && <UserProfile/>}
      </div>
    </div>
  );
}

export default ProfileTab
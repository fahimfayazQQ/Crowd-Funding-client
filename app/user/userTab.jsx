'use client'
import React, {useState} from 'react'
import Image from 'next/image';
import Propic from "../../public/assets/images/sourav.png"
import Project from './project';
/* import UserProfile from './userProfile'
import Settings from './settings'
import Notification from './notification'
import WishProject from './wishProject'
import Reccomendation from './reccomendation' */

const UsersTab = () => {
    const [toogleTab, setToogleTab] = useState(0)

    const handleToogle = (id) => {
    setToogleTab(id);
    };
  return (
    <div className="w-full h-screen flex bg-admin-color">
      <div className="w-[30rem] h-full text-white z-50 pl-10 py-20">
        <div className='h-full bg-admin-secondary-color rounded-2xl py-20'>
            <Image src={Propic} className="w-24 h-24 rounded-full mx-auto"/>
            <div className='text-2xl font-semibold text-center mt-3'>Sourav Sen</div>
            <div className="flex flex-col justify-center text-lg pt-20">
            <div onClick={()=>{handleToogle(0)}} className={`${toogleTab===0 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Project</div>
            <div onClick={()=>{handleToogle(1)}} className={`${toogleTab===1 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Notifications</div>
            <div onClick={()=>{handleToogle(2)}} className={`${toogleTab===2 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Chat</div>
            <div onClick={()=>{handleToogle(3)}} className={`${toogleTab===3 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Member</div>
            <div onClick={()=>{handleToogle(4)}} className={`${toogleTab===4 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Accounts</div>
            <div onClick={()=>{handleToogle(4)}} className={`${toogleTab===5 && "bg-gradient-to-r from-[#ffffff30] to-transparent duration-500"} tracking-widest py-5 pl-20 cursor-pointer`}>Settings</div>
            </div>
        </div>
      </div>
      <div className='w-full'>
        {toogleTab===0 && <Project/>}
      </div>
    </div>
  );
}

export default UsersTab
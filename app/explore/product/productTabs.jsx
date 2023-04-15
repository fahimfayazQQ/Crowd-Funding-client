'use client'
import React, { useState } from 'react'
import Overview from './overview'
import About from './about'
import Update from './update'
import Reward from './reward'
import Faq from './faq'
import Discussion from './discussion'
import { Fade, Slide } from "react-awesome-reveal";

const ProductTabs = () => {
  const [toogleTab, setToogleTab] = useState(0)

  const hangleToogle = (id) => {
    setToogleTab(id);
  }
  return (
    <div className='max-w-screen-xl px-5 mx-auto my-10 overflow-hidden'>
      <Fade bottom>
      <div className='w-full flex flex-wrap justify-around lg:p-5 lg:shadow-md lg:rounded-xl mx-auto lg:bg-white'>
        <div onClick={()=>{hangleToogle(0)}} className={`${toogleTab===0 && "text-home-color scale-110 duration-300 font-semibold"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>Overview</div>
        <div onClick={()=>{hangleToogle(1)}} className={`${toogleTab===1 && "text-home-color scale-110 duration-300 font-semibold"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>About</div>
        <div onClick={()=>{hangleToogle(2)}} className={`${toogleTab===2 && "text-home-color scale-110 duration-300 font-semibold"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>Update</div>
        <div onClick={()=>{hangleToogle(3)}} className={`${toogleTab===3 && "text-home-color scale-110 duration-300 font-semibold"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>Rewards</div>
        <div onClick={()=>{hangleToogle(4)}} className={`${toogleTab===4 && "text-home-color scale-110 duration-300 font-semibold"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>FAQ</div>
        <div onClick={()=>{hangleToogle(5)}} className={`${toogleTab===5 && "text-home-color scale-110 duration-300 font-semibold"} bg-white rounded-full lg:border-none shadow-lg lg:shadow-none text-sm lg:text-base px-5 py-2 mb-2 cursor-pointer`}>Discussion</div>
      </div>
      </Fade>

    {toogleTab===0 && <Slide direction='right' triggerOnce><Overview/></Slide>}
    {toogleTab===1 && <Slide direction='right' triggerOnce><About/></Slide>}
    {toogleTab===2 && <Slide direction='right' triggerOnce><Update/></Slide>}
    {toogleTab===3 && <Slide direction='right' triggerOnce><Reward/></Slide>}
    {toogleTab===4 && <Slide direction='right' triggerOnce><Faq/></Slide>}
    {toogleTab===5 && <Slide direction='right' triggerOnce><Discussion/></Slide>}
    </div>
  )
}

export default ProductTabs;

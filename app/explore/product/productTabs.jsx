'use client'
import React, { useState } from 'react'
import Overview from './overview'
import About from './about'
import Update from './update'
import Reward from './reward'
import Faq from './faq'
import Discussion from './discussion'
import { Fade } from "react-awesome-reveal";

const ProductTabs = () => {
  const [toogleTab, setToogleTab] = useState(0)

  const hangleToogle = (id) => {
    setToogleTab(id);
  }
  return (
    <div className='max-w-screen-xl px-5 mx-auto my-10'>
      <Fade bottom>
      <div className='w-full flex flex-wrap justify-around p-5 shadow-md rounded-xl mx-auto bg-white'>
        <div onClick={()=>{hangleToogle(0)}} className={`${toogleTab===0 && "text-home-color scale-110 duration-300"} px-5 pb-2 cursor-pointer`}>Overview</div>
        <div onClick={()=>{hangleToogle(1)}} className={`${toogleTab===1 && "text-home-color scale-110 duration-300"} px-5 pb-2 cursor-pointer`}>About</div>
        <div onClick={()=>{hangleToogle(2)}} className={`${toogleTab===2 && "text-home-color scale-110 duration-300"} px-5 pb-2 cursor-pointer`}>Update</div>
        <div onClick={()=>{hangleToogle(3)}} className={`${toogleTab===3 && "text-home-color scale-110 duration-300"} px-5 pb-2 cursor-pointer`}>Rewards</div>
        <div onClick={()=>{hangleToogle(4)}} className={`${toogleTab===4 && "text-home-color scale-110 duration-300"} px-5 pb-2 cursor-pointer`}>FAQ</div>
        <div onClick={()=>{hangleToogle(5)}} className={`${toogleTab===5 && "text-home-color scale-110 duration-300"} px-5 pb-2 cursor-pointer`}>Discussion</div>
      </div>
      </Fade>

    {toogleTab===0 && <Fade><Overview/></Fade>}
    {toogleTab===1 && <Fade><About/></Fade>}
    {toogleTab===2 && <Fade><Update/></Fade>}
    {toogleTab===3 && <Fade><Reward/></Fade>}
    {toogleTab===4 && <Fade><Faq/></Fade>}
    {toogleTab===5 && <Fade><Discussion/></Fade>}
    </div>
  )
}

export default ProductTabs;

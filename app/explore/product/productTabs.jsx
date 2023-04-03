'use client'
import React, { useState } from 'react'
import Overview from './overview'
import About from './about'
import Update from './update'
import Reward from './reward'
import Faq from './faq'
import Discussion from './discussion'

const ProductTabs = () => {
  const [toogleTab, setToogleTab] = useState(0)

  const hangleToogle = (id) => {
    setToogleTab(id);
  }
  return (
    <div className='max-w-screen-xl px-5 mx-auto my-10'>
      <div className='w-full flex flex-wrap justify-around p-5 shadow-md rounded-xl mx-auto bg-white'>
        <div onClick={()=>{hangleToogle(0)}} className={`${toogleTab===0 && "text-home-color scale-110 duration-300"} cursor-pointer`}>Overview</div>
        <div onClick={()=>{hangleToogle(1)}} className={`${toogleTab===1 && "text-home-color scale-110 duration-300"} cursor-pointer`}>About</div>
        <div onClick={()=>{hangleToogle(2)}} className={`${toogleTab===2 && "text-home-color scale-110 duration-300"} cursor-pointer`}>Update</div>
        <div onClick={()=>{hangleToogle(3)}} className={`${toogleTab===3 && "text-home-color scale-110 duration-300"} cursor-pointer`}>Rewards</div>
        <div onClick={()=>{hangleToogle(4)}} className={`${toogleTab===4 && "text-home-color scale-110 duration-300"} cursor-pointer`}>FAQ</div>
        <div onClick={()=>{hangleToogle(5)}} className={`${toogleTab===5 && "text-home-color scale-110 duration-300"} cursor-pointer`}>Discussion</div>
      </div>

    {toogleTab===0 && <Overview/>}
    {toogleTab===1 && <About/>}
    {toogleTab===2 && <Update/>}
    {toogleTab===3 && <Reward/>}
    {toogleTab===4 && <Faq/>}
    {toogleTab===5 && <Discussion/>}
    </div>
  )
}

export default ProductTabs;

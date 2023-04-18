import React from 'react'
import MenuItems from './MenuItems'

const Navigation = () => {
  return (
    <ul>
        {
            [...Array(5)].map((_,i)=>(
                <MenuItems/>    
            ))
        }
    </ul>
  )
}

export default Navigation
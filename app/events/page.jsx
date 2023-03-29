import React from 'react'
import Navbar from '../shared/navbar'
import EventHeader from './header'
import EventContent from './eventContent'
import Footer from '../shared/footer'

const EventLayout = () => {
  return (
    <>
      <Navbar/>
      <EventHeader/>
      <EventContent/>
      <Footer/>
    </>
  )
}

export default EventLayout

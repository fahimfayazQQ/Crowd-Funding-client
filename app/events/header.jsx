import React from 'react'
import "./eventsStyle.css"

const EventHeader = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="w-full bg-home-color rounded-2xl p-16 event_shine">
        <div className="text-white text-4xl font-semibold pb-5">
          Events
        </div>
        <div className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>
    </div>
  )
}

export default EventHeader

'use client'
import React from 'react'
import "./eventsStyle.css"
import { Zoom } from "react-awesome-reveal";

const EventHeader = () => {
  return (
    <div className="px-2 lg:px-5">
      <div className="max-w-[1280px] mx-auto mt-20">
        <Zoom triggerOnce>
          <div className="w-full bg-home-color rounded-2xl p-0 lg:p-16 event_shine">
            <div className="bg-black bg-opacity-30 backdrop:filter backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-2xl px-8 py-12">
              <div className="text-white text-2xl lg:text-4xl font-semibold pb-5">
                Events
              </div>
              <div className="text-sm lg:text-base text-white">
                Lorem Ipsum is simply dummy text <br />
                of the printing and typesetting industry. Lorem Ipsum <br />
                dolor is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default EventHeader

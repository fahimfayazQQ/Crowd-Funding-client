'use client'
import React from 'react'
import "./eventsStyle.css"
import { Zoom } from "react-reveal";

const EventHeader = () => {
  return (
    <div className="px-2 lg:px-5">
      <div className="max-w-screen-3lg mx-auto mt-20">
        <Zoom>
          <div className="w-full bg-home-color rounded-2xl p-8 lg:p-16 event_shine">
            <div className="bg-gray-400 bg-opacity-50 backdrop:filter backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-2xl p-5">
              <div className="text-white text-4xl font-semibold pb-5">
                Events
              </div>
              <div className="text-white">
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

'use client'
import Image from 'next/image';
import React from 'react'
import Bottle from "../../public/assets/images/Placeholder.png"
import Image1 from "../../public/assets/images/header.png"
import YouTube from "react-youtube";

const Header = () => {
  const videoId = `4TutF9refYo`;

  const opts = {
    height: '340',
    width: '440',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
  return (
    <div className="bg-home-color h-auto lg:h-screen py-20 px-5 lg:px-20">
      <div className="border lg:h-[80vh] rounded-2xl p-3 lg:p-10 lg:max-w-screen-xl mx-auto">
        <div className="w-full lg:h-[71vh] flex flex-col lg:flex-row justify-between">
          <div className="w-full bg-gradient-to-tl from-[#5143F6] via-indigo-500 to-[#5143F6] rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl text-white py-8 pl-4 pr-4 lg:pl-8 lg:pr-20">
            <div className="text-2xl lg:text-5xl font-semibold mb-5 lg:mt-10">
              Bring A Creative Project To Life.
            </div>
            <div className="mb-10">
              Below, we answer the questions people most often have about
              crowdfunding when they’re trying to decide if they want to start
              an online fundraiser.
            </div>
            <div className="inline-block bg-white text-indigo-500 tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              EXPLORE
            </div>
          </div>
          <div className="w-full relative">
            <Image src={Bottle} alt="img" className="hidden lg:block w-full h-full" />
            <YouTube
            opts={opts}
              videoId={videoId}
              className="youtubePlayer lg:absolute lg:bottom-15 lg:-left-48"
            />
            {/* <Image
              src={Image1}
              alt="img"
              className="w-full absolute bottom-0 -left-64"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
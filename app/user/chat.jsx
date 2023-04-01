import React from "react";
import Image from "next/image";
import Avatar from "../../public/assets/images/avatar.png";
import Chatperson from "../shared/jsondata/chatperson.json";
import { Search, Menu, Send } from "../shared/Icons";

const Chat = () => {
  return (
    <div className="w-10/12 mx-auto flex mt-20 text-white gap-10">
      <div className="w-2/3 flex flex-col">
        <div className="relative h-[76vh] bg-admin-secondary-color rounded-tr-2xl rounded-tl-2xl p-8">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center">
              <Image src={Avatar} className="w-14 h-14 mr-3" />
              <div>
                <div className="text-xl font-semibold">David Bekham</div>
                <div className="text-sm">3 new messages</div>
              </div>
            </div>
            <div className="flex justify-between gap-5">
              <Search className="text-2xl" />
              <Menu className="text-2xl" />
            </div>
          </div>
          <div className="w-full border-b border-gray-600"></div>

          <div className="my-2">
            <div className="bg-admin-color inline-block rounded-3xl py-2 px-4">
              <div>Hi. How are you?</div>
            </div>
            <div className="text-zinc-400 text-sm pl-5">1 hour ago</div>
          </div>

          <div className="my-2">
            <div className="bg-admin-color inline-block rounded-3xl py-2 px-4">
              <div>
                I would like to invest in a particular product. Can you help me.
              </div>
            </div>
            <div className="text-zinc-400 text-sm pl-5">1 hour ago</div>
          </div>

          <div className="my-2 float-right">
            <div className="bg-admin-color inline-block rounded-3xl py-2 px-4">
              <div>
                Sure. What type of product are you interested in?
              </div>
            </div>
            <div className="text-zinc-400 text-sm pl-5">1 hour ago</div>
          </div>
        </div>
        <div className="w-full border-b border-gray-600"></div>
        <div className="bg-admin-secondary-color flex items-center  rounded-br-2xl  rounded-bl-2xl py-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="w-10/12 bg-transparent text-white outline-none px-4"
            placeholder="type your reply..."
          ></textarea>
          <Send className="text-3xl mx-auto" />
        </div>
      </div>

      {/* ALL CHATS LIST */}
      <div className="w-1/3 bg-admin-secondary-color rounded-2xl p-5">
        <div className="text-xl pb-2">Chats</div>
        <div className="h-[70vh] overflow-y-auto my-5">
          {Chatperson?.map((person) => (
            <div className="cursor-pointer">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <Image src={Avatar} className="w-10 h-10 mr-3" />
                  <div className="font-semibold">{person?.name}</div>
                </div>
                <div className="text-zinc-400 text-xs mr-2">{person?.time}</div>
              </div>
              <div className="w-full border-b border-gray-600"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;

'use client'
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../public/assets/images/avatar.png";
import post1 from "../../public/assets/images/blog2.png";
import "./userStyles.css"
import { Select, Modal } from "antd";
const categoryData = ["Recent", "All"];

const Project = () => {
    const [open, setOpen] = useState(false);

  const handleProvinceChange = (value) => {
    value.preventDefault();
  };
  return (
    <div className="w-11/12 h-full mx-auto p-20 text-white">
      <div className="w-11/12 bg-admin-secondary-color rounded-3xl shadow-lg p-10">
        <div className="flex justify-between">
          <Image src={post1} className="w-[30rem] mr-3" />
          <div>
            <div className="flex justify-between pb-2">
              <div className="text-2xl">Food Category</div>
              <div>10 days late</div>
            </div>
            <div className="font-semibold">Lorem ipsum dolor sit amet</div>
            <div className="">
              Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust.
            </div>
            <div>
              <span className="text-zinc-400">Raised:</span> $2300
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <div className="flex items-end gap-4">
          <div>
            <div className="text-2xl font-bold">Update</div>
          </div>
          <Select
            defaultValue={categoryData[0]}
            style={{
              width: 140,
            }}
            onChange={handleProvinceChange}
            options={categoryData.map((province) => ({
              label: province,
              value: province,
            }))}
          />
        </div>
        <div onClick={() => setOpen(!open)} className="w-[15rem] bg-admin-secondary-color text-xl rounded-lg py-2 flex justify-center items-center">
          <span className="w-5 h-5 bg-white text-admin-secondary-color rounded-full flex justify-center items-center mr-3">
            +
          </span>
          Create Update
        </div>
      </div>

      <div className="h-[50vh] text-sm p-5 overflow-y-scroll">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-admin-secondary-color rounded-2xl p-5">
            <div className="text-lg pb-5">Lorem Ipsum</div>
            <div>
              Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust continue.....
            </div>
          </div>

          <div className="bg-admin-secondary-color rounded-2xl p-5">
            <div className="text-lg pb-5">Lorem Ipsum</div>
            <div>
              Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust continue.....
            </div>
          </div>

          <div className="bg-admin-secondary-color rounded-2xl p-5">
            <div className="text-lg pb-5">Lorem Ipsum</div>
            <div>
              Premium pepperoni and cheese is made with real mozzarella on
              original hand-tossed crust continue.....
            </div>
          </div>

        </div>
      </div>
      <Modal
            className=""
            title={false}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
            width="70%"
            height="90vh"
          >
            <div className="w-full text-black text-xl py-10">
              <div className="text-2xl">Update Post</div>
              <textarea name="" id="" cols="30" rows="10" className="w-full rounded-md border my-5"></textarea>
              <div className="w-[6rem] bg-admin-secondary-color text-center text-white rounded-md py-2">Save</div>
            </div>
          </Modal>
    </div>
  );
};

export default Project;

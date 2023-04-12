'use client'
import React, { useState } from 'react'
import { Modal } from "antd";

const ReccomendationModal = ({ isModalOpen, setIsModalOpen }) => {
    const [selectedCat, setSelectedCat] = useState([]);

    const handleSelectedCatagory = (id) => {
        if (selectedCat?.includes(id)) {
        setSelectedCat(selectedCat.filter((i) => i !== id));
        } else {
        setSelectedCat([...selectedCat, id]);
        }
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
  return (
    <Modal
      title={false}
      footer={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleOk}
    >
      <div className="bg-white">
        <div className="text-lg font-semibold">categories</div>
        <div className="lg:w-10/12 mx-auto grid grid-cols-2 my-10 gap-5 text-xs lg:text-sm">
          <div
            onClick={() => {
              handleSelectedCatagory(1);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(1) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Edtech
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(2);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(2) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Fintech
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(3);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(3) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Logistics
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(4);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(4) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            E-Commerce and Retail
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(5);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(5) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Gaming
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(6);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(6) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Climate and Energy
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(7);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(7) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Consumer Service
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(8);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(8) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Halthcare
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(9);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(9) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Food & Agro
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(10);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(10) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Mobility
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(11);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(11) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Software and Technology
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(12);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(12) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Sports and Entertainment
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(13);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(13) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Circular Economy
          </div>
          <div
            onClick={() => {
              handleSelectedCatagory(14);
            }}
            className="flex items-center"
          >
            <div
              className={`${
                selectedCat.includes(14) && "bg-home-color border-none"
              } w-6 h-6 border rounded-md shadow-md mr-2`}
            ></div>
            Others
          </div>
        </div>
        <div
          onClick={handleOk}
          className="w-[5rem] bg-home-color rounded-md text-white text-center px-2 py-2 cursor-pointer"
        >
          OK
        </div>
      </div>
    </Modal>
  );
};

export default ReccomendationModal
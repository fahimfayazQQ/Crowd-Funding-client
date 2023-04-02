import Image from "next/image";
import Link from "next/link";
import React from "react";
import Events1 from "../../../../public/assets/images/events1.png";
import Learn1 from "../../../../public/assets/images/learn1.png";

const DetailContent = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <Image src={Learn1} alt="img" className="w-full pb-10" />
      <div className="text-3xl font-semibold mb-5">
        Lorem Ipsum is simply dummy text{" "}
      </div>
      <div className="mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <br />
        <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.{" "}
      </div>
      <div className="w-1/2 flex flex-wrap justify-between mx-auto gap-5 mb-10">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
      </div>
      <div className="mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <br />
        <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.{" "}
      </div>

      <div className="flex justify-center gap-5 my-10">
        <Image src={Events1} alt="img" />
        <Image src={Events1} alt="img" />
      </div>

      <div className="text-3xl font-semibold mb-5">Our Working Proccess</div>
      <div className="mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <br />
        <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.{" "}
      </div>
      <div className="w-1/2 flex flex-wrap justify-between mx-auto gap-5 mb-10">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-black mr-4"></span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
      </div>
      <div className="mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <br />
        <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.{" "}
      </div>

      <div className="bg-white w-1/2 mx-auto p-10 shadow-lg rounded-xl">
        <div className="text-2xl text-center my-2">Buy ticket</div>
        <div className="text-center">
          Building an enterprise level site doesn&apos;t need nightmare or cost your
          thousands.
        </div>
        <div className="text-3xl text-center my-5">$14.99</div>
        <Link href={"../../payment"}>
          <div className="w-1/3 mx-auto rounded-xl text-center bg-home-color text-white px-5 py-3">
            Payments
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DetailContent;

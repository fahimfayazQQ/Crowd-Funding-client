import Image from "next/image";
import Product1 from "../../../public/assets/images/product.png";

const ProductHeader = () => {
  return (
    <div className="rounded-2xl max-w-screen-xl mx-auto mt-20">
      <div className="w-full h-full flex justify-between rounded-xl shadow-lg">
        <div className="w-full relative p-5">
          <Image src={Product1} alt="" className="" />
          <div className="flex items-center absolute top-5">
            <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4 mr-3">
              {"<"}
            </div>
            <div className="w-[40px] bg-[#5143F6] text-white tracking-widest text-sm text-center py-4 px-4">
              {">"}
            </div>
          </div>
        </div>
        <div className="w-full h-full text-black p-10">
          <div className="text-4xl font-semibold mb-5 mt-10">Lorem Ipsum</div>
          <div className="mb-10">
            Below, we answer the questions people most often have about
            crowdfunding when they’re trying to decide if they want to start an
            online fundraiser.
          </div>
          <div className="grid grid-cols-2 mb-10 gap-10">
            <div className="flex">
              <div className="text-zinc-500 pr-4">Raised:</div>
              <div>$5000</div>
            </div>
            <div className="flex">
              <div className="text-zinc-500 pr-4">Target:</div>
              <div>$20000</div>
            </div>
            <div className="flex">
              <div className="text-zinc-500 pr-4">Investors:</div>
              <div>33</div>
            </div>
            <div className="flex">
              <div className="text-zinc-500 pr-4">Share price:</div>
              <div>$1000</div>
            </div>
          </div>

          <div className="flex justify-evenly">
            <div className="w-3/12 bg-home-color text-white tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              INVEST
            </div>
            <div className="w-3/12 text-black border tracking-widest text-sm text-center rounded-md py-3 px-4 cursor-pointer">
              WISH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;

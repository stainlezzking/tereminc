import Image from "next/image";
import FullStar from "./stars/fullstar";
import HalfStar from "./stars/halfstar";
import productImage from "@/public/product.png";

const Product = () => {
  return (
    <div className=" w-full aspect-[9/12.24] bg-white">
      <div className="w-full aspect-[1]  relative">
        <Image src={productImage} layout="fill" alt="{product description}" />
        <LikeProduct />
      </div>
      <div className="px-[10px] py-5">
        <h4 className="text-sm font-bold mb-[6px]">Lucent Facial Concentrate</h4>
        <p className="text-sm">A Vitamin C-rich layering serum</p>
        <div className="flex items-center gap-x-[6px]">
          <div className="flex">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
          <div className="text-[#483D3D] text-sm/[23.8px] grow justify-between flex">
            <p>4.7 (60ml)</p>
            <p>₦15,550</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LikeProduct = function () {
  return (
    <span className="absolute z-1 bottom-10 block cursor-pointer right-3">
      <svg className="fill-none stroke-black w-[35px]" viewBox="0 0 24 24">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
        </g>
      </svg>
    </span>
  );
};

export default Product;

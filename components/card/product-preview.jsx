import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../button/addToCartButton";

const ProductPreview = ({ src, title, cats, id, price, href }) => {
  return (
    <div className="rounded-[10px] overflow-clip w-full relative bg-white group">
      <div className="w-full aspect-square overflow-hidden">
        <Image
          alt={title}
          src={src}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-in"
          width={200}
          height={200}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 35vw"
        />
      </div>
      <div className="py-5 gap-5 text-center ">
        <Link className="block text-lg" href={href}>
          {title}
        </Link>
        <span className="bold justify-center text-sm font-bold flex">
          <svg fill="#000000" viewBox="0 0 24 24" id="naira" xmlns="http://www.w3.org/2000/svg" className="icon flat-line w-4">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <polyline
                id="primary"
                points="7 21 7 3 17 21 17 3"
                className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-2"
              ></polyline>
              <path id="primary-2" d="M4,10H20M4,14H20" className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-2"></path>
            </g>
          </svg>
          {price.toLocaleString()}
        </span>
        <div className="gap-x-2 flex justify-center mt-2">
          <span className="border hover:border-black h-[30px] flex items-center text-[12px] px-[10px] rounded-[3px]">{cats[0]}</span>
          <span className="border hover:border-black h-[30px] flex items-center text-[12px] px-[10px] rounded-[3px]">{cats[1]}</span>
        </div>
        <AddToCartButton id={id} product={{ id, src, title, price }} href="#" />
      </div>
    </div>
  );
};

export default ProductPreview;

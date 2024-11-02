import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../button/addToCartButton";
import Naira from "../svgs/naira";

const ProductPreview = ({ product }) => {
  const { src, title, tags, id, price } = product;
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
        <Link className="block text-lg" href={"/products/" + id}>
          {title}
        </Link>
        <span className="bold justify-center text-sm font-bold flex">
          <Naira />
          {price.toLocaleString()}
        </span>
        <div className="gap-x-2 flex justify-center mt-2">
          <span className="border hover:border-black h-[30px] flex items-center text-[12px] px-[10px] rounded-[3px]">{tags[0]}</span>
          <span className="border hover:border-black h-[30px] flex items-center text-[12px] px-[10px] rounded-[3px]">{tags[1]}</span>
        </div>
        <AddToCartButton id={id} product={product} href="#" />
      </div>
    </div>
  );
};

export default ProductPreview;

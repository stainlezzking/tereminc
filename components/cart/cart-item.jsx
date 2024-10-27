import Image from "next/image";
import Naira from "../svgs/naira";
import AddandSub from "./incrementbutton";

const CartItem = ({ id, src, title, price, quantity }) => {
  return (
    <div className="flex gap-x-4 md:gap-x-6 py-5">
      <div className="relative shrink-0 w-1/5 md:min-w-[80px] aspect-[80/110]">
        <Image src={src} alt={title} width={80} height={80} className="w-full h-full object-cover object-center md:w-20" />
      </div>
      <div className="space-y-2 grow-1 self-start">
        <div>
          <div>
            <h4 className="text-sm md:text-base">{title}</h4>
            <span className="text-[12px]">type</span>
          </div>
          <p className="text-sm font-semibold flex">
            <Naira />
            {price.toLocaleString()}
          </p>
        </div>
        <AddandSub quantity={quantity} id={id} />
      </div>
    </div>
  );
};

export default CartItem;

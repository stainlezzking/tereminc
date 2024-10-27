"use client";
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext";

const AddandSub = ({ quantity, id }) => {
  const { modifyCart, modifyQuantity, setQuantity } = useContext(CartContext);
  return (
    <div className="flex gap-x-3 item-center">
      <div className="flex justify-between w-[100px] h-[30px] bg-[#f2f2f2]">
        <span
          onClick={() => modifyQuantity({ id }, "sub")}
          className="w-[27px] hover:bg-[#a4a0a0] text-[27px] cursor-pointer flex items-center justify-center h-full"
        >
          <Minus />
        </span>
        <input
          type="number"
          className="w-[40px] text-center text-[12px] bg-transparent focus:ring-0 h-full flex items-center font-semibold"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value), id)}
        />
        <span
          onClick={() => modifyQuantity({ id }, "add")}
          className="w-[27px] hover:bg-[#a4a0a0] text-[27px] cursor-pointer flex items-center justify-center h-full"
        >
          <Plus />
        </span>
      </div>
      <span onClick={() => modifyCart({ id }, true)} className="underline text-[12px] self-center text-text">
        Remove
      </span>
    </div>
  );
};

export default AddandSub;

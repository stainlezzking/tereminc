"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartcontext";

const Button = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { cart, modifyCart } = useContext(CartContext);

  const updateCart = function () {
    if (isAdded) {
      modifyCart(product, isAdded);
      return setIsAdded(false);
    }
    modifyCart(product, isAdded);
    return setIsAdded(true);
  };
  useEffect(
    function () {
      cart.forEach((item) => {
        if (item.id === product.id) return setIsAdded(true);
      });
    },
    [isAdded]
  );

  return (
    <button
      onClick={updateCart}
      className={`${
        isAdded ? " bg-red-500 hover:bg-red-500/80" : " bg-black  hover:bg-black/80"
      } px-6 text-white w-fit mx-auto rounded-[3px] mt-4 text-sm h-12 flex items-center justify-center `}
    >
      {isAdded ? "Remove Item" : "Quick add"}
    </button>
  );
};
export default Button;

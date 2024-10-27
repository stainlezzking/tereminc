"use client";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import Naira from "../svgs/naira";
import CartItem from "./cart-item";
import Link from "next/link";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <SheetContent className="px-[15px] pb-0 lg:px-[36px] w-full max-w-[90%] md:max-w-[420px] lg:max-w-[477px] h-full flex flex-col bg-white dark:bg-white text-black dark:text-black">
      <SheetHeader className="h-full">
        <SheetTitle className="shrink-0 text-xl font-normal text-black dark:text-black border-b-2  py-[5px]">Shopping Cart</SheetTitle>
        <SheetDescription asChild>
          <>
            <div className="grow-1 h-full overflow-y-scroll">
              {cart.length && cart.map((items, i) => <CartItem key={i} {...items} />)}
              {!cart.length && <h1>You have no item in your cart</h1>}
            </div>
            <div className="pt-[10px] pb-[15px] lg:pt-5 lg:pb-9 shrink-0 border-t">
              <div className="flex justify-between">
                <h3 className="text-xl">Subtotal</h3>
                <p className="text-xl font-bold flex">
                  <Naira className="w-5" />
                  {cart.reduce((acc, item) => (acc += item.price * item.quantity), 0).toLocaleString()}
                </p>
              </div>
              <div className="text-text text-[14px] mt-[10px]">
                Taxes and <span className="text-black">shipping </span> calculated at checkout
              </div>
              <span className="h-1 block w-full bg-[#ebebeb] my-[14px]"></span>
              <div>
                <Link href="" className="bg-black text-center hover:bg-black/90 text-white text-[14px] py-[10px] px-6 block">
                  Checkout
                </Link>
              </div>
            </div>
          </>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default Cart;

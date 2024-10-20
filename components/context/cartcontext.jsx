"use client";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext(null);

export default function CartItemsContextWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const modifyCart = (product, isAdded) => {
    if (isAdded) {
      setCart(cart.filter((e) => e.id != product.id));
      return toast.success("Removed item from cart", { position: "top-right" });
    }
    setCart((e) => [...e, product]);
    return toast.success("Added item to cart", { position: "top-right" });
  };
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);
  return <CartContext.Provider value={{ cart, modifyCart }}>{children}</CartContext.Provider>;
}

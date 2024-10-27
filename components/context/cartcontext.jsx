"use client";
import { createContext, useEffect, useState } from "react";
import { updateQuantity, updateQuantityValue, updateCart } from "./utils";

export const CartContext = createContext(null);

export default function CartItemsContextWrapper({ children }) {
  const [cart, setCart] = useState([]);

  const modifyCart = (product, isAdded) => updateCart(product, isAdded, cart, setCart);
  const modifyQuantity = (p, op) => updateQuantity(p, op, cart, setCart);

  const setQuantity = (v, id) => updateQuantityValue(v, id, cart, setCart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);
  return <CartContext.Provider value={{ cart, modifyCart, modifyQuantity, setQuantity }}>{children}</CartContext.Provider>;
}

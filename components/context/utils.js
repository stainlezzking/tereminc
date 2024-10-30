import { toast } from "sonner";

const saveCart = function (newCart, cartStore) {
  cartStore(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

/*
Add remove item from cart
*/
export const updateCart = (product, isAdded, cart, setCart) => {
  const newCart = isAdded ? cart.filter((e) => e.id != product.id) : [...cart, product];
  saveCart(newCart, setCart);
  return toast.success(isAdded ? "Removed item from cart" : "Added item to cart", { position: "top-right" });
};

/*
Increase and decrease quantity of product in cart
*/
export const updateQuantity = (p, op, cart, setCart) => {
  const productIndex = cart.findIndex((item) => item.id == p.id);
  if (productIndex < 0) return null;
  // const error = null
  if (op == "add") {
    if (cart[productIndex].stock <= cart[productIndex].quantity) return toast.info(`Only ${cart[productIndex].quantity} stock is available now`);
    const newCart = [
      ...cart.slice(0, productIndex),
      { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
      ...cart.slice(productIndex + 1),
    ];
    return saveCart(newCart, setCart);
  }
  if (op == "sub") {
    if (cart[productIndex].min >= Number(cart[productIndex].quantity)) return toast.info(`Minimum of this product is ${cart[productIndex].min}`);
    const newCart = [
      ...cart.slice(0, productIndex),
      { ...cart[productIndex], quantity: cart[productIndex].quantity - 1 },
      ...cart.slice(productIndex + 1),
    ];
    return saveCart(newCart, setCart);
  }
  return;
};

/*
@cart
Update Quantity value using the input
*/

export function updateQuantityValue(value, id, cart, setCart) {
  if (isNaN(value)) return;
  let updatedCart = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      if (cart[i].min > value || cart[i].stock < value) {
        cart[i].min > value ? toast.info(`Minimum of this product is ${cart[i].min}`) : toast.info(`Only ${cart[i].stock} stock is available now`);
        updatedCart = false;
        break;
      }
      updatedCart.push({ ...cart[i], quantity: Number(value) });
      continue;
    }
    updatedCart.push(cart[i]);
  }
  if (!updatedCart) return;
  setCart(updatedCart);
}

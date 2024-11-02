"use client";
import Background from "@/components/background";
import Wrapper from "@/components/contentwrapper";
import { CartContext } from "@/components/context/cartcontext";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import CheckoutItem from "./checkout-item";
import Naira from "@/components/svgs/naira";
const Page = () => {
  // I DONT WANT THE WHOLE OF THiS COMPONENT TO BE CLIENT
  // I dont think i will store any checkout item on the db, I will use an API route to confirm the items in the cart if they still exists
  // or if the available selected is still available
  const { cart } = useContext(CartContext);
  return (
    <>
      <Background> Checkout</Background>
      <Wrapper className="md:container mx-auto">
        <div className="lg:grid grid-cols-2 py-9 md:py-16 lg:py-20 gap-x-12 ">
          <div className="lg:col-span-1 border-b border-gray-900/10 pb-12">
            <h2 className="text-lg md:text-[28px] mb-5 font-medium ">Billing details</h2>
            <div className="mt-10 grid gap-x-6 gap-y-8 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="number" className="block text-sm/6 font-medium text-gray-900">
                  Receiver's phone Number
                </label>
                <div className="mt-2 flex items-center gap-x-1">
                  <span className="text-gray-600">+234</span>
                  <input
                    name="text"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <span className="flex px-1 text-gray-600 justify-between items-center w-full border-gray-300 border rounded-md py-1 5 sm:text-sm/6">
                    <span>Nigeria</span>
                    <CaretDownIcon />
                  </span>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                  State
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm/6"
                  >
                    <option>...</option>
                    <option>Lagos</option>
                    <option>Anambra</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                  Delivery House address
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                  Delivery City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 flex justify-end">
            <div className="space-y-10 md:px-[30px] lg:max-w-[500px] w-full">
              <h2 className="text-lg md:text-[28px] font-medium">Your Order</h2>
              <div className="space-y-5">
                <div>
                  <ul className="space-y-[15px]">
                    {cart.map((item) => (
                      <CheckoutItem {...item} />
                    ))}
                  </ul>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="block w-full rounded-[3px] px-2 border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm/6"
                  />
                  <button className="bg-black text-white rounded-r-[3px] p-3">Apply</button>
                </div>
                <div className="pb-5 border-b  md:text-lg ">
                  <div className="flex justify-between text-sm">
                    <p>+Delivery Fee</p>
                    <span className="flex ">
                      <span className="line-through">N</span>
                      {(cart.reduce((acc, item) => (acc += item.quantity * item.price), 0) / 10).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p>Total</p>
                    <span className="flex gap-x-1 ">
                      <Naira />
                      {cart.reduce((acc, item) => (acc += item.quantity * item.price), 0).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button className="bg-black hover:bg-green-500 w-full text-center hover:bg-black/90 text-white text-[14px] py-3 rounded-[3px] px-6 block">
                  Place Your Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Page;

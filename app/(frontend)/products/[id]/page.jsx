import Navbar from "@/components/navbar/navbar";
import BreadCrumbs from "./breadcrumbs";
import database from "@/database";
import { notFound } from "next/navigation";
import Wrapper from "@/components/contentwrapper";
import Naira from "@/components/svgs/naira";
import { ChevronLeft, ChevronRight, CircleHelp, CornerDownLeft, Minus, Plus, Share2, Ship, Truck } from "lucide-react";
import TabDetails from "./details";
import SimilarProducts from "@/components/similarproducts";

const Page = ({ params }) => {
  const product = database.find((product, index) => index == params.id);
  if (!product) return notFound();
  return (
    <>
      <Navbar />
      <Wrapper className="lg:max-w-[1200px] mx-auto">
        <BreadCrumbs
          crumbs={[
            { name: "home", url: "/" },
            { name: product.category, url: `/c/${product.category}` },
            { name: product.title, url: "#" },
          ]}
        />
        <div className="grid grid-cols-4 lg:grid-cols-5 mb-10">
          <div className="col-span-2 lg:col-span-2 relative">
            <div className="sticky top-0 left-0 w-full pe-[15px]">
              <img src={product.src} alt={product.title} className="w-full aspect-[3/4] object-cover max-w-[30vw]" />
              <span className="bg-white w-[46px] shadow-sm cursor-pointer hover:bg-slate-300 h-[46px] flex items-center justify-center absolute top-1/2 left-0 rounded-full -translate-1/2">
                <ChevronLeft className="w-6" />
              </span>
              <span className="bg-white w-[46px] shadow-sm cursor-pointer hover:bg-slate-300 h-[46px] flex items-center justify-center absolute top-1/2 right-[15px] rounded-full -translate-1/2">
                <ChevronRight className="w-6" />
              </span>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-3 px-[15px] space-y-[30px] ">
            <h5 className="text-[26px]/[32px] lg:text-[28px]/[34px]">{product.title}</h5>
            <div className="text-xl flex text-black/80">
              <Naira className={"w-6 stroke-black/80 "} /> {product.price.toLocaleString()}
            </div>
            <div className="flex gap-x-[10px] items-center">
              <div className="px-2 py-1 font-medium text-white bg-black rounded-[3px]">20</div> of this Available.
            </div>
            <div className="space-y-4">
              <p>
                Color : <span className="font-medium">Black</span>
              </p>
              <div className="flex gap-[10px] items-center flex-wrap">
                <button type="button" className="rounded-full hover:shadow  w-9 h-9 p-[5px] block   " data-color-name="beige">
                  <span className="block w-full h-full rounded-full bg-[#c8ad7f]"></span>
                </button>
                <button
                  type="button"
                  className="rounded-full hover:shadow  w-9 h-9 p-[5px] block shadow-md border border-black "
                  data-color-name="black"
                >
                  <span className="block w-full h-full rounded-full bg-black"></span>
                </button>
                <button type="button" className="rounded-full hover:shadow  w-9 h-9 p-[5px] block " data-color-name="blue">
                  <span className="block w-full h-full rounded-full bg-[#a8bcd4]"></span>
                </button>
                <button type="button" className="rounded-full hover:shadow  w-9 h-9 p-[5px] block  " data-color-name="white">
                  <span className="block w-full h-full rounded-full  bg-white"></span>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <p>
                Sizes : <span className="font-medium">300ml</span>
              </p>
              <div className="flex gap-[10px] items-center flex-wrap text-[14px]">
                <button type="button" className="rounded-[3px] px-4 py-2 block bg-black text-white  " data-color-name="beige">
                  300ml
                </button>
                <button type="button" className="rounded-[3px] px-4 py-2 block  border  " data-color-name="black">
                  500ml
                </button>
                <button type="button" className="rounded-[3px] px-4 py-2 block  border " data-color-name="blue">
                  1000ml
                </button>
              </div>
            </div>
            <div className="space-y-[5px]">
              <p className="font-medium">Quantity</p>
              <div className="flex justify-between w-[127px] h-[46px] bg-[#f2f2f2]">
                <span className="w-[38px] hover:bg-[#a4a0a0] text-[27px] cursor-pointer flex items-center justify-center h-full">
                  <Minus />
                </span>
                <input
                  type="text"
                  className="w-[51px] text-center text-[12px] bg-transparent focus:ring-0 focus:outline-none h-full flex items-center font-semibold"
                />
                <span className="w-[38px] hover:bg-[#a4a0a0] text-[27px] cursor-pointer flex items-center justify-center h-full">
                  <Plus />
                </span>
              </div>
            </div>

            <div>
              <button className="bg-black rounded-[3px] py-3 w-full hover:bg-black/90 max-w-[500px] text-white text-center font-medium">
                Add to Cart - <span className="line-through">N</span>10,000
              </button>
            </div>

            <div className="flex justify-between items-center text-[14px]">
              <div className="flex gap-x-2 items-center">
                <CircleHelp />
                <p>Ask a question</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Truck />
                <p>Delivery & Return</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Share2 />
                <p>share</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4">
              <div className="border rounded-[3px] p-[30px] space-y-[16px]">
                <Ship />
                <p>Estimated delivery time : 2-3 days (within lagos), 3-5 days (outside lagos)</p>
              </div>
              <div className="border rounded-[3px] p-[30px] space-y-[16px]">
                <CornerDownLeft />
                <p>Return within 1 week of purchase. Duties and taxes are non-refundable.</p>
              </div>
            </div>
            <TabDetails />
          </div>
        </div>
        <SimilarProducts />
      </Wrapper>
    </>
  );
};

export default Page;

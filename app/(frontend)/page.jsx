import BtnLink from "@/components/button/cat-button";
import OutlineButton from "@/components/button/outline";
import Categories from "@/components/card/categories";
import ProductPreview from "@/components/card/product-preview";
import Wrapper from "@/components/contentwrapper";
import Modal from "@/components/modal";
import HomeNavbar from "@/components/navbar/home-navbar";
import SlidingText from "@/components/slidingText";
import Title from "@/components/title";
import Subtitle from "@/components/title_sub";
import collectionImage from "@/images/collections/collection-15.jpg";
import { ArrowUpRight, Box, ChevronLeft, ChevronRight, CornerDownLeft, CreditCard, Headset } from "lucide-react";
import Link from "next/link";
import database from "@/database";

const Page = () => {
  // {/* should not be more than two */}
  const productSample = database.slice(0, 8);
  return (
    <div>
      <HomeNavbar />
      <Modal />
      <SlidingText />
      <Wrapper className="space-y-[15px] xl:space-y-[30px] py-12">
        <div className="gap-x-[15px] flex items-center">
          <div className="flex gap-x-[5px]">
            <button className="border flex text-black/15 items-center justify-center rounded-full w-[30px] h-[30px]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="border flex items-center justify-center rounded-full w-[30px] h-[30px]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="">SHOP BY CATEGORIES</span>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 grid-spacing">
          <div className="col-span-full md:col-span-2 xl:col-span-3 overflow-hidden">
            <div className="gap-x-[20px] lg:gap-x-[30px] flex flex-nowrap w-full h-full ">
              <Categories src={collectionImage.src} className="w-1/2 xl:w-1/3 shrink-0 relative aspect-[5/6]" title="Random title">
                <BtnLink href="#">Bag</BtnLink>
              </Categories>
              <Categories src={collectionImage.src} className="w-1/2 xl:w-1/3 shrink-0 relative aspect-[5/6]" title="Random title">
                <BtnLink href="#">Bag</BtnLink>
              </Categories>
              <Categories src={collectionImage.src} className="w-1/2 xl:w-1/3 shrink-0 relative aspect-[5/6]" title="Random title">
                <BtnLink href="#">Hello</BtnLink>
              </Categories>
            </div>
          </div>
          <div className="col-span-1 max-md:mt-3 text-black p-5 lg:p-9 flex items-end w-full border-black border md:aspect-[5/6] md:h-full rounded-lg ">
            <div className="w-full md:space-y-[20px] lg:space-y-[30px] flex items-center justify-between">
              <h1 className="text-lg md:text-[28px] ">Discover all new Items</h1>
              <Link
                href=""
                className="hover:text-white text-[10px] hover:bg-black transition-all border border-black flex items-center justify-center rounded-full w-[40px] md:w-[50px] aspect-square"
              >
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="space-y-[40px] py-10 overflow-hidden">
        <Subtitle title="NEW IN">Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</Subtitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-spacing">
          {productSample.map((item, i) => (
            <ProductPreview product={{ ...item, id: i }} key={i} />
          ))}
          <div className="col-span-full flex justify-center">
            <OutlineButton href="/products">View All</OutlineButton>
          </div>
        </div>
      </Wrapper>

      <div className="grid grid-cols-2 py-[30px] space-y-[40px]">
        <div className="col-span-full">
          <Subtitle title="Shop the look">Inspire and let yourself be inspired, from one unique fashion to another.</Subtitle>
        </div>
        <div className="col-span-1 bg-blue-500 aspect-video"></div>
        <div className="col-span-1 bg-green-500 aspect-video"></div>
      </div>
      <Wrapper className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] pb-[50px]">
        <div className="col-span-1 border rounded-[10px] py-7 px-5 space-y-8">
          <Box />
          <div>
            <h1 className="text-[18px] font-medium"> Free Shipping</h1>
            <p className="text-sm">Free shipping over order $120</p>
          </div>
        </div>
        <div className="col-span-1 border rounded-[10px] py-7 px-5 space-y-8">
          <CreditCard />
          <div>
            <h1 className="text-[18px] font-medium"> Flexible Payment</h1>
            <p className="text-sm">Pay with Multiple Credit Cards</p>
          </div>
        </div>
        <div className="col-span-1 border rounded-[10px] py-7 px-5 space-y-8">
          <CornerDownLeft />
          <div>
            <h1 className="text-[18px] font-medium"> 14 Day Returns</h1>
            <p className="text-sm">Within 30 days for an exchange</p>
          </div>
        </div>
        <div className="col-span-1 border rounded-[10px] py-7 px-5 space-y-8">
          <Headset />
          <div>
            <h1 className="text-[18px] font-medium"> 14 Day Returns</h1>
            <p className="text-sm">Within 30 days for an exchange</p>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="grid md:grid-cols-2">
        <div className="col-span-full">
          <Title>Visit Our Store</Title>
        </div>
        <div className="col-span-1"></div>
      </Wrapper>
    </div>
  );
};

export default Page;

import BtnLink from "@/components/button/cat-button";
import OutlineButton from "@/components/button/outline";
import Categories from "@/components/card/categories";
import ProductPreview from "@/components/card/product-preview";
import Wrapper from "@/components/contentwrapper";
import Modal from "@/components/modal";
import SlidingText from "@/components/slidingText";
import Title from "@/components/title";
import collectionImage from "@/images/collections/collection-15.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Page = () => {
  // {/* should not be more than two */}
  return (
    <div>
      <Modal />
      <SlidingText />
      <Wrapper>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 grid-spacing">
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
      <Wrapper className="space-y-[30px] bg-[#f9f6ef] py-10 overflow-hidden">
        <div className="text-center space-y-[18px]">
          <Title>Best Seller</Title>
          <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-spacing">
          {new Array(8).fill(1).map((_, i) => (
            <ProductPreview id={i} src={collectionImage.src} title="Random title" href="" price={100000} cats={["Random", "Random"]} key={i} />
          ))}
          <OutlineButton href="/products">View All</OutlineButton>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page;

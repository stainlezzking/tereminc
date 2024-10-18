import BtnLink from "@/components/button";
import Categories from "@/components/card/categories";
import Wrapper from "@/components/contentwrapper";
import Modal from "@/components/modal";
import SlidingText from "@/components/slidingText";
import collectionImage from "@/images/collections/collection-15.jpg";

const Page = () => {
  return (
    <div className="h-screen">
      <Modal />
      <SlidingText />
      <Wrapper className="py-12">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-[30px]">
          <div className="col-span-2 lg:col-span-3">
            <div className="flex gap-x-[30px]">
              <Categories src={collectionImage.src} className="w-full aspect-[5/6]" title="Random title">
                Hello
              </Categories>
              <Categories src={collectionImage.src} className="w-full aspect-[5/6]" title="Random title">
                Hello
              </Categories>
              <Categories src={collectionImage.src} className="w-full aspect-[5/6]" title="Random title">
                <BtnLink href="#">Hello</BtnLink>
              </Categories>
            </div>
          </div>
          <div className="col-span-1 border rounded-lg"></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page;

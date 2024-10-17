import Categories from "@/components/card/categories";
import Modal from "@/components/modal";
import SlidingText from "@/components/slidingText";
import collectionImage from "@/images/collections/collection-15.jpg";

const Page = () => {
  console.log(collectionImage);
  return (
    <div className="h-screen">
      <Modal />
      <SlidingText />
      <section className="py-12">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-[30px">
          <Categories src={collectionImage.src} title="Random title">
            Hello
          </Categories>
        </div>
      </section>
    </div>
  );
};

export default Page;

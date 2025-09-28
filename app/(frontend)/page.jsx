import Categories, { SubCategories } from "@/components/categories";
import BannerCarousel from "@/components/banner/home-banner";
import Product from "@/components/product";

const Page = () => {
  return (
    <div className="space-y-[53px]">
      <BannerCarousel />
      <div className="space-y-9 pagemargin">
        <h3 className="font-medium text-2xl">Shop by Category</h3>
        <div className="flex gap-x-[10px] w-full">
          <Categories src="">Cream</Categories>
          <Categories src="">Lotion</Categories>
          <Categories src="">Sunscreen</Categories>
          <Categories src="">Sunscreen</Categories>
        </div>

        <div className="flex gap-x-3 w-full">
          <SubCategories>New Arrivals</SubCategories>
          <SubCategories>Best Sellers</SubCategories>
          <SubCategories>Just for you</SubCategories>
        </div>
      </div>
      <div className="bg-sand-400">
        <div className="pagemargin pt-[37px]">
          <div className="text-center mb-[30px]">
            <h2 className="text-[black] text-2xl mb-3">Our Favourites</h2>
            <span className="text-lg">Your Skin’s New Best Friends</span>
          </div>
          <div className="grid grid-cols-4 gap-x-5 gap-y-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

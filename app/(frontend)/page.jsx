import Categories, { SubCategories } from "@/components/categories";
import BannerCarousel from "@/components/banner/home-banner";

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
    </div>
  );
};

export default Page;

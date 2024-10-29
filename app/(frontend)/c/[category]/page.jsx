import Background from "@/components/background";
import ProductPreview from "@/components/card/product-preview";
import Wrapper from "@/components/contentwrapper";
import Navbar from "@/components/navbar/navbar";
import Pagination from "@/components/pagination";
import productSample from "@/database";
import { Filter } from "lucide-react";

const Page = () => {
  const products = productSample.slice(0, 20);
  // This page will be for all categories and new Arrivals
  return (
    <>
      <Navbar />
      <Background>
        <h3 className="text-black relative z-10">New Arrival </h3>
        <p className="text-base">Shop through our latest selection of Fashion</p>
      </Background>
      <Wrapper className=" md:py-[70px] py-10 overflow-hidden">
        <div className="flex justify-end mb-[15px] lg:mb-7">
          <select name="sort" className="mt-1.5 w-full max-w-[270px] py-2 px-2 border rounded-lg border-gray-300 text-gray-700 sm:text-sm">
            <option value="">
              <Filter />
              Please select
            </option>
            <option value="BBK">Best Selling</option>
            <option value="JH">New Arrivals</option>
            <option value="JM">Price, low to high</option>
            <option value="SRV">Price, high to low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-spacing">
          {products.map((item, i) => (
            <ProductPreview product={{ ...item, id: i }} key={i} />
          ))}
        </div>
        <div className="mt-10 md:mt-12">
          <Pagination />
        </div>
      </Wrapper>
    </>
  );
};

export default Page;

import Background from "@/components/background";
import ProductPreview from "@/components/card/product-preview";
import Wrapper from "@/components/contentwrapper";
import Navbar from "@/components/navbar/navbar";
import database from "@/database";

const Page = () => {
  const products = database.slice(0, 5);
  return (
    <>
      <Navbar />
      <Background>
        <h3 className="text-black relative z-10">Your Wishlist </h3>
      </Background>
      <Wrapper className=" md:py-[70px] py-10 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-spacing">
          {products.map((item, i) => (
            <ProductPreview product={{ ...item, id: i }} key={i} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Page;

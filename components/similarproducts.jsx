import ProductPreview from "./card/product-preview";
import Title from "./title";
import database from "@/database";
const SimilarProducts = () => {
  const productSample = database.slice(0, 4);
  return (
    <>
      <Title className="text-center md:text-3xl lg:text-[35px] mb-[30px] md:mb-[50px] xl:mb-[60px]">People Also Bought</Title>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-spacing">
        {productSample.map((item, i) => (
          <ProductPreview product={{ ...item, id: i }} key={i} />
        ))}
      </div>
    </>
  );
};

export default SimilarProducts;

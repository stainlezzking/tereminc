import collectionImage from "@/images/collections/collection-15.jpg";
const productSample = {
  src: collectionImage.src,
  title: "Random Title",
  href: "",
  price: 100000,
  category: "Beauty",
  tags: ["Beauty", "skincare"],
  stock: 10,
  min: 1,
  // type : [optional] for products with 500ml...
  // this should have a minimum to set minimum value
};

const database = new Array(100).fill(productSample);

export default database;

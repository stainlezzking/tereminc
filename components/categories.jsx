import Image from "next/image";
import cat from "@/assets/cat.png";
import subcat from "@/assets/subcat.png";
import { Catbutton } from "./buttons";
const Categories = ({ src, children }) => {
  return (
    <div className="relative grow aspect-[9/10]">
      <Image src={cat.src} fill={true} className="" alt={children} />
    </div>
  );
};

export const SubCategories = ({ src, children }) => {
  return (
    <div className=" grow aspect-[9/10.5] relative group overflow-hidden">
      <Image
        src={subcat.src}
        fill={true}
        className="object-cover group-hover:scale-125 transition-transform duration-100 origin-center"
        alt={children}
      />
      <div className="absolute bottom-3 flex justify-center w-full">
        <Catbutton href="#">{children}</Catbutton>
      </div>
    </div>
  );
};

export default Categories;

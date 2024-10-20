import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Categories = ({ src, title, className, children }) => {
  return (
    <div className={twMerge("rounded-lg relative overflow-clip", className)}>
      {src && <Image src={src} width={300} height={365} alt={title} srcSet="" className="w-full object-cover" />}
      <div className="absolute h-full w-full left-0 top-0">{children}</div>
    </div>
  );
};

export default Categories;

import { twMerge } from "tailwind-merge";

const Categories = ({ src, title, className, children }) => {
  return (
    <div className={twMerge("rounded-lg relative overflow-clip", className)}>
      {src && <img src={src} alt={title} srcset="" />}
      <div className="absolute h-full w-full left-0 top-0">{children}</div>
    </div>
  );
};

export default Categories;

import { twMerge as cn } from "tailwind-merge";
const Wrapper = ({ children, className }) => {
  return <div className={cn("px-10", className)}>{children}</div>;
};

export default Wrapper;

import { cn } from "@/lib/utils";

const Title = ({ children, className }) => {
  return <h1 className={cn("text-xl md:text-3xl lg:text-[42px]", className)}>{children}</h1>;
};

export default Title;

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BtnLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className={`absolute bottom-2 left-0 md:left-[15px] flex group rounded-[3px] origin-left transition-transform hover:scale-x-105 duration-200 ease gap-x-2 items-center justify-center py-2 px-8 bg-white text-black hover:bg-black hover:text-white`}
    >
      {children}
      <ArrowUpRight className="hidden text-white text-[9px] delay-200 group-hover:block origin-right scale-0 w-0 transition-all duration-300 group-hover:scale-150 group-hover:w-[10px]" />
    </Link>
  );
};
export default BtnLink;

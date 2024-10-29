import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LinkList = ({ children, isActive = false, href, className }) => {
  if (isActive) {
    return <li className="block size-8 rounded border-red-500 bg-red-500 text-center leading-8 text-white">{children}</li>;
  }
  return (
    <li>
      <a
        href={href}
        className={cn(
          "block hover:bg-black hover:text-white size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900",
          className
        )}
      >
        {children}
      </a>
    </li>
  );
};
const Pagination = () => {
  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <LinkList href="#" className="inline-flex items-center justify-center rtl:rotate-180">
        <ChevronLeft className="w-4 h-4" />
      </LinkList>
      <LinkList href="#">1</LinkList>
      <LinkList href="#" isActive={true}>
        2
      </LinkList>
      <LinkList href="#">3</LinkList>
      <LinkList href="#" className="inline-flex items-center justify-center rtl:rotate-180">
        <span className="sr-only">Next Page</span>
        <ChevronRight className="w-4 h-4" />
      </LinkList>
    </ol>
  );
};

export default Pagination;

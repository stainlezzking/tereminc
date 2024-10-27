import { Search, ShoppingBagIcon, User } from "lucide-react";
import Wrapper from "../contentwrapper";
import Link from "next/link";
import { Sheet, SheetTrigger } from "../ui/sheet";
import Cart from "../cart/cart";
import { cn } from "@/lib/utils";

const Navbar = ({ className }) => {
  return (
    <nav>
      <Wrapper className={cn(`text-white top-0 left-0 w-full flex items-center justify-between z-10`, className)}>
        <div>Logo</div>
        <div>
          <p className="links py-8">navlinks</p>
        </div>
        <div className="flex gap-x-4 items-center text-black">
          <Link href="/" className="cursor-pointer block p-2 bg-white rounded-full">
            <Search className="w-5 h-5" />
          </Link>
          <Link href="/" className="cursor-pointer block p-2 bg-white rounded-full">
            <User className="w-5 h-5" />
          </Link>
          <Sheet>
            <SheetTrigger className="cursor-pointer block p-2 bg-white rounded-full">
              <ShoppingBagIcon className="w-5 h-5" />
            </SheetTrigger>
            <Cart />
          </Sheet>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;

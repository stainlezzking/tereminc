"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="px-[15px] relative lg:max-w-[350px] w-full">
      <ul className="max-md:mb-[30px] space-y-[10px] lg:space-y-[20px] sticky w-full lg:text-lg font-medium">
        <li className={pathname == "/dashboard" && "text-red"}>
          <Link href="#" className="block w-full text-center py-[15px] px-[30px] border hover:bg-neutral-300 hover:text-red rounded-[3px]">
            Account
          </Link>
        </li>
        <li className={pathname == "/dashboard/orders" && "text-red"}>
          <Link href="#" className="block w-full text-center py-[15px] px-[30px] border hover:bg-neutral-300 hover:text-red rounded-[3px]">
            Orders
          </Link>
        </li>
        <li className={pathname == "/dashboard/address" && "text-red"}>
          <Link href="#" className="block w-full text-center py-[15px] px-[30px] border hover:bg-neutral-300 hover:text-red rounded-[3px]">
            Address
          </Link>
        </li>
        <li className={pathname == "/dashboard/address" && "text-red"}>
          <Link href="#" className="block w-full text-center py-[15px] px-[30px] border hover:bg-neutral-300 hover:text-red rounded-[3px]">
            Account Details
          </Link>
        </li>
        <li className={pathname == "/dashboard/address" && "text-red"}>
          <Link href="#" className="block w-full text-center py-[15px] px-[30px] border hover:bg-neutral-300 hover:text-red rounded-[3px]">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavbar;

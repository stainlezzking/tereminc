"use client";
import { usePathname } from "next/navigation";

const NavbarLinks = ({ children, href }) => {
  const pathname = usePathname();
  return (
    <li className="flex items-center py-5 px-3">
      <a href={href} className={pathname == href ? "border-b-2 border-black" : ""}>
        {children}
      </a>
    </li>
  );
};

export default NavbarLinks;

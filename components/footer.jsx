import Link from "next/link";
import Wrapper from "./contentwrapper";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="py-10 border-t text-sm bg-white gap-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div className="col-span-1">
          <h1 className="footer-title font-medium">Tereminc</h1>
          <ul className="mb-2 sm:mb-[15px] space-y-1">
            <li>
              <span className="font-medium">Address : </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem non pariatur fugit eum architecto officiis magnam voluptates
              corrupti mollitia!
            </li>
            <li>
              <span className="font-medium">Email</span> info@terminc.com
            </li>
            <li>
              <span className="font-medium">Phone</span> +234 123 456 7XXX
            </li>
          </ul>
          <span className="flex icons gap-x-3">
            <Link href="" className="p-2 rounded-full border border-black">
              <InstagramLogoIcon />
            </Link>
          </span>
        </div>
        <div className="col-span-1">
          <h1 className="footer-title font-medium">Help</h1>
          <ul className="mb-2 sm:mb-[15px] space-y-1">
            <li>FAQs</li>
            <li>My Wishlist</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="footer-title font-medium">About Us</h1>
          <ul className="mb-2 sm:mb-[15px] space-y-1">
            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Account</li>
          </ul>
        </div>
        <div className="col-span-1 space-y-5">
          <h1 className="footer-title font-medium">Sign up for Email</h1>
          <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
          <div className="relative max-w-[600px]">
            <input type="text" className="border py-3 ps-5 pe-[150px] rounded-[3px] w-full " />
            <button className="bg-black text-white h-[85%] block w-[132px] absolute top-1/2 -translate-y-1/2 right-[5px] rounded-[3px]">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;

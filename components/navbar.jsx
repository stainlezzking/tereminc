"use client";
import Wrapper from "./contentwrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "@/app/custom.css";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { ChevronDown, Search, ShoppingBagIcon, User } from "lucide-react";
const onSlideChange = (e) => {
  // console.log("slide change ", e);
};

const Navbar = () => {
  return (
    <>
      <div className="text-black">
        <Wrapper className="flex py-[10px] justify-between">
          <span className="bg-black/20 p-2 rounded-full">
            <InstagramLogoIcon className="w-3 h-3" />
          </span>
          <div className=""></div>
          <div className="flex gap-x-2 items-center">
            <svg
              viewBox="0 0 36 36"
              ariaHidden="true"
              role="img"
              className="fill-black iconify iconify--twemoji w-4 "
              preserveAspectRatio="xMidYMid meet"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#009A49" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
                <path fill="#EEE" d="M12 5h12v26H12z"></path>
                <path fill="#009A49" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path>
              </g>
            </svg>
            <div className="flex text-sm items-center">
              <span>NGN</span>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="bg-blue-400 aspect-[3/4] sm:aspect-square w-full md:h-screen relative">
        <nav className="text-white">
          <Wrapper className="absolute top-0 left-0 w-full flex items-center justify-between">
            <div>Logo</div>
            <div>
              <p className="links py-8">navlinks</p>
            </div>
            <div className="flex gap-x-4 items-center text-black">
              <span className="cursor-pointer block p-2 bg-white rounded-full">
                <Search className="w-4 h-4" />
              </span>
              <span className="cursor-pointer block p-2 bg-white rounded-full">
                <User className="w-4 h-4" />
              </span>
              <span className="cursor-pointer block p-2 bg-white rounded-full">
                <ShoppingBagIcon className="w-4 h-4" />
              </span>
            </div>
          </Wrapper>
        </nav>
        <Swiper
          autoplay={{ delay: 30000 }}
          speed={800}
          loop={true}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={onSlideChange}
        >
          <SwiperSlide className="h-full items-center justify-center">
            <p>Slide 1</p>
          </SwiperSlide>
          <SwiperSlide className="h-full flex items-center justify-center">
            <p>Slide 2</p>
          </SwiperSlide>
          <SwiperSlide className="h-full flex items-center justify-center ">
            <p>Slide 3</p>
          </SwiperSlide>
          <SwiperSlide className="h-full flex items-center justify-center">
            <p>Slide 4</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Navbar;

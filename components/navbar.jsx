"use client";
import Wrapper from "./contentwrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "@/app/custom.css";
import { useEffect } from "react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { ShoppingBagIcon, User } from "lucide-react";
const onSlideChange = (e) => {
  // console.log("slide change ", e);
};

const Navbar = () => {
  return (
    <>
      <div className="text-black">
        <Wrapper className="flex py-[10px] justify-between  ">
          <span className="">
            <InstagramLogoIcon className="w-6 h-6" />
          </span>
          <div>Slider section</div>
          <div>flag and language</div>
        </Wrapper>
      </div>
      <div className="bg-blue-400 aspect-[3/4] sm:aspect-square w-full md:h-screen relative">
        <nav className="text-white">
          <Wrapper className="absolute top-0 left-0 w-full flex items-center justify-between">
            <div>Logo</div>
            <div>
              <p className="links py-8">navlinks</p>
            </div>
            <div className="flex gap-x-3 items-center text-black">
              <User />
              <ShoppingBagIcon />
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

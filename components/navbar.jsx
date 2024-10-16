"use client";
import { Instagram } from "lucide-react";
import Wrapper from "./contentwrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "@/app/custom.css";
const onSlideChange = (e) => {
  console.log("slide change ", e);
};

const Navbar = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <Wrapper className="flex py-[10px] justify-between  ">
          <span className="">
            <Instagram />
          </span>
          <div>Slider section</div>
          <div>flag and language</div>
        </Wrapper>
      </div>
      <div className="bg-blue-400 h-screen relative">
        <nav>
          <Wrapper className="absolute top-0 left-0 w-full flex items-center justify-between">
            <div>Logo</div>
            <div>
              <p className="links py-8">navlinks</p>
            </div>
            <div>wishlist icons</div>
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

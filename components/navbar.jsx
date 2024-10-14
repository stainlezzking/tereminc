"use client";
import { Instagram } from "lucide-react";
import Wrapper from "./contentwrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      <div className="bg-blue-400">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, bulletClass: "bg-black w-2 h-2 inline-block rounded-full", bulletActiveClass: "w-5 h-5" }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={onSlideChange}
        >
          <SwiperSlide className="h-screen flex items-center justify-center">
            <p>Slide 1</p>
          </SwiperSlide>
          <SwiperSlide className="h-screen flex items-center justify-center">
            <p>Slide 2</p>
          </SwiperSlide>
          <SwiperSlide className="h-screen flex items-center justify-center ">
            <p>Slide 3</p>
          </SwiperSlide>
          <SwiperSlide className="h-screen flex items-center justify-center">
            <p>Slide 4</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import bannerImage from "@/assets/bannercopy.png";
import CurvedButton from "../buttons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BannerCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="paginationStyle ' + className + '">' + "</span>";
    },
  };
  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      speed={800}
      loop={true}
      modules={[Autoplay, Pagination]}
      pagination={pagination}
      slidesPerView={1}
      className="bg-black w-full aspect-[16/6.5] relative "
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-primary flex h-full items-center justify-center relative">
        <Image src={bannerImage.src} className="object-cover object-right-top" layout="fill" alt="Compulsory" />
        <div className="absolute text-white left-0 top-1/2 -translate-y-1/2 ps-[35px] max-w-[380px] space-y-14">
          <h1 className="text-5xl font-bold">Glow Naturally, Shine Confidently</h1>
          <CurvedButton>Discover More</CurvedButton>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-primary flex h-full items-center justify-center">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-primary flex h-full items-center justify-center">Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default BannerCarousel;

"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";

const banners = [
  {
    id: 1,
    title: "Summer Sale 2026",
    subtitle: "Up to 50% Off on Fashion & Electronics",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Latest trending products just for you",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600",
  },
  {
    id: 3,
    title: "Best Deals",
    subtitle: "Shop smart & save more every day",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600",
  },
];

export default function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div
              className="w-full bg-cover bg-center flex items-center
              h-[250px] sm:h-[300px] md:h-[450px] lg:h-[550px]"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="w-full h-full bg-black/50 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">

                  {/* 🔥 KEY FIX: key changes every slide */}
                  {activeIndex === index && (
                    <>
                      <p className="text-[#FBBF24] font-semibold mb-2 animate__animated animate__fadeInDown">
                        Exclusive Offer
                      </p>

                      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-2xl animate__animated animate__fadeInLeft">
                        {banner.title}
                      </h1>

                      <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-xl animate__animated animate__fadeInUp">
                        {banner.subtitle}
                      </p>

                      <button className="mt-6 bg-[#FBBF24] text-[#6C4F00] px-5 py-2 md:px-6 md:py-3 rounded-xl font-semibold hover:scale-105 transition cursor-pointer">
                        Shop Now
                      </button>
                    </>
                  )}

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
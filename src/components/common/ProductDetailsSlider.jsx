"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/app/slider.css";
import Image from "next/image";

export default function ProductDetailsSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Ensure images array contains valid paths
  const validImages = images.map(img => img || '/images/w-6.png');

  return (
    <div className="relative rounded-2xl ">
      <div className="aspect-square">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full rounded-2xl max-h-[741px]"
        >
          {validImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square w-full">
                <Image
                  src={img}
                  fill
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-5 w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[137px] w-full"
        >
          {validImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square w-full h-full cursor-pointer !max-w-[217px] max-h-[137px]">
                <Image
                  src={img}
                  width={217}
                  height={137}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full !object-cover rounded-2xl !object-center"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../app/slider.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { SliderData } from "./common/Helper";
import Text from "./common/Text";
import Image from "next/image";
import ActionButton from "./common/ActionButton";

function Slider() {
  return (
    <div className="max-w-[1400px] w-full mx-auto mt-[150px] !h-[770px] rounded-2xl overflow-hidden ">
      <div className="max-w-[1400px] w-full ">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            // bulletClass: "custom-pagination-bullet",
            // bulletActiveClass: "custom-pagination-bullet-active",
          }}
          slidesPerView={1}
          loop={true}
          className="max-w-[1400px] !h-[770px] rounded-2xl "
        >
          {SliderData.map((slide) => {
            return (
              <SwiperSlide>
                <div
                  className="w-full relative flex items-center justify-between bg-gray-800 text-white text-2xl bg-custom-gradient2 z-10"
                  key={slide.id}
                >
                  <Image
                    src={slide.img}
                    alt={slide.alt}
                    width={1140}
                    height={770}
                    className="w-full max-w-[1400px] rounded-2xl absolute top-px z-0 object-stretch bg-custom-gradient2"
                  />
                  <div
                    className={`absolute ${slide.position} left-[40px] max-w-[718px] flex flex-col gap-y-10 ${slide.TextWidth}`}
                  >
                    <div className="w-full flex flex-col gap-y-2 ">
                      <h1 className={`${slide.Montserratstyle} `}>
                        {slide.MontserratLabel}{" "}
                        <span className={`${slide.EditorialStyle}`}>
                          {" "}
                          {slide.EditorialLabel}{" "}
                        </span>
                      </h1>
                      <p className="max-w-[496px] text-primary">
                        <Text label={slide.paragraph} size="xsm" />
                      </p>
                    </div>
                    <div className="max-w-[306px] flex max-h-[72px] items-center">
                      <ul className="flex flex-col gap-y-1 font-MontserratMedium text-primary max-w-[95px]">
                        <li className="text-base">Größe</li>
                        <li className="text-xl">60x60cm</li>
                        <li className="text-base">SOLIS</li>
                      </ul>
                      <div className="h-[70px] border border-primary mx-8"></div>
                      <ul className="flex flex-col gap-y-1 font-MontserratMedium text-primary max-w-[147px]">
                        <li className="text-base">Smart Mirror</li>
                        <li className="text-xl">259 €</li>
                        <li className="text-base">Premium Qualität</li>
                      </ul>
                    </div>
                  </div>
                  <div className="max-w-[336px] flex gap-x-4 absolute top-[634px] right-[130px]">
                    <ActionButton
                      label="Jetzt kaufen"
                      color="primary"
                      size="lg"
                    />
                    <ActionButton
                      label="Mehr erfahren"
                      size="md"
                      color="secondary"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;

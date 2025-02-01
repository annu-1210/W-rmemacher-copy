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
    <section className="max-w-[1920px] w-full mx-auto mt-[120px] lg:mt-[150px] h-[520px] lg:h-[770px] rounded-2xl overflow-hidden ">
      <div className="max-w-[1920px] w-full ">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "custom-pagination-bullet",
            bulletActiveClass: "custom-pagination-bullet-active",
          }}
          slidesPerView={1}
          loop={true}
          className="max-w-[1920px] h-[520px] lg:h-[770px] rounded-2xl "
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
                    key={slide.id}
                    width={1140}
                    height={770}
                    className="w-full max-h-[520px] lg:max-h-[770px] max-w-[1920px] rounded-2xl absolute top-px z-0 object-cover object-center bg-custom-gradient2"
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
                      <div className="flex flex-col  xl:gap-y-1 font-MontserratMedium text-primary max-w-[95px]">
                        <p className=" text-xs lg:text-sm xl:text-base">
                          Größe
                        </p>
                        <p className=" text-sm lg:text-base xl:text-xl">
                          60x60cm
                        </p>
                        <p className=" text-xs lg:text-sm xl:text-base">
                          SOLIS
                        </p>
                      </div>
                      <div className="h-[70px] border border-primary mx-8"></div>
                      <div className="flex flex-col  xl:gap-y-1 font-MontserratMedium text-primary max-w-[147px]">
                        <p className=" text-xs lg:text-sm xl:text-base">
                          Smart Mirror
                        </p>
                        <p className=" text-sm lg:text-base xl:text-xl">
                          259 €
                        </p>
                        <p className=" text-xs lg:text-sm xl:text-base">
                          Premium Qualität
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[336px] flex gap-x-4 absolute top-[420px] lg:top-[680px] xl:top-[634px] right-[50px] xl:right-[130px]">
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
    </section>
  );
}

export default Slider;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { SliderData } from "./common/Helper";
import Text from "./common/Text";
import Image from "next/image";
import ActionButton from "./common/ActionButton";

function ProductSlider() {
  return (
    <section className="max-w-[1920px] w-full mx-auto mt-[80px] sm:mt-[120px] lg:mt-[150px] h-[320px] sm:h-[400px] md:h-[520px] lg:h-[770px] rounded-2xl overflow-hidden ">
      <div className="max-w-[1920px] w-full ">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "custom-pagination-bullet",
            bulletActiveClass: "custom-pagination-bullet-active",
          }}
          slidesPerView={1}
          loop={false}
          className="max-w-[1920px] h-[320px] sm:h-[400px] md:h-[520px] lg:h-[770px] rounded-2xl "
        >
          {SliderData.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="w-full relative flex items-center justify-between text-white text-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.description}
                    width={1140}
                    height={770}
                    priority={true}
                    className="w-full h-[320px] sm:h-[400px] md:h-[520px] lg:h-[770px] max-w-[1920px] rounded-2xl absolute inset-0 z-0 object-cover object-center "
                  />
                  <div className="absolute max-w-[1920px] h-[770px] inset-0 bg-custom-gradient2 z-10"></div>
                  <div
                    className={`absolute ${slide.layout.position} w-full flex flex-col gap-y-6 md:flex-row justify-between pr-4 sm:pr-10 xl:pr-[130px] pl-4 sm:pl-10 z-20 `}
                  >
                    <div
                      className={`max-w-[250px] xsm:max-w-[300px] md:max-w-[718px] flex flex-col gap-y-6 md:gap-y-10 ${slide.layout.textWidth}`}
                    >
                      <div className="w-full flex flex-col gap-y-2 text-base xsm:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-5 xsm:leading-6 sm:leading-8 md:leading-[40px] lg:leading-[60px] xl:leading-[73.14px] ">
                        <h1 className={`${slide.heading.primaryStyle} `}>
                          {slide.heading.primaryText}{" "}
                          <span className={`${slide.heading.secondaryStyle}`}>
                            {" "}
                            {slide.heading.secondaryText}{" "}
                          </span>
                        </h1>
                        <p className="w-full xsm:max-w-[496px] text-primary">
                          <Text label={slide.description} size="xsm" />
                        </p>
                      </div>
                      <div className="max-w-[306px] flex items-center">
                        <div className="flex flex-col gap-y-1 font-MontserratMedium text-primary sm:max-w-[95px]">
                          <p className="text-xs lg:text-sm xl:text-base">
                            Größe
                          </p>
                          <p className="text-xs xsm:text-sm lg:text-base xl:text-xl ">
                            60x60cm
                          </p>
                          <p className=" text-xs lg:text-sm xl:text-base">
                            SOLIS
                          </p>
                        </div>
                        <div className="h-[50px] sm:h-[70px] border border-primary mx-8"></div>
                        <div className="flex flex-col gap-y-1 font-MontserratMedium text-primary sm:max-w-[147px]">
                          <p className="text-xs lg:text-sm xl:text-base">
                            Smart Mirror
                          </p>
                          <p className="text-xs xsm:text-sm lg:text-base xl:text-xl">
                            259 €
                          </p>
                          <p className="text-xs lg:text-sm xl:text-base">
                            Premium Qualität
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex items-end gap-x-4 justify-start md:justify-end max-w-[260px] lg:max-w-[336px]">
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
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductSlider;

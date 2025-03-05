"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Text from "./Text";
import Image from "next/image";
import ActionButton from "./ActionButton";
import SecondaryButton from "./SecondaryButton";

function GuideAndBlogSlider({ SliderData }) {
  return (
    // <section className="max-w-[1920px] w-full mx-auto max-h-[320px] sm:max-h-[400px] md:max-h-[520px] lg:max-h-[770px] rounded-2xl overflow-hidden ">
      <div className="max-w-[1920px] w-full h-full">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "custom-pagination-bullet",
            bulletActiveClass: "custom-pagination-bullet-active",
          }}
          slidesPerView={1}
          loop={false}
          className="max-w-[1920px] rounded-2xl h-full "
        >
          {SliderData.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="w-full relative flex items-center justify-between h-full">
                  <div
                    className={`w-[${slide.dimensions.width}px] h-[${slide.dimensions.height}px] `}
                  >
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      width={slide.dimensions.width}
                      height={slide.dimensions.height}
                      priority={true}
                      className={`w-full h-full max-w-[1920px] rounded-2xl absolute inset-0 z-0 object-cover ${slide.image.position} `}
                    />
                  </div>

                  <div className="absolute max-w-[1920px] h-[350px] sm:h-[440px] md:h-[520px] lg:h-[662px] xl:h-[770px] inset-0 bg-custom-gradient2 z-10"></div>
                  <div
                    className={`absolute ${slide.layout.position} w-full flex flex-col gap-y-5 md:gap-y-10 px-4 sm:px-8 lg:px-10 z-20 `}
                  >
                    {slide.buttonText && (
                      <div className="w-full max-w-[172px] flex items-center justify-start">
                        <SecondaryButton
                          label={slide.buttonText}
                          size="xl"
                          color="primary"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[250px] xsm:max-w-[300px] md:max-w-[686px] w-full flex flex-col gap-y-2 ${slide.layout.textWidth}`}
                    >
                      <h1 className="text-base xsm:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-primary capitalize ">
                        <span className="font-MontserratMedium leading-5 xsm:leading-6 sm:leading-8 md:leading-[40px] lg:leading-[60px] xl:leading-[73.14px] ">
                          {slide.heading.primaryText}{" "}
                        </span>
                        <span className="font-PpEditorialRegular italic leading-5 xsm:leading-6 sm:leading-8 md:leading-[43px] lg:leading-[63px] xl:leading-[76.8px] ">
                          {" "}
                          {slide.heading.secondaryText}{" "}
                        </span>
                      </h1>
                      <p className="w-full xsm:max-w-[534px] text-primary">
                        <Text label={slide.description} size="xsm" />
                      </p>
                    </div>

                    <div className="w-full flex justify-start max-w-[311px]">
                      <ActionButton
                        label="Mehr erfahren"
                        size="md"
                        color="primary"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    // </section>
  );
}

export default GuideAndBlogSlider;

"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Text from "./common/Text";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import { aboutSectionSlides } from "./common/Helper";

export default function AboutSectionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const introText =
    "Unsere Spiegel setzen neue Maßstäbe in Ihrem Badezimmer und definieren Technologie, Funktionalität, Design und Komfort völlig neu. Erleben Sie mit Wärmemacher die nächste Generation Ihres Badezimmers.";

  return (
    <section className="aboutSectionSlider relative max-w-[1920px] mx-auto bg-secondary p-[60px] rounded-2xl mt-40 flex items-center justify-center">
      <Image
        src="/images/yellow-blur.png"
        width={500}
        height={500}
        alt="yellow circular graphic adding contrast to the design"
        className="absolute top-0 left-0 "
      />
      <Image
        src="/images/red-blur.png"
        width={500}
        height={500}
        alt="red circular graphic adding contrast to the design"
        className="absolute bottom-0 right-0"
      />

      <div className="flex flex-col items-start justify-start gap-y-10">
        <div className="flex flex-col items-center justify-start gap-y-2 max-w-[939px] xl:ml-[76px] 2xl:ml-[72px] z-10">
          <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 xsm:leading-[51.2px] text-start w-full text-primary">
            <span className="font-MontserratMedium">Puristisches </span>
            <span className="font-PpEditorialRegular italic leading-5 xsm:leading-[53.7px]">
              Design von Morgen
            </span>
          </h3>
          <p className="text-ironGray w-full">
            <Text label={introText} size="xsm" />
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 w-[1150px] 3xl:w-[1283.14px] 4xl:w-[1620px] relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="mb-4 xl:max-w-[1000px] 2xl:max-w-[1140px] 4xl:max-w-[1480px] w-full h-[498px] rounded-2xl"
          >
            {aboutSectionSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-64 bg-transparent max-w-[1000px] 2xl:max-w-[1140px] h-[498px] rounded-2xl">
                  <Image
                    fill={true}
                    src={slide.imageSrc}
                    alt={slide.title}
                    className="rounded-md max-w-[1000px] 2xl:max-w-[1140px] h-full object-cover object-center relative"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-prev absolute top-[225px] left-0 rounded-full bg-transparent text-primary w-[47.14px] h-[47.14px] cursor-pointer border-[0.93px] border-primary flex items-center justify-center">
            <SlArrowLeft size={20} />
          </div>
          <div className="custom-next absolute top-[225px] right-0 rounded-full bg-transparent text-primary w-[47.14px] h-[47.14px] cursor-pointer border-[0.93px] border-primary flex items-center justify-center">
            <SlArrowRight size={20} />
          </div>
          <div className="flex gap-4 2xl:gap-6 4xl:gap-12 w-[1000px] 3xl:w-[1140px] 4xl:w-[1480px]">
            {aboutSectionSlides.map((slide, index) => (
              <div
                key={index}
                className="p-4 rounded-lg w-[238px] 2xl:w-[267px] 4xl:w-[330px] h-[280px] 2xl:h-[232px]  border border-glassWhite bg-transparent"
              >
                <div className="flex flex-col items-start justify-start gap-y-2">
                  <h3
                    className={`font-MontserratRegular !leading-[18px] xsm:!leading-6 h-[48px] text-xs xsm:text-sm md:text-base lg:text-lg xl:text-xl  ${
                      activeIndex === index ? "text-tertiary" : "text-primary"
                    }`}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className={`${
                      activeIndex === index ? "text-primary" : "text-glassWhite"
                    }`}
                  >
                    <Text label={slide.description} size="xsm" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

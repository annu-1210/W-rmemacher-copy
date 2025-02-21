"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Text from "./Text";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import { aboutSectionSlides } from "./Helper";

export default function AboutSectionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const introText =
    "Unsere Spiegel setzen neue Maßstäbe in Ihrem Badezimmer und definieren Technologie, Funktionalität, Design und Komfort völlig neu. Erleben Sie mit Wärmemacher die nächste Generation Ihres Badezimmers.";

  return (
    <div className="SectionSlider relative max-w-[1920px] mx-auto bg-secondary p-7 md:p-5 lg:p-8 xl:p-[60px] rounded-2xl flex items-center justify-center">
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

      <div className="flex flex-col w-full items-start justify-start gap-y-10">
        <div className="flex flex-col items-center justify-start gap-y-1 md:gap-y-2 max-w-[939px] md:ml-12 lg:ml-16 xl:ml-[76px] 2xl:ml-[72px] z-10">
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
        <div className="flex flex-col items-center justify-center gap-y-16 md:gap-y-2 w-[544px] md:w-[688px] lg:w-[920px] xl:w-[1120px] 3xl:w-[1283.14px] 4xl:w-[1620px] relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="mb-4 w-[600px] lg:w-[850px] xl:max-w-[1000px] 2xl:max-w-[1140px] 4xl:max-w-[1480px] w-full h-[320px] lg:h-[420px] xl:h-[498px] rounded-2xl flex items-center justify-center"
          >
            {aboutSectionSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center mx-auto h-64 bg-transparent md:w-[600px] lg:max-w-[790px] xl:max-w-[1000px] 2xl:max-w-[1140px] h-[320px] lg:h-[400px] xl:h-[498px] rounded-2xl">
                  <Image
                    width={1140}
                    height={498}
                    src={slide.imageSrc}
                    alt={slide.title}
                    className="rounded-md w-full h-full object-cover object-center relative"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-prev absolute top-[330px] md:top-36 lg:top-48 xl:top-[225px] left-[43%] md:left-0 rounded-full bg-transparent text-primary w-8 lg:w-[47.14px] h-8 lg:h-[47.14px] cursor-pointer border-[0.93px] border-primary flex items-center justify-center">
            <SlArrowLeft size={20} className="w-2.5 lg:w-5 h-2.5 lg:h-5"/>
          </div>
          <div className="custom-next absolute top-[330px] md:top-36 lg:top-48 xl:top-[225px] right-[43%] md:right-0 rounded-full bg-transparent text-primary w-8 lg:w-[47.14px] h-8 lg:h-[47.14px] cursor-pointer border-[0.93px] border-primary flex items-center justify-center">
            <SlArrowRight size={20} className="w-2.5 lg:w-5 h-2.5 lg:h-5"/>
          </div>
          <div className="flex flex-wrap gap-5 md:gap-7 xl:gap-4 2xl:gap-6 4xl:gap-12 w-[544px] md:w-[600px] lg:w-[790px] xl:w-[1000px] 3xl:w-[1140px] 4xl:w-[1480px]">
            {aboutSectionSlides.map((slide, index) => (
              <div
                key={index}
                className="p-4 rounded-lg w-[262px] md:w-[284px] lg:w-[380px] xl:w-[238px] 2xl:w-[267px] 4xl:w-[340px] h-[170px] xl:h-[280px] 2xl:h-[232px]  border border-glassWhite bg-transparent"
              >
                <div className="flex flex-col items-start justify-start gap-y-2">
                  <h3
                    className={`font-MontserratRegular !leading-[18px] xsm:!leading-6  xl:h-[48px] text-xs xsm:text-sm md:text-base lg:text-lg xl:text-xl  ${
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
    </div>
  );
}

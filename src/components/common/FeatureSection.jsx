import React from "react";
import Text from "./Text";
import Image from "next/image";
import ActionButton from "./ActionButton";
import Link from "next/link";

function FeatureSection({ imageSrc, heading, description, layout }) {
  // Ensure imageSrc is a string path
  const imagePath = imageSrc || '/images/w-6.png';
  
  return (
    <div className="max-w-[1920px] w-full">
      <div className="w-full relative flex items-center justify-between text-white text-2xl bg-cover">
        <Link href={`/products/solis?image=${encodeURIComponent(imagePath)}`}>
          <Image
            src={imagePath}
            alt={heading}
            width={1140}
            height={770}
            priority={true}
            className="w-full h-[320px] sm:h-[400px] md:h-[520px] lg:h-[696px] max-w-[1920px] rounded-2xl absolute inset-0 z-0 object-cover object-center cursor-pointer"
          />
        </Link>
        <div className="absolute max-w-[1920px] h-[696px] inset-0 bg-custom-gradient2 z-10"></div>
        <div
          className={`absolute ${layout.position} w-full flex flex-col gap-y-6 md:flex-row justify-between px-4 sm:px-10 z-10`}
        >
          <div
            className={`max-w-[250px] xsm:max-w-[300px] md:max-w-[718px] flex flex-col gap-y-6 md:gap-y-10 ${layout.textWidth}`}
          >
            <div className="w-full flex flex-col gap-y-2 text-base xsm:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-5 xsm:leading-6 sm:leading-8 md:leading-[40px] lg:leading-[60px] xl:leading-[73.14px] ">
              <h1 className={`${heading.primaryStyle} `}>
                {heading.primaryText}{" "}
                <span className={`${heading.secondaryStyle}`}>
                  {" "}
                  {heading.secondaryText}{" "}
                </span>
              </h1>
              <p className="w-full xsm:max-w-[496px] text-primary">
                <Text label={description} size="xsm" />
              </p>
            </div>
            <div className="max-w-[306px] flex items-center">
              <div className="flex flex-col gap-y-1 font-MontserratMedium text-primary sm:max-w-[95px]">
                <p className="text-xs lg:text-sm xl:text-base">Größe</p>
                <p className="text-xs xsm:text-sm lg:text-base xl:text-xl ">
                  60x60cm
                </p>
                <p className=" text-xs lg:text-sm xl:text-base">SOLIS</p>
              </div>
              <div className="h-[50px] sm:h-[70px] border border-primary mx-8"></div>
              <div className="flex flex-col gap-y-1 font-MontserratMedium text-primary sm:max-w-[147px]">
                <p className="text-xs lg:text-sm xl:text-base">Smart Mirror</p>
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
            <Link href={`/products/solis?image=${encodeURIComponent(imagePath)}`}>
              <ActionButton label="Jetzt kaufen" color="primary" size="lg" />
            </Link>
            <Link href={`/products/solis?image=${encodeURIComponent(imagePath)}`}>
              <ActionButton label="Mehr erfahren" size="md" color="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;

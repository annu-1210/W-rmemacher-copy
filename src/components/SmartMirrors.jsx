import React from "react";
import { smartMirrorsData } from "./common/Helper";
import Image from "next/image";
import Text from "./common/Text";
import ImageTextLayout from "./common/ImageTextLayout";
import Link from "next/link";

function SmartMirrors() {
  return (
    <div className="container max-w-[950px] xl:max-w-[1140px] mx-auto flex flex-col items-center justify-center bg-transparent mt-28 lg:mt-[150px] sm:px-10 md:px-0  gap-y-20  md:gap-y-28 xl:gap-y-36">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-y-10 md:gap-3 lg:gap-6 ">
        <div className="flex flex-col gap-y-3 lg:gap-y-5 max-w-[587px] ">
          <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[32px] xl:text-[42px] leading-4 lg:leading-[51.2px] text-start max-w-[542px]">
            <span className="font-MontserratMedium">
              {smartMirrorsData[0].heading.regular}
            </span>
            <span className="font-PpEditorialRegular italic leading-5 lg:leading-[53.7px]">
              {smartMirrorsData[0].heading.italic}
            </span>
          </h3>
          <p className="w-full text-ironGray">
            <Text label={smartMirrorsData[0].content} size="md" />
          </p>
          <ul className="list-none list-inside w-full text-ironGray pl-3 flex flex-col lg:gap-y-2 ">
            {smartMirrorsData[0].list.map((item, index) => (
              <li
                key={index}
                className="flex items-center font-MontserratRegular text-xs xsm:text-sm lg:text-xl xl:text-2xl before:content-['•'] before:text-lg lg:before:text-2xl before:mr-2 lg:before:mr-4 leading-loose"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-[474px] text-tertiaryRed font-MontserratMedium italic text-xs xsm:text-sm sm:text-base lg:text-xl xl:text-2xl leading-4 xsm:leading-5 sm:leading-6 lg:leading-8 xl:leading-[33.6px]">
            {smartMirrorsData[0].footerNote}
          </p>
        </div>
        <div className="max-w-full md:max-w-[310px] lg:max-w-[450px] xl:max-w-[529px] h-[380px] lg:h-[560px] xl:h-[608px]">
          <Link
            href={`/products/solis?image=${encodeURIComponent(
              "/images/w-13.png"
            )}`}
          >
            <Image
              src="/images/w-13.png"
              alt="Solis Smart Mirror"
              width={529}
              height={608}
              className="rounded-2xl relative w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-full lg:h-[578px]">
        <ImageTextLayout layout={smartMirrorsData[1]} />
      </div>
    </div>
  );
}

export default SmartMirrors;

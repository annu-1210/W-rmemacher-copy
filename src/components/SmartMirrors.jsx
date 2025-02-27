import React from "react";
import { smartMirrorsData } from "./common/Helper";
import Image from "next/image";
import Text from "./common/Text";
import ImageTextLayout from "./common/ImageTextLayout";

function SmartMirrors() {
  return (
    <div className="container max-w-[950px] xl:max-w-[1140px] mx-auto flex flex-col items-center justify-center bg-transparent mt-[150px] gap-y-28 xl:gap-y-36">
      <div className="flex xl:items-center justify-between gap-0 xl:gap-6 ">
        <div className="flex flex-col px-5 xl:px-0 gap-y-5 max-w-[587px] ">
          <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 xsm:leading-[51.2px] text-start max-w-[542px]">
            <span className="font-MontserratMedium">
              {smartMirrorsData[0].heading.regular}
            </span>
            <span className="font-PpEditorialRegular italic leading-5 xsm:leading-[53.7px]">
              {smartMirrorsData[0].heading.italic}
            </span>
          </h3>
          <p className="w-full text-ironGray">
            <Text label={smartMirrorsData[0].content} size="md" />
          </p>
          <ul className="list-none list-inside w-full text-ironGray pl-3">
            {smartMirrorsData[0].list.map((item, index) => (
              <li
                key={index}
                className="font-MontserratRegular text-xs xsm:text-sm sm:text-base lg:text-xl xl:text-2xl leading-4 xsm:leading-5 sm:leading-6 lg:leading-8 xl:leading-9 before:content-['•'] before:text-2xl before:mr-4"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-[474px] text-tertiaryRed font-MontserratMedium italic text-xs xsm:text-sm sm:text-base lg:text-xl xl:text-2xl leading-4 xsm:leading-5 sm:leading-6 lg:leading-8 xl:leading-[33.6px]">
            {smartMirrorsData[0].footerNote}
          </p>
        </div>
        <div className="max-w-[420px] xl:max-w-[529px] h-[560px] xl:h-[608px]">
          <Image
            src="/images/w-13.png"
            alt=""
            width={529}
            height={608}
            className="rounded-2xl relative w-full h-full object-cover"
          />
        </div>
      </div>
      <ImageTextLayout layout={smartMirrorsData[1]}/>
    </div>
  );
}

export default SmartMirrors;

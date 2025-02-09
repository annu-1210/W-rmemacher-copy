import React from "react";
import { tv } from "tailwind-variants";

const text = tv(
  {
    base: "flex relative",
    variants: {
      color: {
        primary: "text-neutral",
        secondary: "text-secondary",
      },
      size: {
        xsm: "text-[8px] xsm:text-[10px] sm:text-xs lg:text-sm xl:text-base font-MontserratRegular leading-3 sm:leading-4 lg:leading-5 xl:leading-6 max-w-[496px]",
        sm: "font-MontserratRegular font-normal leading-[18px] xsm:leading-6 md:leading-7 lg:leading-[30px] text-xs xsm:text-sm md:text-base lg:text-lg xl:text-xl max-w-[700px]",
        md: "font-MontserratRegular text-xs xsm:text-sm sm:text-base lg:text-xl xl:text-2xl leading-4 xsm:leading-5 sm:leading-6 lg:leading-8 xl:leading-9 lg:max-w-[655px]",
        lg: "text-[42px] font-MontserratMedium leading-[51.2px] text-center",
        xl: "text-[50px] font-MontserratMedium max-w-[615px] leading-60% ",
        xxl: "text-6xl leading-[73.14px] transition-all mx-auto max-w-[732px] font-MontserratMedium",
      },
    },
  },
  {
    twMerge: false,
  }
);

function Text({ label, size, color }) {
  return <span className={text({ size, color })}>{label}</span>;
}

export default Text;
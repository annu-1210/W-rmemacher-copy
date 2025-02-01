import React from "react";
import { tv } from "tailwind-variants";

const text = tv(
  {
    base: "flex z-10 relative",
    variants: {
      color: {
        primary: "text-neutral",
        secondary: "text-secondary",
      },
      size: {
        xsm: "text-sm xl:text-base font-MontserratRegular leading-5 xl:leading-6 max-w-[496px]",
        sm: "font-MontserratRegular font-normal leading-[30px] text-lg xl:text-xl max-w-[420px]",
        md: "font-MontserratRegular text-xl xl:text-2xl leading-8 xl:leading-9 max-w-[655px]",
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
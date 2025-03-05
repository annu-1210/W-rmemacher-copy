import React from "react";
import { tv } from "tailwind-variants";

const button = tv(
  {
    base: "!rounded-lg text-center flex items-center justify-center font-Gilroy text-[10px] xsm:text-xs md:text-sm lg:text-base xl:text-lg text-primary h-[30px] xsm:h-[32px] md:h-[38px] lg:h-[42px] xl:h-[46px] gap-2.5 ",
    variants: {
      color: {
        primary: "bg-custom-gradient",
        secondary: "gradient-border ",
        tertiary:"bg-transparent gradient-border3 !text-ironGray hover:bg-custom-gradient hover:!text-primary",  
      },
      size: {
        xsm: "w-[95px] !h-[30px] px-2.5 py-2 xsm:py-[11.63px] !gap-[8.31px] text-[10px] xsm:!text-sm",
        sm: "w-[138px] sm:w-[100px] md:w-[116.91px] lg:w-[138px] px-6 sm:px-5 md:px-6 py-3.5 xsm:py-3 md:py-3.5",
        md: "w-[100px] xsm:w-[120px] lg:w-[150px] xl:w-[160px] px-1 sm:px-2 xl:px-3 p sm:py-2.5 xl:py-3.5 ",
        lg: "w-[90px] xsm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 xl:py-3.5",
        xl: "w-[110px] xsm:w-[130px] md:w-[150px] lg:w-[180px] xl:w-[191px] px-4 xsm:px-5 md:px-6 py-2.5 xsm:py-3 md:py-3.5",
        xxl: "w-full px-4 xsm:px-5 md:px-6 py-2.5 xsm:py-3 md:py-3.5 !text-base xsm:!text-lg sm:!text-xl xl:!text-2xl !h-10 xsm:!h-12 sm:!h-14",
      },
    },
  },
  {
    twMerge: false,
  }
);

function ActionButton({ label, color, size }) {
  return <button className={button({ color, size })}>{label}</button>;
}

export default ActionButton;

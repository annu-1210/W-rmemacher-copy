import React from "react";
import { tv } from "tailwind-variants";

const button = tv(
  {
    base: "!rounded-lg text-center flex items-center justify-center font-Gilroy text-sm lg:text-base xl:text-lg text-primary h-[38px] lg:h-[42px] xl:h-[46px] gap-2.5 ",
    variants: {
      color: {
        primary: "bg-custom-gradient",
        secondary: "bg-transparent border",
      },
      size: {
        sm: "w-[95px] !h-[30px] px-2.5 py-[11.63px] !gap-[8.31px] !text-sm",
        md: "w-[120px] lg:w-[140px] xl:w-[160px] px-2 xl:px-3 py-2.5 xl:py-3.5 ",
        lg: "w-[120px] lg:w-[140px] xl:w-[160px] px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 xl:py-3.5",
        xl: "w-[191px] px-6 py-3.5",
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

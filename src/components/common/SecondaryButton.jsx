import React from "react";
import { tv } from "tailwind-variants";

const button = tv(
  {
    base: "!rounded-full border text-center flex items-center justify-center font-MontserratMedium text-[10px] xsm:text-xs md:text-sm lg:text-base text-transparent bg-clip-text bg-custom-gradient h-[30px] xsm:h-[32px] md:h-[38px] lg:h-[42px] xl:h-[46px] gap-2.5 ",
    variants: {
      color: {
        primary: "bg-glassLight border-glassMedium",
        secondary: "gradient-border2",
      },
      size: {
        xl: "w-[100px] xsm:w-[120px] lg:w-[150px] xl:w-[172px] px-4 xsm:px-5 py-2.5 xsm:py-3 md:py-3.5",
      },
    },
  },
  {
    twMerge: false,
  }
);

function SecondaryButton({ label, color, size }) {
  return <button className={button({ color, size })}>{label}</button>;
}

export default SecondaryButton;

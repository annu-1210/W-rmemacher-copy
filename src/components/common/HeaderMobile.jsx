"use client";
import React from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";

function HeaderMobile() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-12 fixed inset-0 py-6 w-full h-screen z-[999] backdrop-blur bg-custom-gradient2 rounded-lg">
      <a href="/" className="flex w-[50px] sm:w-[77px] sm:h-[66px]">
        <Logo width={77} height={66} style={{color:"black"}}/>
      </a>
      <div className="flex flex-col items-center gap-y-4 sm:gap-y-5 relative z-[999]">
        {HeaderLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-neutral text-base sm:text-lg font-MontserratMedium underline-animation hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeaderMobile;

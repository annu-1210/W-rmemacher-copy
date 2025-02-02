"use client";
import React from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";

function HeaderMobile() {
  return (
    <div className="flex flex-col items-center gap-y-4 sm:gap-y-10 relative py-6 relative w-full h-[calc(100vh-102px)] sm:h-[calc(100vh-110px)]  z-20 backdrop-blur-sm bg-transparent">
      <a href="/" className="flex w-[50px] sm:w-[77px] sm:h-[66px]">
        <Logo width={77} height={66} style={{color:"black"}}/>
      </a>
      <div className="flex flex-col items-center gap-y-4 sm:gap-y-5 relative z-20">
        {HeaderLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="text-neutral text-base sm:text-lg font-MontserratMedium"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeaderMobile;

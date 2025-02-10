import Image from "next/image";
import React from "react";

function FloatingActionButton() {
  return (
    <div className="flex items-center justify-center w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-full bg-custom-gradient z-50 fixed right-[50px] md:right-[60px] lg:right-[70px] 3xl:right-[65px] ">
      <Image
        width={40}
        height={33}
        alt="support-image"
        src="/support.svg"
        className="max-w-8 xsm:max-w-10 max-h-8 xsm:max-h-[33px]"
      />
    </div>
  );
}

export default FloatingActionButton;

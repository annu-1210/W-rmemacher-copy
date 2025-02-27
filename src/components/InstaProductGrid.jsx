import Image from "next/image";
import React from "react";

function InstaProductGrid() {
  const gramGallery = [
    {
      id: "smart-home-1",
      src: "/images/w-10.jpeg",
      width: 269,
    },
    {
      id: "smart-home-2",
      src: "/images/w-20.jpeg",
      width: 281,
    },
    {
      id: "smart-home-3",
      src: "/images/w-9.jpeg",
      width: 267,
    },
    {
      id: "smart-home-4",
      src: "/images/w-6.png",
      width: 281,
    },
  ];
  return (
    <div className="max-w-[1140px] mx-auto flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-[60px] justiy-center items-center mt-28 lg:mt-[150px] overflow-hidden">
      <div className="flex items-center justify-between gap-x-3.5 max-w-[414px]">
        <div className="w-[42px] h-[42px]">
          {" "}
          <Image
            src="/skill-icons_instagram.svg"
            width={42}
            height={42}
            alt="instagram"
            className="w-full h-full"
          />
        </div>
        <p className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 xsm:leading-[51.2px] text-start">
          @wärmemacher
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 lg:gap-5 w-full">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 lg:gap-4 w-full max-w-[569px]">
          {gramGallery.map((item) => {
            return (
              <div
                className="rounded-2xl h-full lg:h-[283px]"
                style={{ maxWidth: `${item.width}px` }}
                key={item.id}
              >
                <Image
                  src={item.src}
                  alt={item.id}
                  width={item.width}
                  height={283}
                  className=" rounded-2xl w-full sm:w-[310px] md:w-[195.5px] lg:w-full h-full sm:h-[200px] lg:h-full object-center object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="w-full sm:w-[569px] md:w-[552px] h-[416px] lg:h-[586px]  rounded-2xl">
          <Image
            src="/images/w-19.jpeg"
            alt="smart-home-5"
            width={552}
            height={586}
            className=" rounded-2xl w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default InstaProductGrid;

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
    <div className="max-w-[1140px] mx-auto flex flex-col gap-y-[60px] justiy-center items-center mt-[150px]">
      <div className="flex justify-between gap-x-3.5 max-w-[414px]">
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
      <div className="flex items-center justify-between gap-5 w-full">
        <div className="flex flex-wrap  gap-4 max-w-[569px]">
          {gramGallery.map((item) => {
            return (
              <div
                className="h-[283px] rounded-2xl "
                style={{ width: `${item.width}px` }}
                key={item.id}
              >
                <Image
                  src={item.src}
                  alt={item.id}
                  width={item.width}
                  height={283}
                  className=" rounded-2xl w-full h-full object-center object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="w-[552px] h-[586px]">
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

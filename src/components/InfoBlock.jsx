import React from "react";
import Text from "./common/Text";
import Image from "next/image";

function InfoBlock({ width, height, imageSrc, description, rowDirection }) {
  return (
    <div
      className={`max-w-[1400px] flex gap-7 justify between mx-auto bg-transparent flex-${rowDirection}`}
    >
      <div className="max-w-[686px] bg-primary rounded-2xl pl-10 py-10 ">
        <div className="max-w-[648px] flex flex-col gap-2 justify-start items-start">
          {description.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {item.heading && (
                <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 xsm:leading-[51.2px] text-start max-w-[510px]">
                  <span className="font-MontserratMedium">
                    {item.heading.regular}
                  </span>{" "}
                  <span className="font-PpEditorialRegular italic leading-5 xsm:leading-[53.7px]">
                    {item.heading.italic}
                  </span>
                </h3>
              )}

              {item.paragraph && (
                <div className="max-w-[613px]">
                  <p>
                    <Text label={item.paragraph} size="md" />
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="max-w-[608px] 2xl:max-w-[686px] rounded-2xl "
        style={{ height: `${height}px` }}
      >
        <Image
          src={imageSrc}
          alt=""
          width={width}
          height={height}
          className=" rounded-2xl w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}

export default InfoBlock;

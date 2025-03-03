import React from "react";
import Image from "next/image";
import Text from "./Text";
import SecondaryButton from "./SecondaryButton";
import clsx from "clsx";

function ImageTextLayout({ layout }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between flex-col",
        layout.flexDirection === "row" ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
      style={{ gap: `${layout.dimensions.gap}px` }}
    >
      <div
        className="flex items-center justify-center w-full"
        style={{
        height: `${layout.dimensions.height}px`,
         width: `${layout.dimensions.width}px`,
        }}
      >
        <Image
          src={layout.imageSrc}
          alt="image"
          width={layout.dimensions.width}
          height={layout.dimensions.height}
          className="rounded-2xl relative w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-3 max-w-[480px] xl:max-w-[553px] ">
        {layout.buttonText && (
          <div className="w-full max-w-[172px] flex items-center justify-center">
            <SecondaryButton 
              label={layout.buttonText}
              size="xl"
              color="secondary"
            />
          </div>
        )}
        <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 xsm:leading-[51.2px] text-start ">
          <span className="font-MontserratMedium">
            {" "}
            {layout.heading.regular}
          </span>
          <span className="font-PpEditorialRegular italic leading-5 xsm:leading-[53.7px]">
            {" "}
            {layout.heading.italic}
          </span>
        </h3>
        {layout.content.map((paragraph, index) => (
          <p key={index} className="max-w-[562px] text-ironGray">
            <Text label={paragraph} size="md" />
          </p>
        ))}
      </div>
    </div>
  );
}

export default ImageTextLayout;

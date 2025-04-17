"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Text from "./Text";
import SecondaryButton from "./SecondaryButton";
import clsx from "clsx";
import Link from "next/link";

function ImageTextLayout({ layout }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const imagePath = layout.imageSrc || "/images/w-6.png";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Set initial value
    setIsLargeScreen(mediaQuery.matches);

    // Add listener for changes
    const handleChange = (e) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={clsx(
        "flex items-center justify-between flex-col h-full w-full",
        layout.flexDirection === "row" ? "md:flex-row" : "md:flex-row-reverse",
        "gap-8 md:gap-6 lg:gap-0"
      )}
      style={
        isLargeScreen && layout.dimensions.gap
          ? { gap: `${layout.dimensions.gap}px` }
          : undefined
      }
    >
      <Link href={`/products/solis?image=${encodeURIComponent(imagePath)}`} className="flex  justify-center max-w-full md:max-w-[450px] xl:max-w-full 4xl:w-full  h-full 4xl:h-[580px]">
        <div className="flex  justify-center max-w-full md:max-w-[450px] xl:max-w-full 4xl:w-full h-full 4xl:h-[580px]">
          <Image
            src={layout.imageSrc}
            alt="image"
            width={layout.dimensions.width}
            height={layout.dimensions.height}
            className="rounded-2xl relative md:w-full h-[380px] lg:h-full object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-y-3 md:max-w-[360px] lg:max-w-[460px] xl:max-w-[553px] 4xl:max-w-[702px] h-full">
        {layout.buttonText && (
          <div className="w-full max-w-[172px] flex items-center justify-start">
            <SecondaryButton
              label={layout.buttonText}
              size="xl"
              color="secondary"
            />
          </div>
        )}
        <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[32px] xl:text-[42px] text-start ">
          <span className="font-MontserratMedium leading-5 sm:leading-[51.2px] ">
            {" "}
            {layout.heading.regular}
          </span>
          <span className="font-PpEditorialRegular italic leading-4 md:leading-[53.7px]">
            {" "}
            {layout.heading.italic}
          </span>
        </h3>
        {layout.content.map((paragraph, index) => (
          <p key={index} className="max-w-[562px] 4xl:max-w-full text-ironGray">
            <Text label={paragraph} size="md" />
          </p>
        ))}
      </div>
    </div>
  );
}

export default ImageTextLayout;

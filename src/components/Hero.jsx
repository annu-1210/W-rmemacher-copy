import React from "react";
import Header from "./common/Header";
import Image from "next/image";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";

function Hero() {
  const paragraph =
    "Verbinden Sie Ästhetik mit intelligenter Funktionalität in elegantem Design.";
  return (
    <div className="max-w-[1920px] max-h-[770px] h-[760px] relative overflow-hidden top-0 rounded-2xl">
      <Image
        src="/images/w-1.png"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full max-w-[1920px] rounded-2xl absolute top-px z-0"
      />
      <Header />
      <div className="container px-10 w-full absolute z-10 top-[363px] flex justify-between items-end max-w-[1920px]">
        <div className="flex flex-col max-w-[615px] gap-y-2">
          <h2 className="text-primary text-[50px] font-MontserratMedium ">
            Erleben Sie die Zukunft Ihres
            <span className="!font-PpEditorialRegular italic !text-6xl pl-4">
              Badezimmers mit Wärmemacher
            </span>
          </h2>
          <p className="max-w-[449px]">
            <Text label={paragraph} size="xsm" color="primary" />
          </p>
        </div>
        <div className="flex w-[340px] gap-x-4 z-10">
          <ActionButton label="Jetzt kaufen" color="primary" size="lg" />
          <ActionButton label="Mehr entdecken" size="md" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

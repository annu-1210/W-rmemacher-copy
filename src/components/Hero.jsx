import React from "react";
import Header from "./common/Header";
import Image from "next/image";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";

function Hero() {
  const paragraph =
    "Verbinden Sie Ästhetik mit intelligenter Funktionalität in elegantem Design.";
  return (
    <section className="hero-section">
      <div className="max-w-[1920px] h-[460px] lg:h-[662px] xl:h-[760px] relative overflow-hidden top-0 rounded-2xl">
        <Image
          src="/images/w-1.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full max-w-[1920px] rounded-2xl absolute top-px z-0"
        />
        <Header />
        <div className="container px-5 lg:px-10 w-full absolute top-[200px] lg:top-[280px] xl:top-[363px] flex justify-between items-end max-w-[1920px]">
          <div className="flex flex-col lg:max-w-[500px] xl:max-w-[615px] gap-y-2 ">
            <h2 className="text-primary text-4xl lg:text-[40px] xl:text-[50px] font-MontserratMedium leading-[46px] lg:leading-[55px] xl:leading-[60.95px]">
              Erleben Sie die Zukunft Ihres
              <span className="!font-PpEditorialRegular italic text-[40px] lg:text-[50px] xl:text-6xl pl-4 leading-[46px] lg:leading-[55px] xl:leading-[60.95px]">
                Badezimmers mit Wärmemacher
              </span>
            </h2>
            <p className=" max-w-[380px] lg:max-w-[449px] text-primary lg:text-neutral">
              <Text label={paragraph} size="xsm"  />
            </p>
          </div>
          <div className="flex w-[280px] lg:w-[340px] gap-x-4 ">
            <ActionButton label="Jetzt kaufen" color="primary" size="lg" />
            <ActionButton label="Mehr entdecken" size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

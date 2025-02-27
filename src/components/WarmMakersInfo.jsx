import Image from "next/image";
import React from "react";
import Text from "./common/Text";
import SmartHomeCard from "./SmartHomeCard";

function WarmMakersInfo() {
  const introText =
    "Hier trifft modernes und zeitloses Design auf technologische Funktionalität von Morgen. Unsere Wärmemacher Produkte steigern deine Vitalität durch Infrarotheizung, erleichtern dir den Alltag zwecks Smart Home und sorgen für eine wohltuende Atmosphäre während du am duschen oder baden bist. Verwandele dein Badezimmer in eine zukunftsausgerichtete Wohlfühloase – schon heute.";
  return (
    <section>
      <div className="max-w-[1400px] mt-28 lg:mt-[150px] flex flex-col gap-4 lg:gap-y-7 mx-auto">
        <div className="w-full flex items-center justify-center bg-custom-gradient6 rounded-2xl">
          <div className="max-w-[1057px] flex flex-col gap-y-16 md:gap-y-[50px] items-center justify-center py-5 sm:py-10 md:py-[68px] px-5 sm:px-10 mx-auto">
            <div className="max-w-[90px] sm:max-w-[120px] md:max-w-[146px] md:max-h-[127px]">
              <Image
                src="/white-logo.svg"
                alt="logo"
                width={146.97}
                height={127}
                className="relative w-full"
              />
            </div>

            <div className="flex flex-col gap-2 md:gap-3 w-full items-center justify-center ">
              <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] font-MontserratMedium leading-5 xsm:leading-[51.2px] text-start text-primary">
                Wir sind {""}
                <span className="font-PpEditorialRegular italic leading-5 xsm:leading-[53.7px]">
                  Wärmemacher
                </span>
              </h3>
              <p className="text-primary text-center max-w-[1000px]">
                <Text label={introText} size="md" />
              </p>
            </div>
          </div>
        </div>
        <SmartHomeCard />
      </div>
    </section>
  );
}

export default WarmMakersInfo;

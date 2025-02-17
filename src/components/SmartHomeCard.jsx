import React from "react";
import Text from "./common/Text";

function SmartHomeCard() {
  const introText =
    "Der intelligente Badezimmerspiegel von Wärmemacher kann über die mobile Wise App gesteuert werden und unterstützt nur ein 2,4-GHz-Netzwerk. Wenn Sie also einen Dualband-Router verwenden, trennen Sie bitte die 2,4G- und 5G-Netzwerke oder schalten Sie 5G aus, bis die WLAN-Verbindung hergestellt ist. Alternativ können Sie auch einen mobilen Hotspot über Ihr Smartphone einrichten.";

  return (
    <div className="max-w-[1400px] flex justify-between items-center mx-auto gap-7 bg-transparent flex-row">
      <div className="w-[686px] h-[574px] flex items-center justify-center bg-custom-gradient6 rounded-2xl">
        <p className="text-[32px] font-MontserratMedium leading-[39.01px] text-center uppercase text-primary max-w-[542px] tracking-widest">
          Intelligente Steuerung durch Smart Home
        </p>
      </div>
      <div className="w-[686px] h-[574px] flex items-center justify-center bg-primary rounded-2xl">
        <div className="max-w-[601px] flex flex-col gap-2 justify-start items-start">
          <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 xsm:leading-[51.2px] text-start max-w-[510px]">
            <span className="font-MontserratMedium">Smart Home mit</span> <br />
            <span className="font-PpEditorialRegular italic leading-5 xsm:leading-[53.7px]">
              der Wise App
            </span>
          </h3>
          <p className="text-ironGray">
            <Text label={introText} size="sm" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmartHomeCard;

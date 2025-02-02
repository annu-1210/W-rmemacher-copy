import React from "react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";

function AboutHeatMakers() {
  const para1 =
    "Lorem ipsum dolor sit amet consectetur. Porta sit adi piscing cras quis sollicitudin erat et tortor. Vitae lacus venenatis vitae sollicitudin sodales aliquam eget diam pulvinar lorem facilisis malesuada risus ac.";
  const para2 =
    "Lorem ipsum dolor sit amet consectetur. Nulla ridicu lus musto ferme ntum ame ictum sed amet mi in du uspe ndisse habitant sed am mentum ame.";
  return (
    <div className="max-w-[900px] xl:max-w-[1140px] flex flex-col items-center md:items-start md:flex-row justify-between mx-auto mt-20 md:mt-28 xl:mt-[150px]">
      <h3 className="text-3xl lg:text-4xl xl:text-[42px] font-MontserratMedium leading-[45px] max-w-[372px] lg:w-full xl:leading-[51.2px] text-center">
        Über <span className="!font-PpEditorialRegular italic ">Wärmemacher</span>
      </h3>
      <div className="flex flex-col items-center md:items-start gap-y-4 max-w-[440px] pt-3 lg:pt-0 lg:max-w-[530px] xl:max-w-[655px]">
        <div className="flex flex-col gap-y-4 text-center md:text-start">
          <Text label={para1} size="md" color="secondary" />
          <Text label={para2} size="md" color="secondary" />
        </div>
        <ActionButton label="Mehr entdecken" color="primary" size="md"/>
      </div>
    </div>
  );
}

export default AboutHeatMakers;

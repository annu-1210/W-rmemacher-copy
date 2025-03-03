import React from "react";
import FeatureSection from "./common/FeatureSection";
import { SliderData } from "./common/Helper";

function HighlightSection() {
  const layout = {
    position:
      "top-[70px] sm:top-[100px] md:top-[200px] lg:top-[360px] xl:top-[321px]",
    textWidth: "w-[420px] lg:w-[550px] xl:w-[686px]",
  };
  return (
    <div className="max-w-[1920px] h-[320px] sm:h-[400px] md:h-[520px] lg:h-[696px] mx-auto rounded-2xl overflow-hidden mt-[30px]">
      <FeatureSection
        description={SliderData[1].description}
        imageSrc={SliderData[1].image.src}
        layout={layout}
        heading={SliderData[1].heading}
      />
    </div>
  );
}

export default HighlightSection;

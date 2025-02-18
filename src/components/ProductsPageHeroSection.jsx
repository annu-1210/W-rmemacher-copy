import React from "react";
import FeatureSection from "./common/FeatureSection";
import { SliderData } from "./common/Helper";

function ProductsPageHeroSection() {
  const layout = {
    position:
      "top-[40px] xsm:top-[20px] sm:top-[50px] md:top-[130px] lg:top-[300px] xl:top-[234px]",
    textWidth: "w-[450px] lg:w-[718px]",
  };
  return (
    <section className="max-w-[1920px] w-full mx-auto h-[320px] sm:h-[400px] md:h-[520px] lg:h-[696px] rounded-2xl overflow-hidden ">
      <div className="max-w-[1920px] w-full">
        <FeatureSection
          description={SliderData[0].description}
          imageSrc={SliderData[0].image.src}
          layout={layout}
          heading={SliderData[0].heading}
        />
      </div>
    </section>
  );
}

export default ProductsPageHeroSection;

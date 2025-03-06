import React from "react";
import FeatureSection from "./common/FeatureSection";
import { SliderData } from "./common/Helper";
import Header from "./common/Header";

function ProductsPageHeroSection() {
  const layout = {
    position:
      "top-[80px] xsm:top-[70px] sm:top-[100px] md:top-[210px] lg:top-[300px] xl:top-[234px]",
    textWidth: "w-[450px] lg:w-[718px]",
  };
  return (
    <section className="max-w-[1920px] w-full mx-auto h-[320px] sm:h-[400px] md:h-[520px] lg:h-[696px] rounded-2xl overflow-hidden relative">
      <Header />
      <div className="max-w-[1920px] w-full">
        <FeatureSection
          description={SliderData[0].description}
          imageSrc={SliderData[0].image}
          layout={layout}
          heading={SliderData[0].heading}
        />
      </div>
    </section>
  );
}

export default ProductsPageHeroSection;

import React from "react";
import InfoBlock from "./common/InfoBlock";
import image1 from "../../public/images/w-8.jpeg";
import image2 from "../../public/images/w-20.jpeg";
import { productFeatureHighlightDescription } from "./common/Helper";

function ProductDetailsFeatureHighlight() {
  return (
    <div className="max-w-[1400px] flex flex-col gap-7 xsm:gap-10 xl:gap-7 mx-auto bg-transparent mt-20 sm:mt-28 lg:mt-[150px] xl:mt-[30px]">
      <div className="flex">
        <InfoBlock
          description={productFeatureHighlightDescription[0]}
          imageSrc={image1}
          height={630}
          width={686}
          rowDirection="flex-row-reverse"
          textContainerWidth={686}
        />
      </div>
      <div className="flex min-h-[630px]">
        <InfoBlock
          description={productFeatureHighlightDescription[1]}
          imageSrc={image2}
          height={630}
          width={686}
          rowDirection="flex-row"
          textContainerWidth={686}
        />
      </div>
    </div>
  );
}

export default ProductDetailsFeatureHighlight;

import React from "react";
import { bathroomTransformationArticles } from "./common/Helper";
import Text from "./common/Text";
import Article from "./Article";

function BathroomTransformation() {
  const introText =
    "Leicht zu bedienende und kompakte Funktionen, die Ihr Badezimmer in eine Wohlfühloase verwandeln";
  return (
    <div className="max-w-[728px] lg:max-w-[860px] xl:max-w-[1140px] mx-auto flex flex-col gap-12 lg:gap-[60px] mt-20 sm:mt-28 lg:mt-[150px]">
      <div className="max-w-[520px] md:max-w-[831px] flex flex-col gap-y-2 lg:gap-y-3">
        <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px]">
          <span className=" font-MontserratMedium leading-5 md:leading-[91.2px] text-start max-w-[734px]">
            {" "}
            Verwandeln Sie Ihr Badezimmer in{" "}
          </span>{" "}
          {""}
          <span className="font-PpEditorialRegular italic leading-5 sm:leading-[53.7px]">
            eine neue Wohlfühloase
          </span>
        </h3>
        <p className="max-w-[734px] text-ironGray">
          <Text label={introText} size="md" />
        </p>
      </div>
      <div className="flex flex-col sm:flex-row-reverse gap-y-4 sm:gap-4 md:gap-6 justify-between w-full">
        <div className="w-full h-full">
          <div className="max-w-[558px] !h-full sm:!h-[590px] md:!h-[600px] lg:!h-[760px] xl:!h-[778px]">
            <Article
              image={bathroomTransformationArticles[0].img}
              id={bathroomTransformationArticles[0].id}
              description={bathroomTransformationArticles[0].description}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-y-6 w-full h-full">
          <div className="h-full">
            <Article
              image={bathroomTransformationArticles[1].img}
              id={bathroomTransformationArticles[1].id}
              description={bathroomTransformationArticles[1].description}
            />
          </div>

          <div className="h-full ">
            <Article
              image={bathroomTransformationArticles[2].img}
              id={bathroomTransformationArticles[2].id}
              description={bathroomTransformationArticles[2].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BathroomTransformation;

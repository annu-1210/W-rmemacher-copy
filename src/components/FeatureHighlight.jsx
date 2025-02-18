import React from "react";
import InfoBlock from "./common/InfoBlock";
import image1 from "../../public/images/w-8.jpeg";
import image2 from "../../public/images/w-18.jpeg";
import {featureHighlightDescription} from "./common/Helper";

function FeatureHighlight() {
  return (
    <div className="max-w-[1400px] flex flex-col gap-7 mx-auto bg-transparent mt-40">
      <div className="flex">
        <InfoBlock description={featureHighlightDescription[0]} imageSrc={image1} height={834} width={686} rowDirection="row"/>
      </div>
      <div className="flex ">
        <InfoBlock description={featureHighlightDescription[1]} imageSrc={image2} height={680} width={686} rowDirection="row-reverse"/>
      </div>
    </div>
  );
}

export default FeatureHighlight;

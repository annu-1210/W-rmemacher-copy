import Image from "next/image";
import React from "react";
import ActionButton from "./common/ActionButton";
import { Logo } from "./common/Icon";
import Text from "./common/Text";

function Gifi() {
  const para =
    "Lorem ipsum dolor sit amet consectetur. Nulla ridicu lus musto ferme ntum ame ictum sed amet mi in du uspe ndisse habitant sed am mentum ame.";
  return (
    <div className="max-w-[1920px] relative overflow-hidden rounded-2xl mt-[150px] h-[554px] xl:h-[650px] mx-auto">
      <Image
        src="/images/gif-poster.jpeg"
        alt="gif Image"
        width={1400}
        height={650}
        className="w-full max-w-[1920px] rounded-2xl absolute top-px z-0 "
      />
      <div className="w-full bg-background py-10 flex justify-center h-full z-0 brightness-50">
        <div className="flex flex-col max-w-[590px] mx-auto justify-between z-20">
          <div className="flex flex-col gap-5 xl:gap-[26px] items-center relative z-99">
            <a href="/" className="flex w-[147px] h-[127px] ">
              <Image
                src="/images/w-2.png"
                alt="Image"
                width={147}
                height={127}
                className="w-full max-w-[120px] xl:max-w-[147px] h-[116px] xl:max-h-[127px] relative z-99"
              />
            </a>
            <p className="max-w-[590px] text-center relative z-99">
              <Text label={para} size="xsm" color="primary" />
            </p>
          </div>
          <div className="w-full z-10 flex items-center justify-center z-20">
          <ActionButton label="Mehr erfahren" color="primary" size="md"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifi;

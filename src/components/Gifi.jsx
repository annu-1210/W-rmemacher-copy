import Image from "next/image";
import React from "react";
import ActionButton from "./common/ActionButton";
import { Logo } from "./common/Icon";
import Text from "./common/Text";

function Gifi() {
  const para =
    "Lorem ipsum dolor sit amet consectetur. Nulla ridicu lus musto ferme ntum ame ictum sed amet mi in du uspe ndisse habitant sed am mentum ame.";
  return (
    <div className="max-w-[1400px] relative overflow-hidden rounded-2xl mt-[150px] h-[650px]">
      <Image
        src="/images/gif.gif"
        alt="gif Image"
        width={1400}
        height={650}
        className="w-full max-w-[1920px] rounded-2xl absolute top-px z-0 "
      />
      <div className="w-full bg-background py-10 flex justify-center h-full z-0 brightness-50">
        <div className="flex flex-col max-w-[590px] mx-auto justify-between z-20">
          <div className="flex flex-col gap-[26px] items-center z-20">
            <a href="/" className="flex w-[147px] h-[127px] ">
              <Image
                src="/images/w-2.png"
                alt="gif Image"
                width={147}
                height={127}
                className="w-full max-w-[147px] z-10"
              />
            </a>
            <p className="max-w-[590px] text-center">
              <Text label={para} size="xsm" color="primary" />
            </p>
          </div>
          <div className="w-full z-10 flex items-center justify-center z-20">
          <ActionButton label="Mehr erfahren" color="primary" size="lg"/>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Gifi;

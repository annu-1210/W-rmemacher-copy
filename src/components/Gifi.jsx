import Image from "next/image";
import React from "react";
import ActionButton from "./common/ActionButton";
import Text from "./common/Text";

function Gifi() {
  const para =
    "Lorem ipsum dolor sit amet consectetur. Nulla ridicu lus musto ferme ntum ame ictum sed amet mi in du uspe ndisse habitant sed am mentum ame.";
  return (
    <div className="max-w-[1920px] relative overflow-hidden rounded-2xl mt-20 xsm:mt-[100px] md:mt-[130px] lg:mt-[150px] h-[210px] xsm:h-[300px] sm:h-[380px] md:h-[480px] lg:h-[554px] xl:h-[650px] mx-auto bg-gif-bg bg-cover before:absolute before:inset-0 before:bg-background before:z-0">
      <div className="w-full py-4 xsm:py-6 md:py-10 flex justify-center h-full z-0 ">
        <div className="flex flex-col max-w-[590px] mx-auto justify-between z-20">
          <div className="flex flex-col gap-y-2 xsm:gap-y-4 lg:gap-5 xl:gap-[26px] items-center">
            <a href="/" className="flex w-[147px] max-h-[127px] justify-center">
              <Image
                src="/images/w-2.png"
                alt="Image"
                width={147}
                height={127}
                className="w-full max-w-[40px] xsm:max-w-[60px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-[147px] h-[30px] xsm:h-[50px] sm:h-[60px] md:h-[90px] lg:h-[116px] xl:max-h-[127px] relative z-99"
              />
            </a>
            <p className="max-w-[230px] xsm:max-w-[350px] sm:max-w-[400px] md:max-w-[590px] text-center ">
              <Text label={para} size="xsm" color="primary" />
            </p>
          </div>
          <div className="w-full z-10 flex items-center justify-center ">
          <ActionButton label="Mehr erfahren" color="primary" size="md"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifi;

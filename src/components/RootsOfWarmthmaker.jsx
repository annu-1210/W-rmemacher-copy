import React from "react";
import Text from "./common/Text";
import Image from "next/image";
import { features } from "./common/Helper";

function RootsOfWarmthmaker() {
  const para1 =
    "Die Reise von Wärmemacher begann mit einer tiefen Überzeugung: Das Badezimmer ist mehr als ein funktionaler Raum – es ist der Ursprung unserer täglichen Vitalität, der Ort, an dem unser Tag beginnt und endet. Unsere Gründer erkannten, dass in diesem Raum das Potenzial liegt, ein universelles Wohlbefinden zu schaffen, das weit über die physische Ebene hinausgeht. Sie stellten sich ein Badezimmer vor, das nicht nur ästhetisch ansprechend, sondern auch ein Rückzugsort für Körper und Seele ist.";
  const para2 =
    "So entstand die Idee, einen Spiegel zu entwickeln, der die Essenz dieses Wohlbefindens verkörpert und das Badezimmer in einen Ort der Ruhe und Erneuerung verwandelt. Wärmemacher steht heute für die Verschmelzung von Luxus, Innovation und einer Vision des perfekten Badezimmers – ein Raum, der nicht nur den Körper, sondern auch den Geist revitalisiert.";

  return (
    <div className="max-w-[1920px] py-10 md:py-[60px] px-10 md:px-20 xl:px-[130px] rounded-2xl flex items-center justify-center overflow-hidden relative mt-5 lg:mt-10">
      <div className="absolute inset-0 bg-custom-gradient4 opacity-10 rounded-2xl"></div>
      <Image
        src="/images/blur.png"
        alt="Image"
        width={612}
        height={715}
        className="absolute bottom-0 left-[-50px] max-w-[612px] max-h-[715px]"
      />
      <div className="w-full flex flex-col gap-y-16">
        <div className="flex flex-col gap-y-3 items-start justify-start w-full">
          <h3 className="text-2xl xsm:text-3xl lg:text-4xl xl:text-[42px] font-MontserratMedium leading-[45px] max-w-[620px] lg:w-full xl:leading-[51.2px] text-start">
            Die Wurzeln von{" "}
            <span className="!font-PpEditorialRegular italic ">
              Wärmemacher
            </span>
          </h3>
          <div className="flex flex-col max-w-[1135px] 4xl:max-w-[1620px] text-ironGray gap-y-3">
            <p>
              <Text label={para1} size="md" />
            </p>
            <p>
              <Text label={para2} size="md" />
            </p>
          </div>
        </div>
        <div className="max-w-[1135px] 4xl:max-w-[1620px] flex flex-wrap gap-5 4xl:gap-x-40 4xl:gap-y-20">
          {features.map((feat) => {
            return (
              <div
                className="flex justify-center items-center w-[250px] md:w-[260px] xl:w-[267px] h-[188px] border-2 border-primary bg-glassWhite rounded-xl "
                key={feat.id}
              >
                <div className="flex flex-col justify-center items-center max-w-[182px] gap-y-3">
                  <Image
                    width={70}
                    height={70}
                    alt={feat.label}
                    className=""
                    src={feat.imgSrc}
                  />
                  <p className="font-MontserratRegular font-normal leading-[18px] xsm:leading-6 text-xs xsm:text-sm md:text-base lg:text-lg xl:text-xl text-center">
                    {feat.label.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < feat.label.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RootsOfWarmthmaker;

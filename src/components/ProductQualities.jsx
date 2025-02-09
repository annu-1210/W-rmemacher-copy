"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Text from "./common/Text";
import { productQualities } from "./common/Helper";

function Qualities() {
  const [activeTab, setActiveTab] = useState(productQualities[0]);
  return (
    <section className="qualities-section">
      <div className="flex flex-col max-w-[1400px] gap-y-4 xsm:gap-y-6 mx-auto mt-[120px] md:mt-[130px] lg:mt-[150px]">
        <Image
          src={activeTab.imageSrc}
          alt={activeTab.title}
          width={1400}
          height={528}
          className="w-full h-[200px] sm:h-[170px] sm:h-full max-w-[1400px] rounded-2xl object-cover "
        />
        <div className="max-w-[1400px] flex flex-wrap lg:flex-nowrap justify-center xl:justify-between">
          {productQualities.map((section) => {
            return (
              <div
                className={`w-full lg:max-w-[328px] xl:max-w-[410px]  2xl:max-w-[466px] items-center lg:items-start flex flex-col gap-y-2 lg:gap-y-3.5 xl:gap-y-4 3xl:gap-y-4 cursor-pointer ${section.id === "innovative-design" ? "pr-4 xsm:pr-6 2xl:pr-20 pl-4 xsm:pl-6 pt-4 xsm:pt-6" :" p-4 xsm:p-6"}`}
                key={section.id}
                onClick={() => setActiveTab(section)}
              >
                <h4
                  className={`font-MontserratMedium text-center sm:text-start text-sm xsm:text-base lg:text-xl xl:text-2xl leading-4 leading-6 lg:leading-[29px] lg:h-[54px] ${
                    activeTab.id === section.id
                      ? "text-tertiary"
                      : "text-secondary"
                  }`}
                >
                  {section.title}
                </h4>
                <p className="text-center lg:text-start text-textColor">
                  <Text
                    label={section.description}
                    size="sm"
                  />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Qualities;

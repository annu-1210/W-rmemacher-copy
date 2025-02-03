"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Text from "./common/Text";
import { QualitiesData } from "./common/Helper";

function Qualities() {
  const [activeTab, setActiveTab] = useState(QualitiesData[0]);
  return (
    <section className="qualities-section">
      <div className="flex flex-col max-w-[1400px] gap-y-4 xsm:gap-y-6 mx-auto mt-[120px] md:mt-[130px] lg:mt-[150px]">
        <Image
          src={activeTab.image}
          alt={activeTab.label}
          width={1400}
          height={528}
          className="w-full h-[200px] sm:h-[170px] sm:h-full max-w-[1400px] rounded-2xl object-cover "
        />
        <div className="max-w-[1400px] flex flex-wrap lg:flex-nowrap justify-center xl:justify-between">
          {QualitiesData.map((section) => {
            return (
              <div
                className="w-full lg:max-w-[328px] xl:max-w-[410px]  2xl:max-w-[467px] items-center lg:items-start flex flex-col gap-y-2 lg:gap-y-3.5 xl:gap-y-4 3xl:gap-y-4 p-4 xsm:p-6 cursor-pointer"
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
                  {section.label}
                </h4>
                <p className="text-center lg:text-start">
                  <Text
                    label={section.description}
                    size="sm"
                    color="secondary"
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

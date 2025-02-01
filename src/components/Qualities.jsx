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
      <div className="flex flex-col max-w-[1400px] gap-y-6 mx-auto mt-[150px]">
        <Image
          src={activeTab.image}
          alt={activeTab.label}
          width={1400}
          height={528}
          className="w-full max-w-[1400px] rounded-2xl "
        />
        <div className="max-w-[1400px] flex justify-center xl:justify-between">
          {QualitiesData.map((section) => {
            return (
              <div
                className="max-w-[328px]  xl:max-w-[410px]  2xl:max-w-[467px] flex flex-col gap-y-3.5 xl:gap-y-4 3xl:gap-y-2 p-6 cursor-pointer"
                key={section.id}
                onClick={() => setActiveTab(section)}
              >
                <h4
                  className={`font-MontserratMedium text-xl xl:text-2xl leading-[29px] h-[54px] ${
                    activeTab.id === section.id
                      ? "text-tertiary"
                      : "text-secondary"
                  }`}
                >
                  {section.label}
                </h4>
                <p className="">
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

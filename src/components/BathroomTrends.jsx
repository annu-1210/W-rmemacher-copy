"use client";
import React from "react";
import Text from "./common/Text";
import { navigationTabs } from "./common/Helper";
import { useState } from "react";
import BathroomTrendsDropdown from "./BathroomTrendsDropdown";

function BathroomTrends() {
  const [activeTab, setActiveTab] = useState(navigationTabs[0].id);
  const para =
    "Technologische und funktionale Maßstäbe für die nächste Generation des Bads neu definiert.";
  return (
    <section className="tab-section">
      <div className="max-w-[1107px] mx-auto flex flex-col items-center gap-y-10 mx-auto mt-16 xsm:mt-[90px] md:mt-[120px] xl:mt-[150px] overflow-hidden">
        <div className="max-w-[690px] text-center justify-center items-center flex flex-col gap-y-2 sm:gap-y-0 lg:gap-y-2">
          <h3 className="text-2xl xsm:text-3xl lg:text-4xl xl:text-[42px] font-MontserratMedium leading-6 xsm:leading-8 sm:leading-[51.2px] text-center">
            Die Zukunft für {""}
            <span className="!font-PpEditorialRegular italic">
              Ihr Badezimmer
            </span>
          </h3>
          <p className="text-center max-w-[400px] lg:max-w-[655px]">
            <Text label={para} size="md" color="secondary" />
          </p>
        </div>
        <div className="max-w-[1107px] max-h-[613px] hidden xsm:flex items-center justify-center flex-col gap-16 lg:gap-y-[70px]">
          <div className="w-[400px] sm:w-[500px] md:w-[680px] lg:w-[753px] h-[38px] lg:h-[44px] flex gap-x-3 sm:gap-x-[30px] border-b border-neutral">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "border-b border-tertiary text-tertiary"
                    : "text-secondary"
                } text-xs sm:text-base lg:text-lg xl:text-xl font-MontserratRegular w-full flex justify-center transition-all duration-300 hover:text-tertiary`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="relative w-full overflow-hidden">
            <div 
              key={activeTab}
              className="max-w-[1107px] max-h-[500px] animate-smoothSlide"
            > 
              {navigationTabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </div>
        </div>
        <div className="flex xsm:hidden max-w-[350px]">
          <BathroomTrendsDropdown
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            navigationTabs={navigationTabs}
          />
        </div>
      </div>
    </section>
  );
}

export default BathroomTrends;

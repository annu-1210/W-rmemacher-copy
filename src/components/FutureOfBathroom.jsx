"use client";
import React from "react";
import Text from "./common/Text";
import { navTabs } from "./common/Helper";
import { useState } from "react";

function FutureOfBathroom() {
  const [activeTab, setActiveTab] = useState(navTabs[0].id);
  const para =
    "Technologische und funktionale Maßstäbe für die nächste Generation des Bads neu definiert.";
  return (
    <section className="tab-section">
      <div className="max-w-[1107px] mx-auto flex flex-col items-center gap-y-10 mx-auto mt-[120px] xl:mt-[150px]">
        <div className="max-w-[690px] text-center flex flex-col gap-y-2">
          <h3 className="text-4xl xl:text-[42px] font-MontserratMedium leading-[51.2px] text-center">
            Die Zukunft für {""}
            <span className="!font-PpEditorialRegular italic">
              Ihr Badezimmer
            </span>
          </h3>
          <p className="text-center">
            <Text label={para} size="md" color="secondary" />
          </p>
        </div>
        <div className="max-w-[1107px] max-h-[613px] flex items-center justify-center flex-col gap-y-[70px]">
          <div className="w-[753px] h-[44px] flex gap-x-[30px] border-b border-neutral">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "border-b border-tertiary text-tertiary"
                    : "text-secondary"
                } text-lg xl:text-xl font-MontserratRegular w-full flex justify-center`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="max-w-[1107px] max-h-[500px]">
            {navTabs.find((tab) => tab.id === activeTab)?.component}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureOfBathroom;

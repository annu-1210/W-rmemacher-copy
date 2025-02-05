"use client";
import React, { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

function BathroomTrends_Dropdown({ activeTab, setActiveTab, navigationTabs}) {
  const [selectedOption, setSelectedOption] = useState(navigationTabs[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (tab) => {
    setSelectedOption(tab);
    setIsOpen(false);
  };
  return (
    <div className="relative w-[270px] max-h-[613px] flex items-center justify-center flex-col gap-10 flex xsm:hidden ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex gap-2 bg-transparent flex justify-center items-center px-10 rounded-lg shadow-sm border border-neutral backdrop-blur-4 focus:outline-none cursor-pointer font-MontserratRegular text-secondary text-sm h-[40px]"
      >
        <p>{selectedOption.label}</p>
        <RiArrowDownWideFill />
      </div>
      <div className="max-w-[1107px] max-h-[500px]">
        {navigationTabs.find((tab) => tab.id === activeTab)?.content}
      </div>

      {isOpen && (
        <ul className="absolute rounded-md w-full top-12 shadow-md text-secondary bg-primary  text-sm">
          {navigationTabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                handleSelect(tab);
              }}
              className={`p-2.5 cursor-pointer flex justify-center items-center font-MontserratRegular text-secondary hover:bg-dropdownBg ${
                activeTab === tab.id
                  ? "border-b border-tertiary text-tertiary bg-primary"
                  : "text-secondary"
              }`}
            >
              <p>{tab.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BathroomTrends_Dropdown;

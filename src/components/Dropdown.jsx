"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Dropdown() {
  const options = [
    {
      id: 1,
      label: "German",
      image: "/images/germany.png",
    },
    {
      id: 2,
      label: "English",
      image: "/images/england.png",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative w-24 sm:w-[116px] ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex gap-2 bg-transparent flex justify-end rounded-lg shadow-sm focus:outline-none cursor-pointer"
      >
        <div className="flex items-center gap-x-1.5">
          <img
            src={selectedOption.image}
            alt={selectedOption.label}
            className="w-6 sm:w-[34px] h-4 sm:h-6 rounded-sm"
          />
          <div className="flex gap-x-0.5 justify-center items-center font-MontserratMedium text-[10px] xsm:text-xs text-neutral">
            <p>{selectedOption.label}</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute rounded-md w-full mt-2 ml-2 shadow-md text-secondary bg-primary font-MontserratMedium text-[10px] xsm:text-xs">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`p-2.5 cursor-pointer flex justify-center items-center gap-x-2 hover:bg-dropdownBg rounded-md${
                selectedOption === option ? "bg-dropdownBg " : ""
              }`}
            >
              <img
                src={option.image}
                alt={option.label}
                className="w-6 sm:w-[34px] h-4 sm:h-6 rounded-sm"
              />
              <p>{option.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

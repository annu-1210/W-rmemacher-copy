"use client";
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel  } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function Accordion({ faqs }) {
  return (
    <div className="flex flex-col w-full max-w-[881px] gap-y-2.5 bg-transparent">
      {faqs.map((faq, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="border-b border-mutedCharcoal rounded-lg px-3 sm:px-5 py-3 sm:py-[17px] bg-primary space-y-4">
              <DisclosureButton className="flex justify-between text-start sm:items-center w-full bg-primary text-secondary font-MontserratMedium text-xs xsm:text-sm lg:text-xl xl:text-2xl leading-4 xsm:leading-5 sm:leading-6 lg:leading-8 xl:leading-9 ">
                {faq.question}
                <IoIosArrowDown
                  className={`md:w-[30px] md:h-[30px] transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="rounded-lg bg-primary text-ironGray font-MontserratRegular font-normal leading-[18px] sm:leading-6 md:leading-7 lg:leading-[30px] text-xs xsm:text-sm md:text-base lg:text-lg xl:text-xl max-w-[760px]">
                {faq.answer}
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

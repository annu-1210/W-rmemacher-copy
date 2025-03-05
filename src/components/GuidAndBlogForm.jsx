"use client";
import { React, useState } from "react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import { RiH3 } from "react-icons/ri";

function GuidAndBlogForm() {
  const [isChecked, setIsChecked] = useState(false);
  const newsLetter =
    "Ich möchte den Newsletter abonnieren und über Neuigkeiten, Rabatte und Veranstaltungen auf dem Laufenden bleiben.";

  return (
    <div className="lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[640px] 3xl:max-w-[686px] w-full max-h-[723px] p-4 sm:p-8 xl:p-10 bg-primary shadow-lg rounded-2xl">
      <div className="flex flex-col gap-y-8 xsm:gap-y-[35px] w-full">
        <h3 className="text-2xl xsm:text-3xl sm:text-4xl font-MontserratMedium leading-[43.88px] text-start w-full">
          Schreiben Sie Uns
        </h3>
        <div className="flex flex-col gap-y-10 xsm:gap-y-16 w-full">
          <form className="flex flex-col gap-y-5 sm:gap-y-6 w-full text-ironGray text-[10px] sm:text-xs lg:text-sm xl:text-base font-MontserratRegular leading-3 sm:leading-4 lg:leading-5 xl:leading-6 ">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-3.5 w-full">
              <div className="relative w-full ">
                <label
                  htmlFor="name"
                  className="absolute top-[-6px] sm:top-[-12px] left-4 px-1 bg-primary"
                >
                  Vollständiger Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full p-2 border border-mutedCharcoal rounded-lg text-base outline-none h-10 sm:h-12 xl:h-[52px]"
                  required
                />
              </div>

              <div className="relative  w-full ">
                <label
                  htmlFor="email"
                  className="absolute top-[-6px] sm:top-[-12px] left-4 px-1 bg-primary"
                >
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full p-2 border border-mutedCharcoal rounded-lg text-base outline-none h-10 sm:h-12 xl:h-[52px]"
                  required
                />
              </div>
            </div>

            <div className="relative ">
              <label
                htmlFor="subject"
                className="absolute top-[-6px] sm:top-[-12px] left-4 px-1 bg-primary"
              >
                Betreff
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full p-2 border border-mutedCharcoal rounded-lg text-base outline-none h-10 sm:h-12 xl:h-[52px]"
                required
              />
            </div>

            <div className="relative ">
              <label
                htmlFor="message"
                className="absolute top-[-6px] sm:top-[-12px] left-4 px-1 bg-primary"
              >
                Nachricht
              </label>
              <textarea
                id="message"
                className="block min-h-[100px] xsm:min-h-[120px] sm:min-h-[160px] xl:min-h-[204px] w-full p-2 border border-mutedCharcoal rounded-lg outline-none resize-y"
                required
              ></textarea>
            </div>

            <div className="flex items-start justify-start gap-x-3.5">
              <input
                type="checkbox"
                id="newsletter"
                className="appearance-none w-10 xl:!w-6 h-6 border border-mutedCharcoal rounded-md cursor-pointer checked:bg-custom-gradient checked:border-none checked:text-primary relative before:content-['✓'] before:absolute before:text-primary before:text-sm before:font-bold before:left-[50%] before:top-[50%] before:transform before:-translate-x-1/2 before:-translate-y-1/2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="newsletter"
                className="text-ironGray max-w-[478px]"
              >
                <Text label={newsLetter} size="xsm" />
              </label>
            </div>
          </form>
          <ActionButton label="Senden" color="primary" size="xxl" />
        </div>
      </div>
    </div>
  );
}

export default GuidAndBlogForm;

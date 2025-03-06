import React from "react";
import Accordion from "./common/Accordion";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import { GuideAndBlogFaqs } from "./common/Helper";

function GuideAndBlogFAQs() {
  const introText =
    "Lorem ipsum dolor sit amet consectetur. Elementum ut purus cum ullamcorper cursus habitant.";
  const buttons = ["Category 1", "Category 2", "Category 3", "Category 4"];

  return (
    <section className="max-w-[850px] 4xl:max-w-[1400px] overflow-hidden mx-auto mt-[150px] flex items-center justify-center px-0 sm:px-8 md:px-14 lg:px-0">
      <div className="w-full flex flex-col items-center justify-center gap-y-[30px]">
        <div className="max-w-[690px] w-full flex flex-col gap-y-[30px] items-center justify-center">
          <div className="flex flex-col gap-y-2 w-full items-center justify-center">
            <h3 className="text-secondary text-2xl xsm:text-3xl sm:text-4xl md:text-[42px] font-MontserratMedium leading-[51.2px] text-center">
              Häufig gestellt
              <span className="text-transparent bg-clip-text bg-custom-gradient">
                {" "}
                Fragen
              </span>
            </h3>
            <p className="text-ironGray text-center">
              <Text label={introText} size="md" />
            </p>
          </div>
          <div className="max-w-[635px] w-full flex gap-x-3 sm:gap-x-6 flex-wrap gap-y-2 items-start justify-center lg:justify-start">
            {buttons.map((button, index) => {
              return (
                <ActionButton
                  key={index}
                  label={button}
                  size="sm"
                  color="tertiary"
                />
              );
            })}
          </div>
        </div>
        <div className="w-[850px] w-full flex items-center justify-center">
          <Accordion faqs={GuideAndBlogFaqs} />
        </div>
      </div>
    </section>
  );
}

export default GuideAndBlogFAQs;

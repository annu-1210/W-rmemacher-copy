import React from "react";
import Accordion from "./common/Accordion";
import { productDetailsFaqs } from "./common/Helper";

function ProductDetailsFAQs() {
  return (
    <section className="max-w-[881px] 4xl:max-w-[1400px] overflow-hidden mx-auto mt-[150px] flex items-center justify-center px-0 sm:px-8 md:px-14 lg:px-0">
      <div className="w-full flex flex-col items-center justify-center gap-y-[50px]">
        <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] leading-5 sm:leading-[51.2px] text-center w-full">
          <span className="font-MontserratRegular italic">Alles was du noch</span>{" "}
          <span className="font-PpEditorialRegular italic leading-5 sm:leading-[53.7px]">
            wissen musst
          </span>
        </h3>
        <div className="w-[881px] w-full flex items-center justify-center">
          <Accordion faqs={productDetailsFaqs} />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsFAQs;

import React from "react";
import GuidAndBlogForm from "./GuidAndBlogForm";
import Text from "./common/Text";

function NewsletterSection() {
  return (
    <section className="max-w-[1400px] w-full mx-auto mt-[150px]">
      <div className="flex items-center justify-between gap-7">
        <div className="w-[686px] relative overflow-hidden top-0 rounded-2xl h-[723px] bg-hero-bg bg-cover object-cover object-center before:absolute before:inset-0 before:bg-custom-gradient2 before:z-0 transition-all duration-100 ease-in-out p-10 ">
          <div className="absolute top-10 flex flex-col gap-y-3 max-w-[582px] items-start justify-start ">
            <h2 className="text-primary text-lg xsm:text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[50px] ">
              <span className="font-MontserratMedium leading-6 sm:leading-9 md:!leading-[49px] ">
                Gerne beraten wir Sie vollumfänglich zu unseren{" "}
              </span>
              {""}
              <span className="font-PpEditorialRegular italic leading-6 sm:leading-9 md:leading-[46px] lg:!leading-[51.2px]">
                Premium Badezimmerspiegeln
              </span>
            </h2>
            <p className="text-primary">
              <Text label="Kontaktieren Sie uns gerne jederzeit." size="sm" />
            </p>
          </div>
        </div>
        <GuidAndBlogForm />
      </div>
    </section>
  );
}

export default NewsletterSection;

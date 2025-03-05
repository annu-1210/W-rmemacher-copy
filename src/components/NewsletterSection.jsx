import React from "react";
import GuidAndBlogForm from "./GuidAndBlogForm";
import Text from "./common/Text";

function NewsletterSection() {
  return (
    <section className="max-w-[1440px] w-full mx-auto mt-[150px] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-7 sm:px-14 lg:px-0">
        <div className=" w-full lg:w-[686px] relative overflow-hidden top-0 rounded-2xl h-[350px] xsm:h-[400px] sm:h-[480px] lg:h-[650.88px] xl:h-[723px] bg-hero-bg bg-cover bg-center before:absolute before:inset-0 before:bg-custom-gradient2 before:z-0 transition-all duration-100 ease-in-out p-6 xsm:p-8 md:p-10 ">
          <div className="flex flex-col gap-y-3 max-w-[582px] items-start justify-start relative z-10">
            <h2 className="text-primary text-lg xsm:text-xl sm:text-2xl md:text-3xl lg:text-[40px] ">
              <span className="font-MontserratMedium leading-6 sm:leading-9 md:!leading-[48.76px] ">
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

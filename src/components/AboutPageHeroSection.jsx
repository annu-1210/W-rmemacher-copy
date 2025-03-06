import React from "react";
import Text from "./common/Text";
import Header from "./common/Header";
function AboutPageHeroSection() {
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur. Odio urna tempor risus sit a vitae nullm eu nunc sit non in ut amet adipiscing. ";
  return (
    <section className="hero-section">
      <div className="max-w-[1920px] h-[300px] sm:h-[378px] md:h-[460px] lg:h-[662px] xl:h-[760px] relative overflow-hidden top-0 rounded-2xl bg-aboutHero-bg bg-cover bg-center before:absolute before:inset-0 before:bg-custom-gradient2 before:z-0 transition-all duration-100 ease-in-out">
        <Header />
        <div className="container px-5 lg:px-10 w-full absolute top-[160px] sm:top-[150px] md:top-[200px] lg:top-[340px] xl:top-[363px] flex max-w-[1920px]">
          <div className="flex flex-col max-w-[320px] md:max-w-[500px] xl:max-w-[580px] gap-y-2 ">
            <h2 className="text-primary text-lg xsm:text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[50px] font-MontserratMedium leading-6 sm:leading-9 md:leading-[46px] lg:leading-[55px] xl:leading-[60.95px]">
              Vitae Lacus Venenatis Vitae {""}
              <span className="!font-PpEditorialRegular italic text-xl xsm:text-2xl sm:text-3xl  md:text-[40px] lg:text-[50px] xl:text-6xl leading-6 sm:leading-9 md:leading-[46px] lg:leading-[55px] xl:leading-[76.8px] ">
                Sollicitudin Sodales Aliquam Eget
              </span>
            </h2>
            <p className=" max-w-[380px] lg:max-w-[550px] !text-primary lg:text-neutral">
              <Text label={paragraph} size="xsm" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPageHeroSection;

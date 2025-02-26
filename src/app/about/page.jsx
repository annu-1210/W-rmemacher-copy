import AboutPageHeroSection from "@/components/AboutPageHeroSection";
import AboutSectionSlider from "@/components/common/AboutSectionSlider";
import WarmemacherMission from "@/components/ArticlesSection";
import BathroomTransformation from "@/components/BathroomTransformation";
import FloatingActionButton from "@/components/common/FloatingActionButton";
import Footer from "@/components/common/Footer";
import FeatureHighlight from "@/components/FeatureHighlight";
import InstaProductGrid from "@/components/InstaProductGrid";
import RootsOfWarmthmaker from "@/components/RootsOfWarmthmaker";
import WarmMakersInfo from "@/components/WarmMakersInfo";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="relative overflow-hidden">
      <Image
        width={500}
        height={900}
        alt="Yellow circular graphic adding contrast to the design"
        src="/images/yellow-circle2.png"
        className="absolute top-[4900px] xsm:top-[5100px] sm:top-[5700px] 3xl:top-[5600px] right-[-40px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="Red circular graphic adding contrast to the design"
        src="/images/red-circle2.png"
        className="absolute top-[4450px] xsm:top-[5000px] sm:top-[4800px] lg:top-[5700px] 3xl:top-[8800px] left-[-50px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />
      <div className="absolute fixed z-50 top-[220px] sm:top-[210px] md:top-[300px] lg:top-[410px] 3xl:top-[601px] 3xl:right-[70px] cursor-pointer">
        <FloatingActionButton />
      </div>
      <main className="relative container p-3 xsm:p-5 max-w-[1920px] mx-auto ">
        <AboutPageHeroSection />
        <RootsOfWarmthmaker />
        <WarmemacherMission />
        <section className="mt-20 sm:mt-28 lg:mt-[150px]">
          <AboutSectionSlider />
        </section>
        <FeatureHighlight />
        <BathroomTransformation />
        <WarmMakersInfo />
        <InstaProductGrid />
        <Footer />
      </main>
    </div>
  );
}

export default page;

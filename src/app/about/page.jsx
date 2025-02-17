import AboutPageHeroSection from "@/components/AboutPageHeroSection";
import AboutSectionSlider from "@/components/AboutSectionSlider";
import WarmemacherMission from "@/components/ArticlesSection";
import BathroomTransformation from "@/components/BathroomTransformation";
import FloatingActionButton from "@/components/common/FloatingActionButton";
import FeatureHighlight from "@/components/FeatureHighlight";
import RootsOfWarmthmaker from "@/components/RootsOfWarmthmaker";
import WarmMakersInfo from "@/components/WarmMakersInfo";
import React from "react";

function page() {
  return (
    <div className="relative overflow-hidden ">
      <div className="absolute fixed z-50 top-[220px] sm:top-[210px] md:top-[300px] lg:top-[410px] 3xl:top-[601px] 3xl:right-[70px] cursor-pointer">
        <FloatingActionButton />
      </div>
      <main className="relative container p-3 xsm:p-5 max-w-[1920px] mx-auto bg-bodyBg">
        <AboutPageHeroSection />
        <RootsOfWarmthmaker />
        <WarmemacherMission />
        <AboutSectionSlider />
        <FeatureHighlight />
        <BathroomTransformation />
        <WarmMakersInfo />
      </main>
    </div>
  );
}

export default page;

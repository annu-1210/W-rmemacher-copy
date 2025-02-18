import AboutSectionSlider from "@/components/common/AboutSectionSlider";
import WarmemacherMission from "@/components/ArticlesSection";
import BathroomTransformation from "@/components/BathroomTransformation";
import FloatingActionButton from "@/components/common/FloatingActionButton";
import Footer from "@/components/common/Footer";
import FeatureHighlight from "@/components/FeatureHighlight";
import HighlightSection from "@/components/HighlightSection";
import InstaProductGrid from "@/components/InstaProductGrid";
import ProductsPageHeroSection from "@/components/ProductsPageHeroSection";
import RootsOfWarmthmaker from "@/components/RootsOfWarmthmaker";
import WarmMakersInfo from "@/components/WarmMakersInfo";
import React from "react";

function page() {
  return (
    <div className="relative overflow-hidden bg-bodyBg">
      <main className="container p-3 xsm:p-5 max-w-[1920px] mx-auto ">
        <ProductsPageHeroSection />
        <HighlightSection />
        <section className="mt-10">
          <AboutSectionSlider />
        </section>

        {/* 
        <WarmemacherMission />
        <FeatureHighlight />
        <BathroomTransformation />
        <WarmMakersInfo />
        <InstaProductGrid /> */}
        <Footer />
      </main>
    </div>
  );
}

export default page;

import Footer from "@/components/common/Footer";
import React from "react";
import GuideAndBlogHeroSection from "@/components/GuideAndBlogHeroSection";
import GuidAndBlogSliderWrapper from "@/components/GuidAndBlogSliderWrapper";
import GuideImageSection from "@/components/GuideImageSection";

function page() {
  return (
    <div className="relative overflow-hidden ">
      <main className="container p-3 xsm:p-5 max-w-[1920px] mx-auto ">
        <GuideAndBlogHeroSection />
        <GuidAndBlogSliderWrapper />
        <GuideImageSection />
        <Footer />
      </main>
    </div>
  );
}

export default page;

import AboutSectionSlider from "@/components/common/AboutSectionSlider";
import Footer from "@/components/common/Footer";
import HighlightSection from "@/components/HighlightSection";
import ProductsPageHeroSection from "@/components/ProductsPageHeroSection";
import React from "react";
import SmartMirrors from "@/components/SmartMirrors";
import ProductsFeaturesGrid from "@/components/ProductsFeaturesGrid";

function page() {
  return (
    <div className="relative overflow-hidden ">
      <main className="container p-3 xsm:p-5 max-w-[1920px] mx-auto ">
        <ProductsPageHeroSection />
        <HighlightSection />
        <section className="mt-10">
          <AboutSectionSlider />
        </section>
        <SmartMirrors />
        <ProductsFeaturesGrid/>
        <Footer />
      </main>
    </div>
  );
}

export default page;

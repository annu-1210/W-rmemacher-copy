"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Header from "@/components/common/Header";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductDetailsFeatureHighlight from "@/components/ProductDetailsFeatureHighlight";
import ProductDetailsFAQs from "@/components/ProductDetailsFAQs";
import NavigationTabs from "@/components/NavigationTabs";
import ProductDetailsInfoBlock from "@/components/ProductDetailsInfoBlock";
  // const productData = {
//   solis: {
//     image: {
//       src: '/images/w-6.jpg',
//       alt: 'SOLIS Smart Mirror'
//     },
//     heading: {
//       primaryText: 'Erleben Sie die Zukunft Ihres',
//       secondaryText: 'Badezimmers mit Wärmemacher',
//       primaryStyle: 'text-primary',
//       secondaryStyle: '!font-PpEditorialRegular italic'
//     },
//     description: 'Verbinden Sie Ästhetik mit intelligenter Funktionalität in elegantem Design.',
//     layout: {
//       position: 'bottom-[50px] sm:bottom-[80px] md:bottom-[100px] lg:bottom-[120px]',
//       textWidth: 'xl:max-w-[615px]'
//     }
//   }
// };

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const selectedImage = searchParams.get('image');

  return (
    <div className="min-h-screen bg-bodyBg w-full overflow-x-hidden">
      <main className="p-3 xsm:p-5 max-w-[1920px] mx-auto relative">
        <div className="relative w-full">
          <Header />
        </div>
        <Breadcrumb />
        <ProductDetailsInfoBlock selectedImage={selectedImage} />
        <NavigationTabs />
        <ProductDetailsFeatureHighlight />
        <ProductDetailsFAQs />
      </main>
      {/* Add other product sections here */}
    </div>
  );
}

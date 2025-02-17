import React from 'react'
import HeroSection from '../HeroSection'
import AboutHeatMakers from '../AboutHeatMakers'
import ProductSlider from '../ProductSlider'
import BathroomTrends from '../BathroomTrends'
import Qualities from '../ProductQualities'
import InteractiveDemoSection from '../InteractiveDemoSection'
import Blog from '../Blog'
import Footer from './Footer'
import Image from "next/image";
import FloatingActionButton from './FloatingActionButton'

function HomePage() {
  return (
    <div className="relative overflow-hidden bg-bodyBg ">
      <Image
        width={500}
        height={900}
        alt="Yellow circular graphic adding contrast to the design"
        src="/images/yellow-circle.png"
        className="absolute top-[650px] xsm:top-[600px] sm:top-[720px] lg:top-[840px] 3xl:top-[860px] left-[-40px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="Red circular graphic adding contrast to the design"
        src="/images/red-circle.png"
        className="absolute top-[1800px] xsm:top-[900px] sm:top-[1300px] lg:top-[1800px] 3xl:top-[1980px] right-[-50px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="Yellow circular graphic adding contrast to the design"
        src="/images/yellow-circle.png"
        className="absolute top-[2850px] xsm:top-[3100px] sm:top-[3500px] lg:top-[4300px] 3xl:top-[4550px] left-[-40px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="Red circular graphic adding contrast to the design"
        src="/images/red-circle.png"
        className="absolute top-[4450px] xsm:top-[5000px] sm:top-[4800px] lg:top-[5700px] 3xl:top-[6000px] right-[-50px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />

      <div className="absolute fixed z-50 top-[220px] sm:top-[210px] md:top-[300px] lg:top-[410px] 3xl:top-[470px] 3xl:right-[70px] cursor-pointer">
        <FloatingActionButton />
      </div>
      <main className="relative container p-3 xsm:p-5 max-w-[1920px] mx-auto ">
        <HeroSection />
        <AboutHeatMakers />
        <ProductSlider />
        <BathroomTrends />
        <Qualities />
        <InteractiveDemoSection />
        <Blog/>
        <Footer />
      </main>
    </div>

  )
}

export default HomePage

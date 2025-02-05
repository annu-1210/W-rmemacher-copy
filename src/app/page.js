import AboutHeatMakers from "@/components/AboutHeatMakers";
import Blog from "@/components/Blog";
import FloatingActionButton from "@/components/common/FloatingActionButton";
import Footer from "@/components/common/Footer";
import BathroomTrends from "@/components/BathroomTrends";
import InteractiveDemoSection from "@/components/InteractiveDemoSection";
import HeroSection from "@/components/HeroSection";
import Qualities from "@/components/ProductQualities";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
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
        className="absolute top-[2850px] xsm:top-[3100px] sm:top-[3700px] lg:top-[4300px] 3xl:top-[4550px] left-[-40px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="Red circular graphic adding contrast to the design"
        src="/images/red-circle.png"
        className="absolute top-[4450px] xsm:top-[5000px] sm:top-[4800px] lg:top-[5700px] 3xl:top-[6000px] right-[-50px] z-0 max-w-[350px] xsm:max-w-[500px] max-h-[350px] xsm:max-h-[500px] 3xl:max-h-[800px]"
      />

      <div className="absolute fixed z-50 top-[48vh] xsm:top-[50vh] sm:top-[40vh] md:top-[50vh] lg:top-[50vh] 3xl:top-[45vh] 3xl:right-[84px] cursor-pointer">
        <FloatingActionButton />
      </div>
      <main className="relative container p-5 max-w-[1920px] mx-auto ">
        <HeroSection />
        <section>
          <AboutHeatMakers />
        </section>

        <section>
          <Slider />
        </section>

        <section>
          <BathroomTrends />
        </section>

        <section>
          <Qualities />
        </section>

        <section>
          <InteractiveDemoSection />
        </section>

        <section>
          <Blog />
        </section>

        <Footer />
      </main>
    </div>
  );
}

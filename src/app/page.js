import AboutHeatMakers from "@/components/AboutHeatMakers";
import Blog from "@/components/Blog";
import FloatingActionButton from "@/components/common/FloatingActionButton";
import Footer from "@/components/common/Footer";
import FutureOfBathroom from "@/components/FutureOfBathroom";
import Gifi from "@/components/Gifi";
import Hero from "@/components/Hero";
import Qualities from "@/components/Qualities";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Image
        width={500}
        height={900}
        alt="yellow-circle"
        src="/images/yellow-circle.png"
        className="absolute top-[780px] lg:top-[840px] 3xl:top-[860px] left-[-40px] z-0 max-w-[500px] max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="red-circle"
        src="/images/red-circle.png"
        className="absolute top-[1800px] 3xl:top-[1980px] right-[-50px] z-0 max-w-[500px] max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="yellow-circle"
        src="/images/yellow-circle.png"
        className="absolute top-[4300px] 3xl:top-[4550px] left-[-40px] z-0 max-w-[500px] max-h-[500px] 3xl:max-h-[800px]"
      />
      <Image
        width={500}
        height={900}
        alt="red-circle"
        src="/images/red-circle.png"
        className="absolute top-[5700px] 3xl:top-[6000px] right-[-50px] z-0 max-w-[500px] max-h-[500px] 3xl:max-h-[800px]"
      />
      <FloatingActionButton />
      <div className="container p-5 max-w-[1920px] mx-auto ">
        <Hero />
        <AboutHeatMakers />
        <Slider />
        <FutureOfBathroom />
        <Qualities />
        <Gifi />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

import AboutHeatMakers from "@/components/AboutHeatMakers";
import Blog from "@/components/Blog";
import Footer from "@/components/common/Footer";
import FutureOfBathroom from "@/components/FutureOfBathroom";
import Gifi from "@/components/Gifi";
import Hero from "@/components/Hero";
import Qualities from "@/components/Qualities";
import Slider from "@/components/Slider";

export default function Home() {
  return (
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
  );
}

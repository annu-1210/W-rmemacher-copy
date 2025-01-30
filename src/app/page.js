
import AboutHeatMakers from "@/components/AboutHeatMakers";
import Blog from "@/components/Blog";
import Footer from "@/components/common/Footer";
import FutureOfBathroom from "@/components/FutureOfBathroom";
import Gifi from "@/components/Gifi";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container p-5 max-w-[1920px] mx-auto ">
      <Hero/>
      <AboutHeatMakers/>
      <FutureOfBathroom/>
      <Gifi/>
      <Blog/>
      <Footer/>
    </div>
  );
}

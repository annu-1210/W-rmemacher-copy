
import AboutHeatMakers from "@/components/AboutHeatMakers";
import FutureOfBathroom from "@/components/FutureOfBathroom";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container p-5 max-w-[1920px] mx-auto">
      <Hero/>
      <AboutHeatMakers/>
      <FutureOfBathroom/>
    </div>
  );
}

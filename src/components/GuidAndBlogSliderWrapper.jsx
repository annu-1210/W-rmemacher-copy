import React from "react";
import GuideAndBlogSlider from "./common/GuideAndBlogSlider";

function GuidAndBlogSliderWrapper() {
  const guideAndBlogHeroSlider = [
    {
      id: 1,
      image: {
        src: "/images/w-19.jpeg",
        alt: "Slider Image 1",
        position: "object-center",
      },
      description:
        "Lorem ipsum dolor sit amet consectet acilisis lorem tincidunt leo odio lacinia sed donec pretium gravida. Turpis.",
      heading: {
        primaryText: "Lorem ipsum dolor sit amet conse ",
        secondaryText: "cteturet aliquet tellus et.",
      },
      layout: {
        position: "top-[80px] xsm:top-[120px] sm:top-[125px] md:top-[155px]",
        textWidth: "w-[450px] lg:w-[718px]",
      },
      dimensions: {
        width: 1920,
        height: 690,
      },
      buttonText: "Cteturet aliquet",
    },

    {
      id: 2,
      image: {
        src: "/images/w-1.png",
        alt: "Slider Image 2",
        position: "object-center",
      },
      description:
        "Lorem ipsum dolor sit amet consectet acilisis lorem tincidunt leo odio lacinia sed donec pretium gravida. Turpis.",
      heading: {
        primaryText: "Lorem ipsum dolor sit amet conse ",
        secondaryText: "cteturet aliquet tellus et.",
      },
      layout: {
        position: "top-[80px] xsm:top-[120px] sm:top-[125px] md:top-[155px]",
        textWidth: "w-[450px] lg:w-[718px]",
      },
      dimensions: {
        width: 1920,
        height: 690,
      },
      buttonText: "Cteturet aliquet",
    },
  ];
  return (
    <div className="max-w-[1920px] w-full mx-auto mt-[30px] h-[350px] sm:h-[440px] md:h-[520px] lg:h-[662px] xl:h-[690px]">
      <GuideAndBlogSlider SliderData={guideAndBlogHeroSlider} />
    </div>
  );
}

export default GuidAndBlogSliderWrapper;

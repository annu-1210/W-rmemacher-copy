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
        position:
          "top-[60px] xsm:top-[30px] sm:top-[30px] md:top-[120px] lg:top-[270px] xl:top-[155px]",
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
        position:
          "top-[60px] xsm:top-[30px] sm:top-[30px] md:top-[120px] lg:top-[270px] xl:top-[155px]",
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
    <div className="max-w-[1920px] w-full mx-auto mt-[30px] h-[690px]">
      <GuideAndBlogSlider SliderData={guideAndBlogHeroSlider} />
    </div>
  );
}

export default GuidAndBlogSliderWrapper;

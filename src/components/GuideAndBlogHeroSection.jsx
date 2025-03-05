import React from "react";
import GuideAndBlogSlider from "./common/GuideAndBlogSlider";

function GuideAndBlogHeroSection() {
  const guideAndBlogHeroSlider = [
    {
      id: 1,
      image: {
        src: "/images/w-4.png",
        alt: "Slider Image 1",
        position: "object-top",
      },
      description:
        "Lorem ipsum dolor sit amet consectet acilisis lorem tincidunt leo odio lacinia sed donec pretium gravida. Turpis.",
      heading: {
        primaryText: "Lorem ipsum dolor sit amet conse ",
        secondaryText: "cteturet aliquet tellus et.",
      },
      layout: {
        position:
          "top-[160px] md:top-[240px] lg:top-[260px] xl:top-[278px]",
        textWidth: "w-[450px] lg:w-[718px]",
      },
      dimensions: {
        width: 1920,
        height: 770,
      }
    },

    {
      id: 2,
      image: {
        src: "/images/w-1.png",
        alt: "Slider Image 2",
        position: "object-top",
      },
      description:
        "Lorem ipsum dolor sit amet consectet acilisis lorem tincidunt leo odio lacinia sed donec pretium gravida. Turpis.",
      heading: {
        primaryText: "Lorem ipsum dolor sit amet conse ",
        secondaryText: "cteturet aliquet tellus et.",
      },
      layout: {
        position:
          "top-[160px] md:top-[240px] lg:top-[260px] xl:top-[278px]",
        textWidth: "w-[450px] lg:w-[718px]",
      },
      dimensions: {
        width: 1920,
        height: 770,
      }
    },
    {
      id: 3,
      image: {
        src: "/images/w-6.png",
        alt: "Slider Image 3",
        position: "object-top",
      },
      description:
        "Lorem ipsum dolor sit amet consectet acilisis lorem tincidunt leo odio lacinia sed donec pretium gravida. Turpis.",
      heading: {
        primaryText: "Lorem ipsum dolor sit amet conse ",
        secondaryText: "cteturet aliquet tellus et.",
      },
      layout: {
        position:
          "top-[160px] md:top-[240px] lg:top-[260px] xl:top-[278px]",
        textWidth: "w-[450px] lg:w-[718px]",
      },
      dimensions: {
        width: 1920,
        height: 770,
      }
    },
  ];

  return (
    <div className="max-w-[1920px] w-full mx-auto h-[350px] sm:h-[440px] md:h-[520px] lg:h-[662px] xl:h-[770px]">
      <GuideAndBlogSlider SliderData={guideAndBlogHeroSlider} />
    </div>
  );
}

export default GuideAndBlogHeroSection;

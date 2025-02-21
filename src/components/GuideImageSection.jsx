import React from "react";
import ImageTextLayout from "./common/ImageTextLayout";
import Image from "next/image";

function GuideImageSection() {
  const imageTextLayoutData = {
    imageSrc: "/images/w-18.jpeg",
    heading: {
      regular: "Lorem Ipsum Dolor Sit ",
      italic: "Amet Consectetur ",
    },
    content: [
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt fermentum eleifend tristique scelerisque. Consectetur cursus faucibus pellentesque elit elit venenatis ultrices tincidunt consequat. Commodo in non nisl intege hasellus tempus sociis.",
    ],
    dimensions: {
      width: 552,
      height: 530,
      gap: 35,
    },
    buttonText: "Cteturet aliquet",
  };

  const images = [
    { index: 1, imageSrc: "/images/w-20.jpeg" },
    { index: 2, imageSrc: "/images/w-7.jpeg" },
  ];
  return (
    <section className="max-w-[1120px] w-full mt-[150px] mx-auto items-center justify-center">
      <div className=" w-full max-w-[1140px] 4xl:max-w-[1120px] mx-auto flex flex-col items-center justify-center gap-y-[30px] ">
        <ImageTextLayout layout={imageTextLayoutData} direction="flex-row-reverse"/>
        <div className="flex items-center justify-between gap-9 w-full">
          {images.map((img) => {
            return (
              <div key={img.index} className="w-[552px] h-[530px]">
                <Image
                  src={img.imageSrc}
                  alt="image"
                  width={552}
                  height={530}
                  className="w-full h-full relative object-cover rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GuideImageSection;

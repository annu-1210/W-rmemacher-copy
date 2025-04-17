import React from "react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import { BlogData } from "./common/Helper";
import BlogCard from "./BlogCard";

function Blog() {
  const introText =
    "Lorem ipsum dolor sit amet consectetur rnare pulvinar netus egestas sagittis n haretra dui congue metus eu lectu onvallis.";
  return (
    <section className="blog">
      <div className="blog max-w-[1140px] mx-auto flex flex-col gap-2 sm:gap-12 xl:gap-[60px] justify-center mt-16 sm:mt-[100px] md:mt-[130px] lg:mt-[150px] h-full ">
        <header className="flex justify-between items-center ">
          <div className="max-w-[180px] xsm:max-w-[260px] sm:max-w-[400px] md:max-w-[690px] w-full flex flex-col gap-y-1 md:gap-y-5 justify-start">
            <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] font-MontserratMedium leading-5 xsm:leading-[51.2px] text-start">
              Blog und
              <span className="font-PpEditorialRegular italic "> Ratgeber</span>
            </h3>
            <p className="max-w-[558px] text-ironGray">
              <Text label={introText} size="xsm" />
            </p>
          </div>
          <ActionButton label="Alle ansehen" color="quaternary" size="lg" />
        </header>
        <div className="flex flex-col sm:flex-row-reverse xl:flex-row  items-center sm:items-start h-full w-full gap-y-6 sm:gap-x-6">
          <section className="flex flex-col gap-[34px] pt-6 lg:pt-10 xl:pt-0 max-w-[350px] sm:max-w-[300px] md:max-w-[500px] xl:max-w-[606px] ">
            {BlogData.section1.map((item) => {
              return (
                <BlogCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  width={606}
                  height={item.height}
                />
              );
            })}
          </section>
          <section className="flex flex-col gap-[30px] max-w-[350px] sm:max-w-[510px] h-full ">
            {BlogData.section2.map((item) => {
              return (
                <BlogCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  width={510}
                  height={item.height}
                />
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}

export default Blog;

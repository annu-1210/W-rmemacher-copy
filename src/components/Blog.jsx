import React from "react";
import Text from "./common/Text";
import ActionButton from "./common/ActionButton";
import { BlogData1 } from "./common/Helper";
import { BlogData2 } from "./common/Helper";
import Image from "next/image";

function Blog() {
  const para =
    "Lorem ipsum dolor sit amet consectetur rnare pulvinar netus egestas sagittis n haretra dui congue metus eu lectu onvallis.";
  return (
    <section className="blog">
      <div className="blog max-w-[1140px] mx-auto flex flex-col gap-2 sm:gap-12 xl:gap-[60px] justify-center mt-16 sm:mt-[100px] md:mt-[130px] lg:mt-[150px] h-full ">
        <div className="flex justify-between items-center ">
          <div className="max-w-[180px] xsm:max-w-[260px] sm:max-w-[400px] md:max-w-[690px] w-full flex flex-col gap-y-1 xl:gap-y-2 justify-start">
            <h3 className="text-xl xsm:text-2xl sm:text-3xl md:text-[38px] xl:text-[42px] font-MontserratMedium leading-5 xsm:leading-[51.2px] text-start">
              Blog und
              <span className="font-PpEditorialRegular italic "> Ratgeber</span>
            </h3>
            <p className="max-w-[558px]">
              <Text label={para} size="xsm" />
            </p>
          </div>
          <ActionButton label="Alle ansehen" color="primary" size="lg" />
        </div>
        <div className="flex flex-col sm:flex-row-reverse xl:flex-row  items-center sm:items-start h-full w-full gap-y-6 sm:gap-x-6">
          <div className="flex flex-col gap-[34px] pt-6 lg:pt-10 xl:pt-0 max-w-[350px] sm:max-w-[300px] md:max-w-[500px] xl:max-w-[606px] ">
            {BlogData1.map((item) => {
              return (
                <article className="flex flex-col gap-y-4 lg:gap-y-6 w-full" key={item.id}>
                  <Image
                    src={item.img}
                    alt="blog1"
                    width={606}
                    height={item.height}
                    className=""
                  />
                  <div className="flex flex-col gap-y-1 xl:gap-y-2 max-w-[578px] w-full ">
                    <h4 className="font-MontserratMedium leading-5 xsm:leading-6 lg:leading-[30px] text-sm xsm:text-base lg:text-xl text-secondary">
                      {item.title}
                    </h4>
                    <p className="text-[10px] xsm:text-xs lg:text-sm xl:text-base font-MontserratRegular leading-4 xsm:leading-[18px] lg:leading-5 xl:leading-6 ">
                      {item.description}
                      <a href="/" className="text-tertiary">
                        read more...
                      </a>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="flex flex-col gap-[30px] max-w-[350px] sm:max-w-[510px] h-full ">
            {BlogData2.map((item) => {
              return (
                <article className="flex flex-col gap-y-6 w-full" key={item.id}>
                  <Image src={item.img} alt="blog1" width={510} height={230} />
                  <div className="flex flex-col gap-y-1 xl:gap-y-2 max-w-[510px] w-full ">
                    <h4 className="font-MontserratMedium leading-5 xsm:leading-6 lg:leading-[30px] text-sm xsm:text-base lg:text-xl text-secondary">
                      {item.title}
                    </h4>
                    <p className="text-[10px] xsm:text-xs lg:text-sm xl:text-base font-MontserratRegular leading-4 xsm:leading-[18px] lg:leading-5 xl:leading-6 ">
                      {item.description}
                      <a href="/" className="text-tertiary">
                        read more...
                      </a>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

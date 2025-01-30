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
    <div className="blog max-w-[1140px] mx-auto flex flex-col gap-[60px] justify-center mt-[150px] h-[1208px] ">
      <div className="flex justify-between items-center ">
        <div className="max-w-[690px] w-full flex flex-col gap-y-2 justify-start">
          <h3 className="text-[42px] font-MontserratMedium leading-[51.2px] text-start">
            Blog und
            <span className="font-PpEditorialRegular italic"> Ratgeber</span>
          </h3>
          <p className="max-w-[558px]">
            <Text label={para} size="xsm" />
          </p>
        </div>
        <ActionButton label="Alle ansehen" color="primary" size="lg" />
      </div>
      <div className="flex justiiy-between h-[1038px] w-full gap-6">
        <div className="flex flex-col gap-[34px] max-w-[606px] max-h-[598px]">
          {BlogData1.map((item) => {
            return (
              <div className="flex flex-col gap-y-6 w-full" key={item.id}>
                <Image src={item.img} alt="blog1" width={606} height={item.height} />
                <div className="flex flex-col gap-y-2 max-w-[578px] w-full ">
                  <h4 className="font-MontserratMedium leading-[30px] text-xl text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-base font-MontserratRegular leading-6 ">
                    {item.description}
                    <a href="/" className="text-tertiary">
                      read more...
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[30px] max-w-[510px] max-h-[598px]">
          {BlogData2.map((item) => {
            return (
              <div className="flex flex-col gap-y-6 w-full" key={item.id}>
                <Image src={item.img} alt="blog1" width={510} height={230} />
                <div className="flex flex-col gap-y-2 max-w-[510px] w-full ">
                  <h4 className="font-MontserratMedium leading-[30px] text-xl text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-base font-MontserratRegular leading-6 ">
                    {item.description}
                    <a href="/" className="text-tertiary">
                      read more...
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;

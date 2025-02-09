import React from "react";
import Image from "next/image";

const BlogCard = ({ img, title, description, width, height }) => (
  <article className="flex flex-col gap-y-4 lg:gap-y-6 w-full">
    <Image src={img} alt={title} width={width} height={height} />
    <div className="flex flex-col gap-y-1 xl:gap-y-2 max-w-full">
      <h4 className="font-MontserratMedium leading-5 xsm:leading-6 lg:leading-[30px] text-sm xsm:text-base lg:text-xl text-secondary">
        {title}
      </h4>
      <p className="text-[10px] xsm:text-xs lg:text-sm xl:text-base font-MontserratRegular leading-4 xsm:leading-[18px] lg:leading-5 xl:leading-6 text-textColor">
        {description}
        <a href="/" className="text-tertiary">
          {" "}
          read more...
        </a>
      </p>
    </div>
  </article>
);

export default BlogCard;

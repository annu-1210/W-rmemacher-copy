import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Article({ image, height, id, description }) {
  return (
    <article className="flex flex-col gap-y-5 max-h-[942px] max-w-[558px] ">
      <div
        className="max-w-full rounded-2xl "
        style={{ height: `${height}px` }}
      >
        <Image
          src={image}
          width={558}
          height={height}
          alt={id}
          className="rounded-2xl w-full h-full object-center object-cover"
        />
      </div>
      <p>
        <Text label={description} size="xsm" />
      </p>
    </article>
  );
}

export default Article;

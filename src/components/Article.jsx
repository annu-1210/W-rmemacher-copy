import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Article({ image, height, id, description }) {
  return (
    <article className="flex flex-col gap-y-3 xl:gap-y-5 max-h-[942px] max-w-[558px] h-full">
      <div
        className="max-w-full rounded-2xl w-full h-full"
        style={{
          maxHeight: height ? `${height}px` : "100%",
          height: height ? "auto" : "100%",
        }}
      >
        <Image
          src={image}
          width={558}
          height={height}
          alt={id}
          className="rounded-2xl max-w-[558px] 4xl:max-w-[600px] w-full h-full object-center object-cover"
          style={{
            height: id === 1 ? "clamp(300px, 50vh, 850px)" : `${height}px`,
          }}
        />
      </div>
      <p>
        <Text label={description} size="xsm" />
      </p>
    </article>
  );
}

export default Article;

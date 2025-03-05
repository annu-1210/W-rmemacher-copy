import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Article({ image, id, description }) {
  return (
    <article className="flex flex-col space-y-4 ">
      <div className="relative w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          width={558}
          height={558}
          alt={description || "Article image"}
          className="w-full h-full object-cover"
          priority={id === 1}
        />
      </div>
      {description && (
        <p className="">
          <Text label={description} size="xsm" />
        </p>
      )}
    </article>
  );
}

export default Article;

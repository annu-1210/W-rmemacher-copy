import React from "react";
import Text from "./common/Text";
import { navLinks } from "./common/Helper";
// import { useRouter } from "next/router";

function FutureOfBathroom() {
  // const router = useRouter();
  const para =
    "Technologische und funktionale Maßstäbe für die nächste Generation des Bads neu definiert.";
  return (
    <div className="max-w-[1107px] mx-auto flex flex-col items-center gap-y-10 mx-auto mt-[150px]">
      <div className="max-w-[690px] text-center flex flex-col gap-y-2">
        <h3 className="text-[42px] font-MontserratMedium leading-[51.2px] text-center">
          Die Zukunft für
          <span className="!font-PpEditorialRegular italic">
            Ihr Badezimmer
          </span>
        </h3>
        <p className="text-center">
          <Text label={para} size="md" color="secondary" />
        </p>
      </div>
      <div className="max-w-[1107px] max-h-[613px] gap-y-[70px]">
        <div className="w-[753px] h-[44px] flex gap-x-[30px] border-b border-neutral">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-secondary text-xl font-MontserratRegular w-full flex justify-center"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default FutureOfBathroom;

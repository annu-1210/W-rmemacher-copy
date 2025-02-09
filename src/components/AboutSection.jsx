import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function AboutSection() {
  const para =
    "Wärmemacher verkörpert den Fortschritt im Bereich der Badezimmerspiegel. Als Pioniere auf dem Gebiet der Infrarot-Heiztechnologie und Smart Home-Integration setzen wir neue Standards in Komfort, Effizienz und Nachhaltigkeit.";
  return (
    <div className="max-w-[410px] sm:max-w-[1107px] flex flex-col sm:flex-row items-center justify-between gap-10 md:gap-[60px] ">
      <Image
        src="/images/w-7.jpeg"
        alt="Image"
        width={502}
        height={449}
        className="w-full max-w-[300px] lg:max-w-[490px] xl:max-w-[502px] rounded-2xl "
      />
      <p className="max-w-[380px] sm:!max-w-[545px] flex items-center justify-center text-center sm:text-start !text-textColor">
        <Text label={para} size="md"  />
      </p>
    </div>
  );
}

export default AboutSection;

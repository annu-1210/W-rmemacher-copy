import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function AboutSection() {
  const para =
    "Wärmemacher verkörpert den Fortschritt im Bereich der Badezimmerspiegel. Als Pioniere auf dem Gebiet der Infrarot-Heiztechnologie und Smart Home-Integration setzen wir neue Standards in Komfort, Effizienz und Nachhaltigkeit.";
  return (
    <div className="max-w-[1107px] flex items-center justify-between gap-[60px] ">
      <Image
        src="/images/w-7.jpeg"
        alt="Image"
        width={502}
        height={449}
        className="w-full max-w-[490px] xl:max-w-[502px] rounded-2xl "
      />
      <p className="max-w-[545px] flex items-center justify-center">
        <Text label={para} size="sm" color="secondary" />
      </p>
    </div>
  );
}

export default AboutSection;

import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Sustainability() {
  const para =
    "Bei Wärmemacher liegt unser Fokus auf einer umweltbewussten Herstellung und Nutzung. Unsere Spiegel werden nachhaltig versendet und sind mit energiesparenden LED-Technologien ausgestattet. Durch die intelligente Infrarot-Heizung fördern wir nicht nur Ihre Vitalität und Ihr Wohlbefinden, sondern auch eine energieeffiziente und nachhaltige Nutzung in Ihrem Zuhause.";
  return (
    <div className="max-w-[1107px] flex items-center justify-between gap-[60px] ">
      <Image
        src="/images/w-8.png"
        alt="Image"
        width={502}
        height={449}
        className="w-full max-w-[502px] rounded-2xl absolute top-px z-0"
      />
      <p className="max-w-[545px] ">
        <Text label={para} size="md" color="secondary" />
      </p>
    </div>
  );
}

export default Sustainability;

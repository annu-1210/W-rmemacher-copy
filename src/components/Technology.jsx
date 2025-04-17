import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Technology() {
  const para =
    "Unsere Spiegel verbinden modernste Technologien für ein unvergleichliches Erlebnis. Mit Smart Home-Funktionen, integrierter Infrarot-Heizung und Anti-Beschlagsfunktion schaffen wir einen Spiegel, der mehr kann: Wärme, Licht und Komfort in einem eleganten Design. Bedienen Sie Ihren Spiegel über WiFi und erleben Sie die nächste Stufe des Badezimmers von Morgen.";
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-10 md:gap-[60px]">
    <div className="w-full sm:w-1/2 flex justify-center">
      {/* CHANGED: Added Next.js Image component */}
      <Image
        src="/images/w-9.jpeg"
        alt="Image"
        width={502}
        height={449}
        className="w-full max-w-[300px] lg:max-w-[490px] xl:max-w-[502px] rounded-2xl object-cover"
      />
    </div>
    <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start">
      <p className="max-w-[380px] sm:max-w-[545px] text-center sm:text-start text-ironGray">
        <Text label={para} size="md" />
      </p>
    </div>
  </div>
  );
}

export default Technology;

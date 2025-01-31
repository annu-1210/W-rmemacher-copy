import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Technology() {
  const para =
    "Unsere Spiegel verbinden modernste Technologien für ein unvergleichliches Erlebnis. Mit Smart Home-Funktionen, integrierter Infrarot-Heizung und Anti-Beschlagsfunktion schaffen wir einen Spiegel, der mehr kann: Wärme, Licht und Komfort in einem eleganten Design. Bedienen Sie Ihren Spiegel über WiFi und erleben Sie die nächste Stufe des Badezimmers von Morgen.";
  return (
    <div className="max-w-[1107px] flex items-center justify-between gap-[60px] ">
      <Image
        src="/images/w-9.jpeg"
        alt="Image"
        width={502}
        height={449}
        className="w-full max-w-[502px] rounded-2xl "
      />
      <p className="max-w-[545px] ">
        <Text label={para} size="sm" color="secondary" />
      </p>
    </div>
  );
}

export default Technology;

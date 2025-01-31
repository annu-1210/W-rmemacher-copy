import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Services() {
  const para =
    "Unser Service endet nicht mit dem Kauf. Wir bieten Ihnen umfassende Unterstützung, von der Beratung bis zur Installation. Unser engagiertes Team steht Ihnen jederzeit zur Verfügung, um sicherzustellen, dass Ihr Wärmemacher-Spiegel stets optimal funktioniert und Sie lange Freude daran haben.";
  return (
    <div className="max-w-[1107px] flex items-center justify-between gap-[60px] ">
      <Image
        src="/images/w-10.png"
        alt="Image"
        width={502}
        height={449}
        className="w-full max-w-[502px] rounded-2xl absolute top-px z-0"
      />
      <p className="max-w-[521px] ">
        <Text label={para} size="md" color="secondary" />
      </p>
    </div>
  );
}

export default Services;

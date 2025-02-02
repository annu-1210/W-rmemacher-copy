import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Services() {
  const para =
    "Unser Service endet nicht mit dem Kauf. Wir bieten Ihnen umfassende Unterstützung, von der Beratung bis zur Installation. Unser engagiertes Team steht Ihnen jederzeit zur Verfügung, um sicherzustellen, dass Ihr Wärmemacher-Spiegel stets optimal funktioniert und Sie lange Freude daran haben.";
  return (
    <div className="max-w-[410px] sm:max-w-[1107px] flex flex-col sm:flex-row items-center justify-between gap-10 md:gap-[60px] ">
      <Image
        src="/images/w-10.jpeg"
        alt="Image"
        width={502}
        height={449}
        className="w-full max-w-[300px] lg:max-w-[490px] xl:max-w-[502px] rounded-2xl "
      />
      <p className="max-w-[380px] sm:max-w-[521px] text-center sm:text-start">
        <Text label={para} size="sm" color="secondary" />
      </p>
    </div>
  );
}

export default Services;

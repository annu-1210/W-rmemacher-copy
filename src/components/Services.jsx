import Image from "next/image";
import React from "react";
import Text from "./common/Text";

function Services() {
  const para =
    "Unser Service endet nicht mit dem Kauf. Wir bieten Ihnen umfassende Unterstützung, von der Beratung bis zur Installation. Unser engagiertes Team steht Ihnen jederzeit zur Verfügung, um sicherzustellen, dass Ihr Wärmemacher-Spiegel stets optimal funktioniert und Sie lange Freude daran haben.";
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-10 md:gap-[60px]">
      <div className="w-full sm:w-1/2 flex justify-center">
        {/* CHANGED: Added Next.js Image component */}
        <Image
          src="/images/w-10.jpeg"
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

export default Services;

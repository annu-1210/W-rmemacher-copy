import React from "react";
import Text from "./common/Text";

function FutureOfBathroom() {
  const para = "Technologische und funktionale Maßstäbe für die nächste Generation des Bads neu definiert.";
  return (
    <div className="max-w-[1107px] mx-auto flex flex-col items-center gap-y-4 mx-auto mt-[150px]">
      <div className="max-w-[690px] text-center flex flex-col gap-y-2">
        <h3 className="text-[42px] font-MontserratMedium leading-[51.2px] text-center">
          Die Zukunft für <span className="!font-PpEditorialRegular italic"> Ihr Badezimmer</span>
        </h3>
        <p className="text-center">
          <Text label={para} size="md" color="secondary" />
        </p>
      </div>
      <div className="">

      </div>
    </div>
  );
}

export default FutureOfBathroom;

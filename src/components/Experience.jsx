import Image from "next/image";
import React from "react";

function Experience() {
  return (
    <div className="max-w-[1920px] max-h-[770px] h-[760px] relative overflow-hidden top-0 rounded-2xl">
      <Image 
       src="/images/w-1.png"
       alt="Hero Image"
       width={1920}
       height={1080}
       className="w-full max-w-[1920px] rounded-2xl absolute top-px z-0"/>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Experience;

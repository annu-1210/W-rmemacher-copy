import React from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";

function Header() {
  return (
    <div className="absolute z-10 bg-transparent top-0 left-0 right-0 flex items-center justify-between pt-3.5 px-10 mx-auto">
      <div className="flex items-center gap-x-5">
        {HeaderLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="text-neutral text-sm font-MontserratRegular"
          >
            {link.title}
          </a>
        ))}
      </div>
      <a href="/" className="flex w-[77px] h-[66px]">
        <Logo width={77} height={66} />
      </a>
      <div className="flex w-[450px] bg-transparent justify-end text-primary font-MontserratMedium text-xs">German</div>
    </div>
  );
}

export default Header;

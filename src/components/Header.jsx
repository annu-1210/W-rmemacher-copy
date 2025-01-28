
import React from "react";
import { NavLinks } from "./common/Helper";
import { Logo } from "./common/Icon";

function Header() {
  return (
    <div className="absolute z-10 bg-transparent top-0 left-0 right-0 flex items-center justify-between pt-3.5 px-10 mx-auto">
      <div className="flex items-center gap-x-5">
        {NavLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="text-white text-sm font-MontserratRegular"
          >
            {link.title}
          </a>
        ))}
      </div>
      <a href="/" className="flex w-[77px] h-[66px]">
        <Logo width={77} height={66}/>
      </a>
      <div></div>
    </div>
  );
}

export default Header;

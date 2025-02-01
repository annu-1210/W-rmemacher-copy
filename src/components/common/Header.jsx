"use client";
import React, { useState, useEffect } from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";
import { VscMenu } from "react-icons/vsc";
import HeaderMobile from "./HeaderMobile";
import { ImCross } from "react-icons/im";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <header className="max-w-[1920px] w-full">
      <div className="absolute z-10 bg-transparent top-0 left-0 right-0 flex items-center justify-between pt-2 xl:pt-3.5 px-8 xl:px-10 mx-auto">
        <div className="flex lg:hidden " onClick={toggleNavbar}>
          {/* {!isOpen ? ( */}
          <VscMenu size={26} className="cursor-pointer text-neutral" />
          {/* // ) : ( */}
          {/* // <ImCross size={20} /> */}
          {/* // )} */}
        </div>
        <div className="hidden lg:flex items-center gap-x-5">
          {HeaderLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-neutral text-xs xl:text-sm font-MontserratRegular"
            >
              {link.title}
            </a>
          ))}
        </div>
        <a href="/" className="flex w-[60px] xl:w-[77px] xl:h-[66px]">
          <Logo width={77} height={66} />
        </a>
        <div className="flex lg:w-[300px] xl:w-[450px] bg-transparent justify-end text-primary font-MontserratMedium text-xs">
          German
        </div>
        {isOpen && (
          <div
            className="transform transition-transform duration-300 ease-in-out absolute top-0 z-50 left-0 w-[740px] rounded-lg  w-full"
            onClick={toggleNavbar}
          >
            <HeaderMobile />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

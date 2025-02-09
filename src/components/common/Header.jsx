"use client";
import React, { useState, useEffect } from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";
import { VscMenu } from "react-icons/vsc";
import HeaderMobile from "./HeaderMobile";
import Dropdown from "../Dropdown";

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
      <div className="absolute z-10 bg-transparent top-0 left-0 right-0 flex items-center justify-between sm:pt-2 xl:pt-3.5 px-4 xsm:px-8 xl:px-10 mx-auto">
        <div
          className="flex lg:hidden w-[50px] xsm:w-10 sm:w-20"
          onClick={toggleNavbar}
        >
          <VscMenu
            size={26}
            className="cursor-pointer text-neutral w-[20px] sm:w-[26px]"
          />
        </div>
        <div className="hidden lg:flex items-center gap-x-5">
          {HeaderLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-neutral text-xs xl:text-sm font-MontserratRegular"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/"
          className="flex w-[40px] sm:w-[50px] md:w-[60px] xl:w-[77px] xl:h-[66px] items-center justify-center"
        >
          <Logo width={77} height={66} />
        </a>
        <div className="flex lg:w-[300px] xl:w-[450px] bg-transparent justify-end">
          <Dropdown />
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

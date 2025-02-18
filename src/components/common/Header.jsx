"use client";
import React, { useState, useEffect } from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import Dropdown from "../Dropdown";
import { usePathname } from "next/navigation";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  const pathname = usePathname();

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
    <header className="max-w-[1880px] w-full ">
      <div className="w-full overflow-hidden max-w-[296px] xxsm:max-w-[351px] xsm:max-w-[385px] sm:max-w-[600px] md:max-w-[728px] lg:max-w-[984px] xl:max-w-[1400px] 4xl:max-w-[1880px] absolute z-20 bg-transparent top-5 left-0 right-0 flex items-center justify-between sm:pt-2 xl:pt-3.5 px-6 md:px-8 xl:px-10 mx-auto">
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
          {HeaderLinks.map((link, index) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={index}
                href={link.url}
                className={`text-neutral text-xs xl:text-sm font-MontserratRegular underline-animation hover:text-primary ${
                  isActive ? "text-primary" : "text-neutral"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
            className="fixed inset-0 z-[999] w-[740px] rounded-lg w-full h-screen"
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
